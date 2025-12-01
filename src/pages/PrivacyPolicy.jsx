import React from 'react';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-white font-sans">
            <TopBar />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-3xl font-bold mb-8">PRIVACY POLICY</h1>
                <div className="prose max-w-none text-gray-700 space-y-6">
                    <p>This privacy policy sets out how Altuvo uses and protects your personal data. This privacy policy is provided in a layered format so you can click through to the specific areas set out below.</p>

                    <h2 className="text-xl font-bold mt-6">1. IMPORTANT INFORMATION AND WHO WE ARE</h2>
                    <p>This privacy policy gives you information about how Altuvo collects and uses your personal data through your use of this website, including any data you may provide when you purchase a service from us.</p>
                    <p>This website is not intended for children and we do not knowingly collect data relating to children.</p>

                    <h3 className="text-lg font-semibold mt-4">Controller</h3>
                    <p>Altuvo is the controller and responsible for your personal data (referred to as "Altuvo", "we", "us" or "our" in this privacy policy).</p>

                    <h2 className="text-xl font-bold mt-6">2. TYPES OF PERSONAL DATA WE COLLECT ABOUT YOU</h2>
                    <p>Personal data means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Identity Data</strong> includes first name, last name, any previous names, username or similar identifier, marital status, title, date of birth and gender.</li>
                        <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                        <li><strong>Financial Data</strong> includes bank account and payment card details.</li>
                        <li><strong>Transaction Data</strong> includes details about payments to and from you and other details of services you have purchased from us.</li>
                        <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, device ID and other technology on the devices you use to access this website.</li>
                        <li><strong>Profile Data</strong> includes your username and password, purchases or orders made by you, your interests, preferences, feedback and survey responses.</li>
                        <li><strong>Usage Data</strong> includes information about how you interact with and use our website and services.</li>
                        <li><strong>Marketing and Communications Data</strong> includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
                    </ul>

                    <h2 className="text-xl font-bold mt-6">3. HOW IS YOUR PERSONAL DATA COLLECTED?</h2>
                    <p>We use different methods to collect data from and about you including through:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Your interactions with us.</strong> You may give us your personal data by filling in online forms or by corresponding with us by post, phone, email or otherwise.</li>
                        <li><strong>Automated technologies or interactions.</strong> As you interact with our website, we will automatically collect Technical Data about your equipment, browsing actions and patterns.</li>
                        <li><strong>Third parties or publicly available sources.</strong> We will receive personal data about you from various third parties and public sources.</li>
                    </ul>

                    <h2 className="text-xl font-bold mt-6">4. HOW WE USE YOUR PERSONAL DATA</h2>
                    <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                        <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                        <li>Where we need to comply with a legal obligation.</li>
                    </ul>

                    <h2 className="text-xl font-bold mt-6">5. DISCLOSURES OF YOUR PERSONAL DATA</h2>
                    <p>We may share your personal data with external third parties for the purposes set out in this privacy policy.</p>

                    <h2 className="text-xl font-bold mt-6">6. INTERNATIONAL TRANSFERS</h2>
                    <p>We may transfer your personal data to service providers that carry out certain functions on our behalf outside the UK.</p>

                    <h2 className="text-xl font-bold mt-6">7. DATA SECURITY</h2>
                    <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed.</p>

                    <h2 className="text-xl font-bold mt-6">8. DATA RETENTION</h2>
                    <p>We will only retain your personal data for as long as reasonably necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements.</p>

                    <h2 className="text-xl font-bold mt-6">9. YOUR LEGAL RIGHTS</h2>
                    <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.</p>

                    <h2 className="text-xl font-bold mt-6">10. CONTACT DETAILS</h2>
                    <p>If you have any questions about this privacy policy or our privacy practices, please contact us at: help@altuvo.com</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
