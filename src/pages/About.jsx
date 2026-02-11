import React, { useState, useRef } from 'react';
import { Linkedin, Award, User, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const About = () => {
    const leadership = [
        {
            name: "Ronit Rathod",
            role: "Co-Founder & CEO",
            quote: "Building the brain of AI.",
            badges: ["National Finalist HST’25 (IIT Mandi)", "Ventra Guard AI — Grant Winner"],
            socials: { linkedin: "https://www.linkedin.com/in/ronitrathod/" }
        },
        {
            name: "Manan Tarsariya",
            role: "Co-Founder & COO",
            quote: "Engineering the hardware.",
            badges: ["Smart India Hackathon (Hardware) Finalist", "NASA Space Apps Nominee"],
            socials: { linkedin: "https://www.linkedin.com/in/manantarsariya/" }
        }
    ];

    const mentors = [
        { name: "Prof. Dhatri Pandya", role: "Assistant Professor, SCET" },
        { name: "Prof. Vandana Joshi", role: "Assistant Professor, SCET" }
    ];

    return (
        <div className="pt-20">
            <Section id="leadership">
                <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center">Leadership</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {leadership.map((person, i) => (
                        <Card key={i} className="relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h2 className="text-2xl font-bold text-white">{person.name}</h2>
                                    <p className="text-primary font-medium">{person.role}</p>
                                </div>
                                <div className="flex gap-2">
                                    <a href={person.socials.linkedin} target="_blank" rel="noopener noreferrer">
                                        <Linkedin size={20} className="text-gray-500 hover:text-primary cursor-pointer transition-colors" />
                                    </a>
                                </div>
                            </div>

                            <blockquote className="text-gray-300 italic mb-6 border-l-2 border-white/10 pl-4">
                                "{person.quote}"
                            </blockquote>

                            <div className="space-y-2">
                                {person.badges.map((badge, j) => (
                                    <div key={j} className="flex items-center gap-2 text-xs text-gray-400">
                                        <Award size={14} className="text-primary" />
                                        <span>{badge}</span>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section id="mentors" className="bg-bg-alt">
                <h2 className="text-3xl font-bold mb-12 text-center">Mentors</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                    {mentors.map((mentor, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
                            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                                <User className="text-gray-400" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white">{mentor.name}</h3>
                                <p className="text-sm text-gray-500">{mentor.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            <Section id="contact" className="bg-bg-dark">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
                    <Card className="bg-white/5 border-white/10">
                        <ContactForm />
                    </Card>
                </div>
            </Section>
        </div>
    );
};

const ContactForm = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus("");

        emailjs
            .sendForm(
                "service_d5fc9n9",      // ✅ SERVICE ID
                "template_6w3bcgn",       // ✅ TEMPLATE ID
                formRef.current,
                "Ii1RcDGD3mDfee2mm"       // ✅ PUBLIC KEY
            )
            .then(
                () => {
                    setLoading(false);
                    setStatus("Thank you! We will get back to you soon 🙌");
                    formRef.current.reset();
                },
                (error) => {
                    console.error(error);
                    setLoading(false);
                    setStatus("Something went wrong. Please try again ❌");
                }
            );
    };

    return (
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Your Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="John Doe"
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Your Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="john@example.com"
                />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Your Message</label>
                <textarea
                    name="message"
                    id="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                    placeholder="How can we help you?"
                />
            </div>

            <Button
                type="submit"
                variant="primary"
                disabled={loading}
                className="w-full justify-center"
            >
                {loading ? (
                    <>
                        <Loader2 className="animate-spin mr-2" size={20} />
                        Sending...
                    </>
                ) : (
                    <>
                        Send Message
                        <Send size={18} className="ml-2" />
                    </>
                )}
            </Button>

            {status && (
                <p className={`text-center text-sm ${status.includes("wrong") ? "text-red-400" : "text-green-400"}`}>
                    {status}
                </p>
            )}
        </form>
    );
};

export default About;
