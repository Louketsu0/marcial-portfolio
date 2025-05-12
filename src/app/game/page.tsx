"use client";
import { useEffect, useRef, useState } from "react";
import PageWrapper from "../../components/PageWrapper";

export default function GamePage() {
    const canvasRef = useRef(null);
    const [started, setStarted] = useState(false);
    const [paused, setPaused] = useState(false);
    const [endMessage, setEndMessage] = useState("");
    const [lives, setLives] = useState(3);
    const [flashText, setFlashText] = useState("");

    useEffect(() => {
        if (!started) return;

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const canvasW = canvas.width;
        const canvasH = canvas.height;

        const ballRadius = 8;
        const paddleHeight = 10;
        const paddleWidth = 90;
        const brickRowCount = 6;
        const brickColumnCount = 12;
        const brickWidth = canvasW / brickColumnCount;
        const brickHeight = 20;

        const powerupLetters = [
            { letter: "S", effect: "Paddle +", color: "#00FFAA" },
            { letter: "F", effect: "Speed!", color: "#FFDD00" },
            { letter: "L", effect: "Life +1", color: "#00BFFF" },
            { letter: "D", effect: "Disabled!", color: "#FF5555" },
            { letter: "I", effect: "Inverted!", color: "#FF88FF" }
        ];

        const colors = ["#FF6B6B", "#6BCB77", "#4D96FF", "#FFD93D", "#FF7ED4", "#3B82F6"];

        let x = canvasW / 2;
        let y = canvasH - 40;
        let dx = 3;
        let dy = -3;
        let paddleX = (canvasW - paddleWidth) / 2;
        let rightPressed = false;
        let leftPressed = false;
        let paddleDisabled = false;
        let inverted = false;

        const bricks = Array.from({ length: brickColumnCount }, (_, c) =>
            Array.from({ length: brickRowCount }, (_, r) => ({
                x: 0,
                y: 0,
                status: 1,
                color: colors[Math.floor(Math.random() * colors.length)],
                powerup: Math.random() < 0.15 ? powerupLetters[Math.floor(Math.random() * powerupLetters.length)] : null,
            }))
        );

        const fallingLetters = [];

        function keyDownHandler(e) {
            if (e.key === "Right" || e.key === "ArrowRight") rightPressed = true;
            else if (e.key === "Left" || e.key === "ArrowLeft") leftPressed = true;
        }

        function keyUpHandler(e) {
            if (e.key === "Right" || e.key === "ArrowRight") rightPressed = false;
            else if (e.key === "Left" || e.key === "ArrowLeft") leftPressed = false;
        }

        document.addEventListener("keydown", keyDownHandler);
        document.addEventListener("keyup", keyUpHandler);

        function drawBall() {
            ctx.beginPath();
            ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
            ctx.fillStyle = "#ffffff";
            ctx.fill();
            ctx.closePath();
        }

        function drawPaddle() {
            ctx.beginPath();
            ctx.rect(paddleX, canvasH - paddleHeight, paddleWidth, paddleHeight);
            ctx.fillStyle = "#6b21a8";
            ctx.fill();
            ctx.closePath();
        }

        function drawBricks() {
            for (let c = 0; c < brickColumnCount; c++) {
                for (let r = 0; r < brickRowCount; r++) {
                    const b = bricks[c][r];
                    if (b.status === 1) {
                        const brickX = c * brickWidth;
                        const brickY = r * brickHeight;
                        b.x = brickX;
                        b.y = brickY;
                        ctx.beginPath();
                        ctx.rect(brickX, brickY, brickWidth, brickHeight);
                        ctx.fillStyle = b.powerup ? b.powerup.color : b.color;
                        ctx.fill();
                        ctx.closePath();
                    }
                }
            }
        }

        function drawFallingLetters() {
            for (let i = 0; i < fallingLetters.length; i++) {
                const l = fallingLetters[i];
                ctx.font = "16px Arial";
                ctx.fillStyle = l.color;
                ctx.fillText(l.letter, l.x, l.y);
                l.y += 2;

                if (
                    l.y > canvas.height - paddleHeight - 10 &&
                    l.x > paddleX &&
                    l.x < paddleX + paddleWidth
                ) {
                    applyPowerUp(l);
                    fallingLetters.splice(i, 1);
                    i--;
                } else if (l.y > canvas.height + 20) {
                    fallingLetters.splice(i, 1);
                    i--;
                }
            }
        }

        function drawFlashText() {
            if (flashText) {
                ctx.font = "bold 28px Arial";
                ctx.fillStyle = "#FFD700";
                ctx.textAlign = "center";
                ctx.fillText(flashText, canvasW / 2, canvasH / 2);
            }
        }

        function applyPowerUp(p) {
            setFlashText(p.effect);
            setTimeout(() => setFlashText(""), 1000);

            if (p.letter === "S") paddleX = Math.max(0, paddleX - 15);
            if (p.letter === "F") { dx *= 1.5; dy *= 1.5; }
            if (p.letter === "D") paddleDisabled = true;
            if (p.letter === "I") inverted = true;
            if (p.letter === "L") setLives(l => Math.min(3, l + 1));
        }

        function collisionDetection() {
            for (let c = 0; c < brickColumnCount; c++) {
                for (let r = 0; r < brickRowCount; r++) {
                    const b = bricks[c][r];
                    if (b.status === 1) {
                        if (
                            x > b.x &&
                            x < b.x + brickWidth &&
                            y > b.y &&
                            y < b.y + brickHeight
                        ) {
                            dy = -dy;
                            b.status = 0;
                            if (b.powerup) {
                                fallingLetters.push({
                                    ...b.powerup,
                                    x: b.x + brickWidth / 2,
                                    y: b.y,
                                });
                            }
                        }
                    }
                }
            }
        }

        function draw() {
            if (paused) return;

            ctx.fillStyle = "#0a001a";
            ctx.fillRect(0, 0, canvasW, canvasH);
            drawBricks();
            drawBall();
            drawPaddle();
            drawFallingLetters();
            drawFlashText();
            collisionDetection();

            if (bricks.flat().every(b => b.status === 0)) {
                setEndMessage("🏆 Victory!");
                return;
            }

            if (lives <= 0) {
                setEndMessage("💀 Game Over");
                return;
            }

            if (x + dx > canvasW - ballRadius || x + dx < ballRadius) dx = -dx;
            if (y + dy < ballRadius) dy = -dy;
            else if (y + dy > canvasH - ballRadius) {
                if (x > paddleX && x < paddleX + paddleWidth && !paddleDisabled) {
                    dy = -dy;
                } else {
                    setLives(l => Math.max(0, l - 1));
                    x = canvasW / 2;
                    y = canvasH / 2;
                    dx = 1.5 * (Math.random() > 0.5 ? 1 : -1);
                    dy = 1.5;

                    setTimeout(() => {
                        dx = 3 * Math.sign(dx);
                        dy = 3;
                    }, 1000);

                    return;
                }
            }

            if (!paddleDisabled) {
                if (!inverted) {
                    if (rightPressed && paddleX < canvasW - paddleWidth) paddleX += 5;
                    else if (leftPressed && paddleX > 0) paddleX -= 5;
                } else {
                    if (rightPressed && paddleX > 0) paddleX -= 5;
                    else if (leftPressed && paddleX < canvasW - paddleWidth) paddleX += 5;
                }
            }

            x += dx;
            y += dy;
            requestAnimationFrame(draw);
        }

        draw();

        return () => {
            document.removeEventListener("keydown", keyDownHandler);
            document.removeEventListener("keyup", keyUpHandler);
        };
    }, [started, paused]);

    return (
        <PageWrapper>
            <main className="min-h-screen bg-[#0a001a] flex flex-col items-center justify-center text-center text-white px-4 py-10 gap-6">
                <h1 className="text-4xl font-bold">🎮 Brick Breaker</h1>

                <div className="flex items-center gap-4">
                    <span className="text-lg">❤️ Lives: x{lives}</span>
                    {started && !endMessage && (
                        <button
                            onClick={() => setPaused(p => !p)}
                            className="bg-[#444] hover:bg-[#666] px-3 py-1 rounded"
                        >
                            {paused ? "Resume" : "Pause"}
                        </button>
                    )}
                </div>

                {!started && !endMessage && (
                    <button
                        onClick={() => {
                            setStarted(true);
                            setLives(3);
                            setPaused(false);
                        }}
                        className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold py-2 px-6 rounded shadow"
                    >
                        START GAME
                    </button>
                )}

                {endMessage && (
                    <div className="flex flex-col items-center gap-4">
                        <div className="text-3xl font-semibold text-yellow-300 animate-pulse">
                            {endMessage}
                        </div>
                        <button
                            onClick={() => {
                                setStarted(false);
                                setEndMessage("");
                                setLives(3);
                                setPaused(false);
                            }}
                            className="bg-[#6b21a8] hover:bg-[#7c3aed] text-white py-2 px-5 rounded shadow"
                        >
                            ¿Continuar?
                        </button>
                    </div>
                )}

                <canvas
                    ref={canvasRef}
                    width={480}
                    height={320}
                    className={`border-2 border-white rounded-md shadow-lg ${!started && "opacity-30"}`}
                ></canvas>
            </main>
        </PageWrapper>
    );
}
