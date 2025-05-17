import Image from "next/image";
import PageWrapper from "../components/PageWrapper";

export default function Home() {
    return (
        <PageWrapper>
            <main className="min-h-screen text-[#f0f0f0] flex flex-col items-center justify-center px-6 text-center gap-6 bg-gradient-to-br from-[#6b21a8] to-[#1a0033]">
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
                    Welcome to my personal portfolio. Discover my {" "}
                    <span className="text-[#000000] font-semibold">projects</span>, explore
                    my <span className="text-[#3b82f6] font-semibold">skills</span>, and
                    feel free to <span className="underline">contact me</span>.
                </p>

                {/* Icon Section */}
                <div className="flex flex-wrap justify-center gap-6 mt-8">
                    {[
                        { src: "/icons/cpp.png", alt: "C++" },
                        { src: "/icons/react.png", alt: "React" },
                        { src: "/icons/nextjs.png", alt: "Next.js" },
                        { src: "/icons/javascript.png", alt: "JavaScript" },
                        { src: "/icons/html.png", alt: "HTML" },
                        { src: "/icons/css.png", alt: "CSS" },
                        { src: "/icons/linux.png", alt: "Linux" },
                    ].map(({ src, alt }) => (
                        <div
                            key={alt}
                            className="w-14 h-14 sm:w-16 sm:h-16 transform transition-transform duration-300 hover:scale-125"
                        >
                            <Image src={src} alt={alt} width={64} height={64} />
                        </div>
                    ))}
                </div>
            </main>
        </PageWrapper>
    );
}

