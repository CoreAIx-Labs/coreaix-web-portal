import React from 'react';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

const NeuroScan = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center bg-slate-50/50 rounded-2xl overflow-hidden border border-slate-200 shadow-inner">
            {/* 1. Background Grid (Medical Graph Look) */}
            <div className="absolute inset-0 opacity-[0.03]" 
                style={{ 
                    backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)', 
                    backgroundSize: '20px 20px' 
                }} 
            />

            {/* 2. Rotating Sentinel Rings (The "Watchdog") */}
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-[280px] h-[280px] border border-dashed border-blue-200 rounded-full opacity-40"
            />
            <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute w-[220px] h-[220px] border-[2px] border-t-transparent border-l-transparent border-blue-300 rounded-full opacity-60"
            />

            {/* 3. The Central Brain Core */}
            <div className="relative z-10">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.2)] border border-blue-100">
                    <Brain size={64} className="text-primary" />
                </div>
                
                {/* The "Breathing" Glow Effect */}
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-blue-400 rounded-full blur-xl -z-10"
                />

                {/* 4. The "Scanning Beam" (Moving Up and Down) */}
                <motion.div
                    animate={{ top: ['0%', '100%', '0%'] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-[2px] bg-blue-500 shadow-[0_0_15px_#3b82f6] z-20 opacity-80"
                />
            </div>

            {/* 5. Animated "Live Signals" (EEG/ECG Waves) */}
            <div className="absolute bottom-10 left-0 right-0 h-16 flex items-end justify-center gap-1 opacity-50 px-8">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{ height: ['20%', '80%', '30%', '60%', '20%'] }}
                        transition={{ 
                            duration: 1.5, 
                            repeat: Infinity, 
                            ease: "easeInOut",
                            delay: i * 0.1 // Staggered animation to create a "wave" look
                        }}
                        className="w-2 bg-blue-400 rounded-full"
                    />
                ))}
            </div>

            {/* 6. Floating Data Tags (Optional "Tech" Feel) */}
            <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-8 right-8 bg-white/80 backdrop-blur border border-blue-100 px-3 py-1 rounded text-[10px] font-mono text-blue-600 shadow-sm"
            >
                EEG: ACTIVE
            </motion.div>
            <motion.div 
                animate={{ y: [0, 10, 0] }} 
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-8 left-8 bg-white/80 backdrop-blur border border-blue-100 px-3 py-1 rounded text-[10px] font-mono text-emerald-600 shadow-sm"
            >
                HRV: SYNCED
            </motion.div>
        </div>
    );
};

export default NeuroScan;