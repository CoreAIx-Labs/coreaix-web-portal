import React from 'react';
import Section from '../components/ui/Section';

const Privacy = () => {
    return (
        <div className="pt-20">
            <Section className="bg-bg-dark min-h-screen">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-8 text-text-main">Privacy Policy</h1>
                    <p className="text-text-dim mb-12">Effective Date: Feb 2026</p>

                    <div className="space-y-8 text-text-dim">
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-text-main">1. Introduction</h2>
                            <p>
                                CoreAIx Labs LLP ("we," "us," or "our") respects the privacy of our users. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website [coreaixlabs.tech].
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-text-main">2. Data Collection</h2>
                            <p>
                                We currently only collect information you voluntarily provide to us (Name, Email, Phone) via our "Contact" or "Partner" forms for the purpose of business correspondence.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-text-main">3. Medical Data Disclaimer</h2>
                            <p>
                                Our proprietary diagnostic algorithms are currently in the R&D/Alpha phase. We do not store or process patient medical data via this public-facing website. Any clinical data collection occurs solely through secured, offline clinical trial protocols in partnership with authorized medical institutions.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-text-main">4. Data Security</h2>
                            <p>
                                We implement standard security measures to protect your personal information. However, no electronic transmission is 100% secure.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-text-main">5. Contact Us</h2>
                            <p>
                                For privacy concerns, please contact our Compliance Officer at: <a href="mailto:contact@coreaixlabs.tech" className="text-primary hover:underline">contact@coreaixlabs.tech</a>
                            </p>
                        </section>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Privacy;
