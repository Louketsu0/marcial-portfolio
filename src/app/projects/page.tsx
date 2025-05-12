import PageWrapper from "../../components/PageWrapper";


export default function ProjectsPage() {
    return (
        <PageWrapper>
            <main className="min-h-screen bg-gradient-to-br from-[#6b21a8] to-[#1a0033] text-[#f0f0f0] px-6 py-24 flex flex-col items-center gap-10">
                <h1 className="text-4xl sm:text-5xl font-bold text-center">My Projects</h1>

                <div className="grid gap-8 sm:grid-cols-2 max-w-5xl w-full">

                <div className="bg-[#0d0d0d] rounded-lg shadow-lg p-6 hover:scale-[1.02] transition-transform">
                    <h2 className="text-xl font-semibold text-[#3b82f6] mb-2">Neko no Tatakai</h2>
                    <p className="text-[#dddddd] mb-2">
                        A 3D RPG in Unity where cats fight mutant dogs. Real-time combat and rich lore.
                    </p>
                    <span className="text-sm text-[#aaaaaa] block mb-2">Unity · C# · Cinemachine</span>
                    <pre className="bg-[#1e1e1e] text-sm rounded p-3 whitespace-pre-wrap font-mono">
                        <code>
                            <span className="text-[#569CD6]">void</span>{" "}
                            <span className="text-[#DCDCAA]">Update</span>() {"{\n"}
                            {"    "}
                            <span className="text-[#569CD6]">float</span>{" "}
                            <span className="text-[#9CDCFE]">moveX</span> =
                            <span className="text-[#DCDCAA]">Input.GetAxis</span>(<span className="text-[#CE9178]">"Horizontal"</span>);{"\n"}
                            {"    "}
                            <span className="text-[#9CDCFE]">Vector3 movement</span> =
                            <span className="text-[#4EC9B0]">new</span> Vector3(moveX, 0, 0);{"\n"}
                            {"    "}
                            <span className="text-[#DCDCAA]">transform.Translate</span>(
                            movement * speed * Time.deltaTime);{"\n"}
                            {"}"}
                        </code>
                    </pre>

                </div>

                <div className="bg-[#0d0d0d] rounded-lg shadow-lg p-6 hover:scale-[1.02] transition-transform">
                    <h2 className="text-xl font-semibold text-[#3b82f6] mb-2">Workshop Manager App</h2>
                    <p className="text-[#dddddd] mb-2">
                        A .NET MAUI app to manage vehicle records using local JSON storage.
                    </p>
                    <span className="text-sm text-[#aaaaaa] block mb-2">.NET MAUI · C# · JSON</span>
                    <pre className="bg-[#1e1e1e] text-sm rounded p-3 whitespace-pre-wrap font-mono">
                        <code>
                            <span className="text-[#569CD6]">ifstream</span> <span className="text-[#9CDCFE]">file</span>(<span className="text-[#CE9178]">"inventory.txt"</span>);{"\n"}
                            <span className="text-[#569CD6]">string</span> <span className="text-[#9CDCFE]">line</span>;{"\n"}
                            <span className="text-[#569CD6]">while</span> (getline(file, line)) {"{\n"}
                            {"    "}
                            <span className="text-[#DCDCAA]">process</span>(line);{"\n"}
                            {"}"}
                        </code>
                    </pre>


                </div>

                <div className="bg-[#0d0d0d] rounded-lg shadow-lg p-6 hover:scale-[1.02] transition-transform">
                    <h2 className="text-xl font-semibold text-[#3b82f6] mb-2">Inventory Simulator</h2>
                    <p className="text-[#dddddd] mb-2">
                        A C++ app for inventory control, file handling, and sorting logic simulations.
                    </p>
                    <span className="text-sm text-[#aaaaaa] block mb-2">C++ · File I/O</span>
                    <pre className="bg-[#1e1e1e] text-sm rounded p-3 overflow-x-auto whitespace-pre-wrap font-mono">
                        <code>
                            <span className="text-[#569CD6]">#include</span>{" "}
                            <span className="text-[#CE9178]">&lt;fstream&gt;</span>{"\n"}
                            <span className="text-[#569CD6]">#include</span>{" "}
                            <span className="text-[#CE9178]">&lt;string&gt;</span>{"\n"}
                            <span className="text-[#569CD6]">using namespace</span>{" "}
                            <span className="text-[#4EC9B0]">std</span>;{"\n\n"}

                            <span className="text-[#569CD6]">ifstream</span>{" "}
                            <span className="text-[#9CDCFE]">file</span>(<span className="text-[#CE9178]">"inventory.txt"</span>);{"\n"}
                            <span className="text-[#569CD6]">string</span> <span className="text-[#9CDCFE]">line</span>;{"\n"}
                            <span className="text-[#569CD6]">while</span> (getline(file, line)) {"{\n"}
                            {"    "}
                            <span className="text-[#DCDCAA]">process</span>(line);{"\n"}
                            {"}"}
                        </code>
                    </pre>

                </div>

                <div className="bg-[#0d0d0d] rounded-lg shadow-lg p-6 hover:scale-[1.02] transition-transform">
                    <h2 className="text-xl font-semibold text-[#3b82f6] mb-2">This Portfolio</h2>
                    <p className="text-[#dddddd] mb-2">
                        Built from scratch with Next.js and Tailwind CSS, deployed on Vercel.
                    </p>
                    <span className="text-sm text-[#aaaaaa] block mb-2">Next.js · Tailwind · Vercel</span>
                    <pre className="bg-[#1e1e1e] text-sm rounded p-3 whitespace-pre-wrap font-mono">
                        <code>
                            <span className="text-[#569CD6]">export default function</span>{" "}
                            <span className="text-[#DCDCAA]">Home</span>() {"{\n"}
                            {"    "}
                            <span className="text-[#569CD6]">return</span> ({"\n"}
                            {"        "}
                            <span className="text-[#4EC9B0]">&lt;main</span>{" "}
                            className=<span className="text-[#CE9178]">\"min-h-screen bg-gradient-to-br from-[#6b21a8] to-[#1a0033]\"</span>
                            <span className="text-[#4EC9B0]">&gt;</span>{"\n"}
                            {"            "}...{"\n"}
                            {"        "}
                            <span className="text-[#4EC9B0]">&lt;/main&gt;</span>{"\n"}
                            {"    "});{"\n"}
                            {"}"}
                        </code>
                    </pre>

                </div>
                <div className="bg-[#0d0d0d] rounded-lg shadow-lg p-6 hover:scale-[1.02] transition-transform">
                    <h2 className="text-xl font-semibold text-[#3b82f6] mb-2">MS AutoData Splitter</h2>
                    <p className="text-[#dddddd] mb-2">
                        Pull Request submitted to Microsoft for handling data segmentation and auto-mail dispatch based on region codes.
                    </p>
                    <span className="text-sm text-[#aaaaaa] block mb-2">C# · Data Processing · Auto-Mail Logic</span>
                    <pre className="bg-[#1e1e1e] text-sm rounded p-3 whitespace-pre-wrap font-mono">
                        <code>
                            <span className="text-[#569CD6]">foreach</span> (<span className="text-[#4EC9B0]">var</span> sector in sectors) {"{\n"}
                            {"    "}
                            <span className="text-[#DCDCAA]">SendMail</span>(
                            sector.region,
                            <span className="text-[#DCDCAA]">CompileData</span>(sector.data));{"\n"}
                            {"}"}
                        </code>
                    </pre>
                </div>

                <div className="bg-[#0d0d0d] rounded-lg shadow-lg p-6 hover:scale-[1.02] transition-transform">
                    <h2 className="text-xl font-semibold text-[#3b82f6] mb-2">Indie Game - Terrain Collision Fix</h2>
                    <p className="text-[#dddddd] mb-2">
                        Fixed a collision bug by creating an invisible boundary layer to prevent character from merging with terrain geometry.
                    </p>
                    <span className="text-sm text-[#aaaaaa] block mb-2">Unity · C# · Collision · Level Design</span>
                    <pre className="bg-[#1e1e1e] text-sm rounded p-3 whitespace-pre-wrap font-mono">
                        <code>
                            <span className="text-[#569CD6]">void</span> <span className="text-[#DCDCAA]">OnTriggerEnter</span>(Collider other) {"{\n"}
                            {"    "}
                            <span className="text-[#569CD6]">if</span> (other.tag == <span className="text-[#CE9178]">\"Player\"</span>) {"{\n"}
                            {"        "}
                            <span className="text-[#DCDCAA]">Repel</span>(other.transform);{"\n"}
                            {"    }\n"}
                            {"}"}
                        </code>
                    </pre>
                </div>

            </div>
            </main>
        </PageWrapper>
    );
}
