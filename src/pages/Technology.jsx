import React from 'react';
import { Server, Activity, Cpu, Wifi, Database, Smartphone, Zap, ArrowRight, ArrowDown } from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';

const Technology = () => {
    return (
        <div className="pt-20">
            <Section id="architecture" className="bg-bg-dark">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">The Dual-Tier Logic Engine.</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A hybrid architecture combining edge computing for real-time biofeedback and cloud AI for clinical-grade analysis.
                    </p>
                </div>

                {/* System Diagram Representation */}
                <div className="max-w-4xl mx-auto mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center text-center relative">
                        {/* Step 1 */}
                        <div className="p-6 border border-white/10 rounded-lg bg-white/5 relative z-10">
                            <Activity className="mx-auto text-primary mb-2" size={32} />
                            <h3 className="font-bold">Sensors</h3>
                            <p className="text-xs text-gray-500 mt-1">PPG + ECG</p>

                            {/* Connector */}
                            <div className="hidden md:flex absolute -right-8 top-1/2 -translate-y-1/2 text-gray-500 justify-center w-8">
                                <ArrowRight size={20} />
                            </div>
                            <div className="md:hidden flex justify-center text-gray-500 my-2">
                                <ArrowDown size={20} />
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="p-6 border border-white/10 rounded-lg bg-white/5 relative z-10">
                            <Cpu className="mx-auto text-primary mb-2" size={32} />
                            <h3 className="font-bold">Edge Compute</h3>
                            <p className="text-xs text-gray-500 mt-1">ESP32-C3</p>

                            <div className="hidden md:flex absolute -right-8 top-1/2 -translate-y-1/2 text-gray-500 justify-center w-8">
                                <ArrowRight size={20} />
                            </div>
                            <div className="md:hidden flex justify-center text-gray-500 my-2">
                                <ArrowDown size={20} />
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="p-6 border border-white/10 rounded-lg bg-white/5 relative z-10">
                            <Server className="mx-auto text-primary mb-2" size={32} />
                            <h3 className="font-bold">Cloud AI</h3>
                            <p className="text-xs text-gray-500 mt-1">Deep Learning</p>

                            <div className="hidden md:flex absolute -right-8 top-1/2 -translate-y-1/2 text-gray-500 justify-center w-8">
                                <ArrowRight size={20} />
                            </div>
                            <div className="md:hidden flex justify-center text-gray-500 my-2">
                                <ArrowDown size={20} />
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="p-6 border border-white/10 rounded-lg bg-white/5 z-10">
                            <Smartphone className="mx-auto text-primary mb-2" size={32} />
                            <h3 className="font-bold">App</h3>
                            <p className="text-xs text-gray-500 mt-1">User Interface</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white/5 p-8 rounded-xl border border-white/10">
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                            <Activity className="text-primary" /> The Watchdog
                        </h3>
                        <p className="text-gray-400 mb-6">
                            Continuous HRV monitoring via wearable-compatible hardware. Detects stress precursors in real-time without user intervention.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li>• 24/7 Background monitoring</li>
                            <li>• Anomaly detection</li>
                            <li>• Battery efficient</li>
                        </ul>
                    </div>

                    <div className="bg-white/5 p-8 rounded-xl border border-white/10">
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                            <Brain className="text-primary" /> The Clinical Engine
                        </h3>
                        <p className="text-gray-400 mb-6">
                            EEG-verified MDD detection with 96.69% accuracy. Acted upon when anomalies are flagged by the Watchdog.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li>• 16-channel EEG analysis</li>
                            <li>• Clinical-grade precision</li>
                            <li>• Doctor-verified reports</li>
                        </ul>
                    </div>
                </div>
            </Section>

            <Section id="hardware" className="bg-bg-alt">
                <h2 className="text-3xl font-bold mb-12 text-center">Hardware Specifications</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { icon: Activity, title: "Sensors", desc: "MAX86176 (PPG + ECG), ADPD4100 optical" },
                        { icon: Cpu, title: "Processing", desc: "ESP32-C3 edge-optimized inference" },
                        { icon: Wifi, title: "Connectivity", desc: "BLE 5.0 + Wi-Fi for seamless data sync" },
                        { icon: Database, title: "Storage", desc: "Local buffering + Encrypted cloud sync" },
                        { icon: Zap, title: "Power", desc: "Low-power optimized for day-long usage" },
                        { icon: Brain, title: "Biofeedback", desc: "Haptic + auditory neuro-regulation loop" }
                    ].map((item, i) => (
                        <Card key={i} className="hover:bg-white/10" delay={i * 0.1}>
                            <item.icon className="text-primary mb-4" size={28} />
                            <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                            <p className="text-sm text-gray-400">{item.desc}</p>
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
