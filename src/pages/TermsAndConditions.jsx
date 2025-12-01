import React from 'react';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

const TermsAndConditions = () => {
    return (
        <div className="min-h-screen bg-white font-sans">
            <TopBar />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-3xl font-bold mb-8">TERMS AND CONDITIONS</h1>
                <div className="prose max-w-none text-gray-700 space-y-6">
                    <h2 className="text-xl font-bold mt-6">General</h2>
                    <p>This website (the “Site”) is owned and operated by Altuvo (“Altuvo,” “we” or “us”). By using the Site, you agree to be bound by these Terms of Service and to use the Site in accordance with these Terms of Service, our Privacy Policy and any additional terms and conditions that may apply to specific sections of the Site or to products and services available through the Site or from Altuvo.</p>

                    <h2 className="text-xl font-bold mt-6">Intellectual Property Rights</h2>
                    <h3 className="text-lg font-semibold mt-4">Our limited license to you</h3>
                    <p>This Site and all the materials available on the Site are the property of us and/or our affiliates or licensors, and are protected by copyright, trademark, and other intellectual property laws. The Site is provided solely for your personal noncommercial use.</p>

                    <h3 className="text-lg font-semibold mt-4">Your license to us</h3>
                    <p>By posting or submitting any material (including, without limitation, comments, blog entries, social media postings, photos and videos) to us via the Site, internet groups, social media venues, or to any of our staff via email, text or otherwise, you are representing: (i) that you are the owner of the material, or are making your posting or submission with the express consent of the owner of the material; and (ii) that you are thirteen years of age or older.</p>

                    <h2 className="text-xl font-bold mt-6">Disclaimers</h2>
                    <p>THE INFORMATION, PRODUCTS AND SERVICES OFFERED ON OR THROUGH THE SITE AND BY ALTUVO AND ANY THIRD-PARTY SITES ARE PROVIDED “AS IS” AND WITHOUT WARRANTIES OF ANY KIND EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMISSIBLE PURSUANT TO APPLICABLE LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.</p>

                    <h2 className="text-xl font-bold mt-6">Limitation of Liability</h2>
                    <p>UNDER NO CIRCUMSTANCES, INCLUDING, BUT NOT LIMITED TO, NEGLIGENCE, SHALL WE, OUR SUBSIDIARY AND PARENT COMPANIES OR AFFILIATES BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES THAT RESULT FROM THE USE OF, OR THE INABILITY TO USE, THE SITE, INCLUDING OUR MESSAGING, BLOGS, COMMENTS OF OTHERS, BOOKS, EMAILS, PRODUCTS, OR SERVICES, OR THIRD-PARTY MATERIALS, PRODUCTS, OR SERVICES MADE AVAILABLE THROUGH THE SITE OR BY US IN ANY WAY, EVEN IF WE ARE ADVISED BEFOREHAND OF THE POSSIBILITY OF SUCH DAMAGES.</p>

                    <h2 className="text-xl font-bold mt-6">Refund Policy</h2>
                    <p>Your purchase of a product or service or ticket to an event may or may not provide for any refund. Each specific product, service, event or course will specify its own refund policy.</p>

                    <h2 className="text-xl font-bold mt-6">Termination</h2>
                    <p>We may cancel or terminate your right to use the Site or any part of the Site at any time without notice. In the event of cancellation or termination, you are no longer authorized to access the part of the Site affected by such cancellation or termination.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default TermsAndConditions;
