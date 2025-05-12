import PageWrapper from "../../components/PageWrapper";


export default function AboutPage() {
    return (
        <PageWrapper>
            <main className="min-h-screen bg-gradient-to-br from-[#6b21a8] to-[#1a0033] text-[#f0f0f0] flex flex-col items-center justify-center px-6 text-center gap-6">
                <h1 className="text-4xl sm:text-5xl font-bold text-[#f0f0f0]">
                    About Me
                </h1>
                <p className="max-w-2xl text-[#dddddd] text-base sm:text-lg leading-relaxed">
                    I'm a <span className="text-[#3b82f6] font-semibold">Full Stack Developer</span> from Costa Rica with a background in
                    <span className="text-[#000000] font-semibold"> technical support</span>,
                    <span className="text-[#000000] font-semibold"> electronics</span> and software development.
                    I hold a Diploma in Computer Engineering and I'm currently finishing my Bachelor's degree.
                    <br /><br />
                    My strongest programming language is <span className="text-[#3b82f6] font-semibold">C++</span>,
                    and I enjoy building applications using <span className="text-[#3b82f6] font-semibold">React</span>,
                    <span className="text-[#3b82f6] font-semibold"> Next.js</span> and modern technologies.
                    <br /><br />
                    I’m fluent in English (<span className="text-[#000000] font-semibold">C2 level</span>) and always looking to grow through
                    new challenges and meaningful projects.
                </p>
            </main>
        </PageWrapper>
    );
}
