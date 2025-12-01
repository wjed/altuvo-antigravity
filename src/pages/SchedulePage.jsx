import React, { useEffect } from 'react';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

const SchedulePage = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans">
            <TopBar />
            <div className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-8">
                        <p className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
                            Step 2 of 2
                        </p>
                        <h1 className="mt-2 text-3xl font-extrabold text-brand-black sm:text-4xl">
                            Schedule Your Free Strategy Call
                        </h1>
                        <p className="mt-4 text-xl text-gray-500">
                            Pick a time that works for you.
                        </p>
                    </div>

                    <div
                        className="calendly-inline-widget w-full"
                        data-url="https://calendly.com/will-jedrzejczak/altuvo?hide_event_type_details=1&hide_gdpr_banner=1"
                        style={{ minWidth: '320px', height: '700px' }}
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SchedulePage;
