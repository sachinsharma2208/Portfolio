import { RevealOnScroll } from "../RevealOnScroll";

const Projects = () => {
    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20 overflow-x-hidden"
        >
            <RevealOnScroll direction="right" delay={0.3}>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        {" "}
                        Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">
                                Spotify Music Player Clone
                            </h3>
                            <p className="text-gray-400 mb-4">
                                A fully responsive web-based music player inspired by Spotify. The player allows users to play, pause, Next, previous and resume songs, while also tracking progress and resuming from the last played position.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {[
                                    "HTML",
                                    "CSS",
                                    "JavaScript",
                                ].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a
                                    href="https://sachinsharma2208.github.io/spotify/"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>
                        <div
                            className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
                        >
                            <h3 className="text-xl font-bold mb-2">
                               Study Shopping
                            </h3>
                            <p className="text-gray-400 mb-4">
                                A web-based platform designed for students to easily browse, compare, and purchase study materials. Built with a clean UI and smooth cart functionality, it supports product search, add-to-cart, and secure checkout for an efficient shopping experience.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "JavaScript", "CSS"].map(
                                    (tech, key) => (
                                        <span
                                            key={key}
                                            className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                                        >
                                            {tech}
                                        </span>
                                    )
                                )}
                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href="https://sachinsharma2208.github.io/STUDY_shopping/"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>

                        <div
                            className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
                        >
                            <h3 className="text-xl font-bold mb-2">
                                Currency Converter
                            </h3>
                            <p className="text-gray-400 mb-4">
                                A simple and interactive web application that converts real-time currency values using live exchange rates. The app provides accurate conversions with a clean and responsive UI
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["HTML", "CSS", "JavaScript", "API Integration", "Context API"].map(
                                    (tech) => (
                                        <span
                                            key={tech}
                                            className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                                        >
                                            {tech}
                                        </span>
                                    )
                                )}
                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href="https://sachinsharma2208.github.io/currencyconverter/"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>

                        <div
                            className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
                        >
                            <h3 className="text-xl font-bold mb-2">
                               Stone Paper Scissor Game
                            </h3>
                            <p className="text-gray-400 mb-4">
                                Developed a fun and interactive Stone-Paper-Scissors game where players compete against the computer. The project demonstrates core concepts of JavaScript logic, DOM manipulation, and responsive design, while delivering a smooth and engaging user experience.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {[
                                    "HTML",
                                    "CSS",
                                    "JavaScript",
                                    "TailwindCSS",
                                ].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center ">
                                <a
                                    href="https://sachinsharma2208.github.io/stone-paper-scissor-game/"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};

export default Projects;
