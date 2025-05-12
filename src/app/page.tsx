import Image from "next/image";
import PageWrapper from "../components/PageWrapper"; // 👈 misma ruta que Navbar

export default function Home() {
    return (
        <PageWrapper>
            <main className="min-h-screen text-[#f0f0f0] flex flex-col items-center justify-center px-6 text-center gap-4 bg-gradient-to-br from-[#6b21a8] to-[#1a0033]">
                <Image
                    src="/logo.png"
                    alt="Logo de Marcial"
                    width={140}
                    height={130}
                    className="rounded-full shadow-lg"
                    priority
                />
                <h1 className="text-4xl sm:text-5xl font-bold text-[#f0f0f0]">
                    Marcial Jiménez
                </h1>
                <h2 className="text-xl sm:text-2xl text-[#3b82f6] font-medium">
                    Full Stack Developer | C++ | React | Next.js
                </h2>
                <p className="max-w-xl text-[#dddddd] text-base sm:text-lg leading-relaxed">
                    Welcome to my personal portfolio. Discover my{" "}
                    <span className="text-[#000000] font-semibold">projects</span>, explore
                    my <span className="text-[#3b82f6] font-semibold">skills</span>, and
                    feel free to <span className="underline">contact me</span>.
                </p>
            </main>
        </PageWrapper>
    );
}
