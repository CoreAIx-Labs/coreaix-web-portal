import React from 'react';
import Section from '../components/ui/Section';

const Terms = () => {
    return (
        <div className="pt-20">
            <Section className="bg-bg-dark min-h-screen">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-8 text-text-main">Terms of Service</h1>
                    <p className="text-text-dim mb-12">Last Updated: Feb 2026</p>

                    <div className="space-y-8 text-text-dim">
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-text-main">1. Acceptance of Terms</h2>
                            <p>
                                By accessing and using [coreaixlabs.tech], you accept and agree to be bound by these Terms of Service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-text-main">2. Intellectual Property</h2>
                            <p>
                                All content, trademarks, logos, and technical specifications regarding "CoreAIx Labs" are the exclusive intellectual property of CoreAIx Labs LLP. Unauthorized use, reproduction, or reverse-engineering is strictly prohibited.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-text-main">3. No Medical Advice</h2>
                            <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg">
                                <p className="font-bold text-red-400 mb-2">CRITICAL DISCLAIMER:</p>
                                <p>
                                    CoreAIx Labs LLP is a medical technology developer. The content on this site is for informational and investor relations purposes only. Our technology is an Investigational Device and has not yet been commercialized for public use. Nothing on this website should be construed as professional medical advice, diagnosis, or treatment.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-text-main">4. Limitation of Liability</h2>
                            <p>
                                CoreAIx Labs LLP shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use this website.
                            </p>
                        </section>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Terms;
