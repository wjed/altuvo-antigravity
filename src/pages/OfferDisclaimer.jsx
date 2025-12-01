import React from 'react';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

const OfferDisclaimer = () => {
    return (
        <div className="min-h-screen bg-white font-sans">
            <TopBar />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-3xl font-bold mb-8">OFFER DISCLAIMER</h1>
                <div className="prose max-w-none text-gray-700 space-y-6">
                    <h2 className="text-xl font-bold mt-6">General</h2>
                    <h3 className="text-lg font-semibold mt-4">Disclaimer: No Earnings Projections, Promises Or Representations</h3>
                    <p>You recognize and agree that we have made no implications, warranties, promises, suggestions, projections, representations or guarantees whatsoever to you about future prospects or earnings, or that you will earn any money, with respect to your purchase of Altuvo products, and that we have not authorized any such projection, promise, or representation by others.</p>

                    <p>Any earnings or income statements, or any earnings or income examples, are only estimates of what we think you could earn. There is no assurance you will do as well as stated in any examples. If you rely upon any figures provided, you must accept the entire risk of not doing as well as the information provided.</p>

                    <p>There is no assurance that any prior successes or past results as to earnings or income will apply, nor can any prior successes be used, as an indication of your future success or results from any of the information, content, or strategies.</p>

                    <h3 className="text-lg font-semibold mt-4">(i) The Economy.</h3>
                    <p>The economy, both where you do business, and on a national and even worldwide scale, creates additional uncertainty and economic risk. An economic recession or depression might negatively affect the results produced by Altuvo products.</p>

                    <h3 className="text-lg font-semibold mt-4">(ii) Your Success Or Lack Of It.</h3>
                    <p>Your success in using the information or strategies provided at Altuvo depends on a variety of factors. We have no way of knowing how well you will do, as we do not know you, your background, your work ethic, your dedication, your motivation, your desire, or your business skills or practices. Therefore, we do not guarantee or imply that you will get rich, that you will do as well, or that you will have any earnings at all.</p>

                    <h3 className="text-lg font-semibold mt-4">(iii) Forward-Looking Statements.</h3>
                    <p>MATERIALS CONTAINED ON THIS WEBSITE OR IN MATERIALS PURCHASED AND/OR DOWNLOADED FROM THIS WEBSITE MAY CONTAIN INFORMATION THAT INCLUDES OR IS BASED UPON FORWARD-LOOKING STATEMENTS WITHIN THE MEANING OF THE SECURITIES LITIGATION REFORM ACT OF 1995. FORWARD-LOOKING STATEMENTS GIVE OUR EXPECTATIONS OR FORECASTS OF FUTURE EVENTS.</p>

                    <h3 className="text-lg font-semibold mt-4">(iv) Due Diligence.</h3>
                    <p>You are advised to do your own due diligence when it comes to making business decisions and should use caution and seek the advice of qualified professionals. You should check with your accountant, lawyer, or professional advisor, before acting on this or any information.</p>

                    <h3 className="text-lg font-semibold mt-4">(v) Purchase Price.</h3>
                    <p>Although we believe the price is fair for the value that you receive, you understand and agree that the purchase price for Altuvo products has been arbitrarily set by us. This price bears no relationship to objective standards.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default OfferDisclaimer;
