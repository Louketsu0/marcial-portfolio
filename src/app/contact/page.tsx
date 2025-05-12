import PageWrapper from "../../components/PageWrapper";

export default function ContactPage() {
    return (
        <PageWrapper>
            <main className="min-h-screen bg-gradient-to-br from-[#6b21a8] to-[#1a0033] text-[#f0f0f0] flex flex-col items-center justify-center px-6 py-24 text-center gap-6">
                <h1 className="text-4xl sm:text-5xl font-bold">Contact Me</h1>
                <p className="text-[#dddddd] max-w-xl text-base sm:text-lg leading-relaxed">
                    I'm always open to new opportunities, collaborations, or just chatting about tech.
                    Feel free to reach out through any of the channels below.
                </p>
                <ul className="text-lg flex flex-col gap-4">
                    <li>
                        📧 Email: <a href="mailto:marcjimenezing@gmail.com" className="text-[#3b82f6] hover:underline">marcjimenezing@gmail.com</a>
                    </li>
                    <li>
                        💼 GitHub: <a href="https://github.com/marcialjimenez" target="_blank" rel="noopener noreferrer" className="text-[#3b82f6] hover:underline">github.com/marcialjimenez</a>
                    </li>
                    <li>
                        🚀 Vercel: <a href="https://vercel.com/marcials-projects-562106ff" target="_blank" rel="noopener noreferrer" className="text-[#3b82f6] hover:underline">marcial-portfolio.vercel.app</a>
                    </li>
                </ul>
            </main>
        </PageWrapper>
    );
}
