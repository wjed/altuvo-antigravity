import React from 'react';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

const DataProtection = () => {
    return (
        <div className="min-h-screen bg-white font-sans">
            <TopBar />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-3xl font-bold mb-8">DATA PROTECTION</h1>
                <div className="prose max-w-none text-gray-700 space-y-6">
                    <h2 className="text-xl font-bold mt-6">Introduction</h2>
                    <p>Altuvo is committed to providing a superior learning experience for everyone we work with. We know that our users’ are committed to their success and we are equally committed to ensuring that each interaction that someone has with our content is optimized for maximum educational potential. To enable us to do this, Altuvo needs to gather and use certain information about individuals.</p>

                    <h2 className="text-xl font-bold mt-6">Why this policy exists</h2>
                    <p>This data protection policy ensures Altuvo:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Complies with data protection law and follows industry best practices</li>
                        <li>Protects the rights of staff, customers, affiliates, and partners</li>
                        <li>Is open about how it stores and processes individuals’ data</li>
                        <li>Protects itself from the risks of a data breach</li>
                    </ul>

                    <h2 className="text-xl font-bold mt-6">EU General Data Protection Regulation (GDPR)</h2>
                    <p>The GDPR (General Data Protection Regulation) protection law describes how organizations who conduct business with individuals or entities located in EU (European Union) nations — including Altuvo — must collect, handle, and store personal information.</p>

                    <h2 className="text-xl font-bold mt-6">1. Policy Statement</h2>
                    <p>Every day our business will receive, use, and store personal information about our customers, affiliates, partners, and colleagues. It is important that this information is handled lawfully and appropriately, in line with the requirements of the Data Protection Act 2018 and the General Data Protection Regulation.</p>

                    <h2 className="text-xl font-bold mt-6">2. About this policy</h2>
                    <p>This policy and any other documents referred to in it, sets out the basis on which we will process any personal data that we collect or process.</p>

                    <h2 className="text-xl font-bold mt-6">3. What is personal data?</h2>
                    <p>Personal data is defined as data, (whether stored electronically or paper based) relating to a living individual who can be identified directly or indirectly from that data.</p>

                    <h2 className="text-xl font-bold mt-6">4. Data protection principles</h2>
                    <p>Anyone processing personal data, must ensure that data is processed fairly, lawfully and in a transparent manner.</p>

                    <h2 className="text-xl font-bold mt-6">5. Fair and lawful processing</h2>
                    <p>The Data Protection Requirements are not intended to prevent the processing of personal data, but to ensure that it is done fairly and without adversely affecting the rights of the individual.</p>

                    <h2 className="text-xl font-bold mt-6">12. Data security</h2>
                    <p>We will take appropriate security measures against unlawful or unauthorized processing of personal data and against the accidental or unlawful destruction, damage, loss, alteration, or unauthorized disclosure of or access to personal data transmitted, stored, or otherwise processed.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DataProtection;
