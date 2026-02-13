import React from 'react';
import { Server, Activity, Cpu, Wifi, Database, Smartphone, Zap, ArrowRight, ArrowDown } from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';

const Technology = () => {
    return (
        <div className="pt-20">
            <Section id="architecture" className="bg-bg-dark">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-text-main">The Dual-Tier Logic Engine.</h1>
                    <p className="text-text-dim max-w-2xl mx-auto">
                        A proprietary architecture fusing passive autonomic monitoring with active neurological validation.
                    </p>
                </div>

                {/* System Diagram Representation */}
                <div className="max-w-4xl mx-auto mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center text-center relative">
                        {/* Step 1 */}
                        <div className="p-6 border border-slate-200 rounded-lg bg-white shadow-sm relative z-10 transition-shadow hover:shadow-md">
                            <Activity className="mx-auto text-primary mb-2" size={32} />
                            <h3 className="font-bold text-text-main">Biomarkers</h3>
                            <p className="text-xs text-text-dim mt-1">Multi-Modal Fusion</p>

                            <div className="hidden md:flex absolute -right-8 top-1/2 -translate-y-1/2 text-text-dim justify-center w-8"><ArrowRight size={20} /></div>
                            <div className="md:hidden absolute top-full left-1/2 -translate-x-1/2 mt-1 text-text-dim z-20"><ArrowDown size={24} /></div>
                        </div>

                        {/* Step 2 */}
                        <div className="p-6 border border-slate-200 rounded-lg bg-white shadow-sm relative z-10 transition-shadow hover:shadow-md">
                            <Cpu className="mx-auto text-primary mb-2" size={32} />
                            <h3 className="font-bold text-text-main">Edge Core</h3>
                            <p className="text-xs text-text-dim mt-1">Real-Time Inference</p>

                            <div className="hidden md:flex absolute -right-8 top-1/2 -translate-y-1/2 text-text-dim justify-center w-8"><ArrowRight size={20} /></div>
                            <div className="md:hidden absolute top-full left-1/2 -translate-x-1/2 mt-1 text-text-dim z-20"><ArrowDown size={24} /></div>
                        </div>

                        {/* Step 3 */}
                        <div className="p-6 border border-slate-200 rounded-lg bg-white shadow-sm relative z-10 transition-shadow hover:shadow-md">
                            <Server className="mx-auto text-primary mb-2" size={32} />
                            <h3 className="font-bold text-text-main">Neural Cloud</h3>
                            <p className="text-xs text-text-dim mt-1">Deep Learning</p>

                            <div className="hidden md:flex absolute -right-8 top-1/2 -translate-y-1/2 text-text-dim justify-center w-8"><ArrowRight size={20} /></div>
                            <div className="md:hidden absolute top-full left-1/2 -translate-x-1/2 mt-1 text-text-dim z-20"><ArrowDown size={24} /></div>
                        </div>

                        {/* Step 4 */}
                        <div className="p-6 border border-slate-200 rounded-lg bg-white shadow-sm z-10 transition-shadow hover:shadow-md">
                            <Smartphone className="mx-auto text-primary mb-2" size={32} />
                            <h3 className="font-bold text-text-main">Interface</h3>
                            <p className="text-xs text-text-dim mt-1">Clinician Dashboard</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-text-main">
                            <Activity className="text-primary" /> The Sentinel Layer
                        </h3>
                        <p className="text-text-dim mb-6">
                            Passive hemodynamic monitoring designed to detect autonomic nervous system (ANS) dysregulation. Acts as the first line of defense, filtering noise from signal.
                        </p>
                        <ul className="space-y-2 text-sm text-text-dim">
                            <li>• Continuous Background Sampling</li>
                            <li>• Temporal Anomaly Detection</li>
                            <li>• Zero-User Intervention</li>
                        </ul>
                    </div>

                    <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-text-main">
                            <Brain className="text-primary" /> The Diagnostic Core
                        </h3>
                        <p className="text-text-dim mb-6">
                            High-dimensional neurological signal processing. Activated only when critical biomarkers are flagged, delivering objective state classification.
                        </p>
                        <ul className="space-y-2 text-sm text-text-dim">
                            <li>• Multi-Variate Signal Fusion</li>
                            <li>• Clinical-Grade Fidelity</li>
                            <li>• Physician-Ready Telemetry</li>
                        </ul>
                    </div>
                </div>
            </Section>

            <Section id="hardware" className="bg-bg-alt">
                <h2 className="text-3xl font-bold mb-12 text-center text-text-main">Technical Specifications</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            icon: Activity,
                            title: "Multi-Modal Fusion",
                            desc: "Clinical-grade synchronisation of Hemodynamic and Bio-potential signals."
                        },
                        {
                            icon: Cpu,
                            title: "Edge Neural Engine",
                            desc: "On-device temporal data processing ensuring sub-200ms latency without cloud dependency."
                        },
                        {
                            icon: Wifi,
                            title: "Secure Telemetry",
                            desc: "End-to-End encrypted data pipeline compliant with DPDP & HIPAA standards."
                        },
                        {
                            icon: Database,
                            title: "Adaptive Sampling",
                            desc: "Dynamic frequency adjustment based on user activity to maximize signal fidelity."
                        },
                        {
                            icon: Zap,
                            title: "Power Architecture",
                            desc: "Ultra-low quiescent current design optimized for continuous 24/7 background monitoring."
                        },
                        {
                            icon: Brain,
                            title: "Haptic Neuro-Loop",
                            desc: "Closed-loop biofeedback system triggering precise tactile intervention cues."
                        }
                    ].map((item, i) => (
                        <Card key={i} className="hover:bg-white hover:shadow-md transition-all duration-300" delay={i * 0.1}>
                            <item.icon className="text-primary mb-4" size={28} />
                            <h4 className="font-bold text-lg mb-2 text-text-main">{item.title}</h4>
                            <p className="text-sm text-text-dim">{item.desc}</p>
                        </Card>
                    ))}
                </div>
            </Section>
        </div>
    );
};

// Helper for 'Brain' icon since not imported above
function Brain({ className, size }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size || 24}
            height={size || 24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
            <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
            <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
            <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
            <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
            <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
            <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
            <path d="M6 18a4 4 0 0 1-1.97-1.323" />
            <path d="M19.97 16.677A4 4 0 0 1 18 18" />
        </svg>
    )
}

export default Technology;
