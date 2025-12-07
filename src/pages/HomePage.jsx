import React from 'react';
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

const HomePage = () => {
    React.useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans">
            <TopBar />

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Headlines */}
                <div className="text-center mb-8">
                    <h2 className="text-sm md:text-base font-medium text-gray-500 tracking-[0.2em] mb-4 uppercase">
                        WATCH THE VIDEO AND DISCOVER THE
                    </h2>
                    <h1 className="text-3xl md:text-5xl font-medium text-brand-black leading-tight">
                        The 3-Part System That Got Me Offers From AWS, Palantir, and Verizon in Under 90 Days
                    </h1>
                </div>

                {/* Video Embed */}
                <div className="relative rounded-lg overflow-hidden bg-black shadow-2xl mb-12 border-4 border-gray-100" style={{ padding: '56.25% 0 0 0' }}>
                    <iframe
                        src="https://player.vimeo.com/video/1144270988?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1"
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        title="Altuvo: The Step-by-Step System to Land Elite Internships"
                    ></iframe>
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <p className="text-lg text-gray-800 mb-4">
                        Click Below To Schedule A Free Strategy Call
                    </p>
                    <Link
                        to="/schedule"
                        className="inline-block w-full md:w-auto px-12 py-5 bg-brand-blue hover:bg-brand-darkBlue text-white text-xl md:text-2xl font-bold rounded-lg shadow-lg hover:shadow-xl uppercase tracking-wide"
                    >
                        SCHEDULE YOUR FREE CALL &gt;&gt;
                    </Link>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default HomePage;
