function About() {
    return (
        <section 
            id="about-us" 
            className="flex flex-col items-center w-full min-h-screen pt-24 pb-20 bg-[#F7E0DA]/40"
        >
            <div className="flex flex-col w-full max-w-5xl px-4 md:px-6">

                <header className="mb-16 text-center">
                    <h1 
                        className="text-5xl font-extrabold leading-tight text-primary drop-shadow-sm"
                    >
                        Our Mission: <span className="text-accent">News, Defined.</span>
                    </h1>
                    <p className="max-w-2xl mx-auto mt-5 text-xl text-gray-600">
                        Creating a platform that’s <span className="font-medium text-primary">focused, fast,</span> and <span className="font-medium text-primary">respectful of your time.</span>
                    </p>
                </header>

                <article className="relative p-8 overflow-hidden transition-all duration-300 bg-white shadow-xl mb-14 sm:p-12 rounded-2xl hover:shadow-2xl hover:-translate-y-1">
                    <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-accent to-primary rounded-t-2xl"></div>

                    <h2 className="pb-3 mb-6 text-3xl font-bold border-b border-accent text-primary">
                        Design Philosophy
                    </h2>

                    <p className="mb-6 text-lg leading-relaxed text-primary">
                        <strong>News24</strong> was built to move beyond the monotonous black-and-white grid. Our unique 
                        <span className="font-semibold text-accent"> warm color palette</span> and emphasis on 
                        <span className="font-semibold text-accent"> generous white space</span> deliver a calming, inviting reading experience.
                        Every element — from the distinct article cards to the seamless 
                        <span className="font-semibold text-accent"> animated mobile menu</span> — is designed for pure content focus.
                    </p>

                    <p className="text-lg leading-relaxed text-primary">
                        We believe that modern news consumption should be intuitive. Our 
                        <span className="font-semibold text-accent"> fully responsive layout</span> and clear 
                        <span className="font-semibold text-accent"> dual navigation</span> ensure a flawless experience across devices.
                    </p>
                </article>

                <article className="relative p-8 overflow-hidden transition-all duration-300 bg-white shadow-xl sm:p-12 rounded-2xl hover:shadow-2xl hover:-translate-y-1">
                    <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-primary to-accent rounded-t-2xl"></div>

                    <h2 className="pb-3 mb-6 text-3xl font-bold border-b border-accent text-primary">
                        Technical Foundation
                    </h2>

                    <p className="mb-6 text-lg leading-relaxed text-primary">
                        This project is a testament to <span className="font-semibold text-accent">clean, efficient web development</span>.
                        Built with <strong>React</strong> and styled exclusively with <strong>Tailwind CSS</strong>, our architecture is fast, modular, and performance-driven.
                    </p>
                    
                    <h3 className="mb-4 text-xl font-semibold text-accent">
                        Key Technical Highlights:
                    </h3>

                    <ul className="space-y-3 text-lg leading-relaxed list-disc list-inside text-primary">
                        <li>
                            <span className="font-semibold text-accent">Real-Time Data:</span> Seamless integration with APIs for news and the dynamic <strong>“Number Today”</strong> feature.
                        </li>
                        <li>
                            <span className="font-semibold text-accent">Content Parsing:</span> Custom logic to convert raw API data into clean, readable HTML.
                        </li>
                        <li>
                            <span className="font-semibold text-accent">Robust Error Handling:</span> Branded fallback UI ensures graceful error states.
                        </li>
                        <li>
                            <span className="font-semibold text-accent">Advanced UX:</span> Icon morphing, sliding menus, and refined transitions create a premium feel.
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    );
}

export default About;
