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
                <div className="relative rounded-lg overflow-hidden bg-black shadow-2xl aspect-w-16 aspect-h-9 mb-12 border-4 border-gray-100">
                    <iframe
                        className="w-full h-full"
                        style={{ minHeight: '450px' }}
                        src="https://www.youtube.com/embed/veLxPN5g1Ug"
                        title="Altuvo Introduction"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
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
