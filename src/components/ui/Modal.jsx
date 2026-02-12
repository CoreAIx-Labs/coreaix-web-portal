import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertCircle } from 'lucide-react';
import { cn } from '../../lib/utils';
import Button from './Button';

const Modal = ({ isOpen, onClose, title, message, type = 'success' }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className={cn(
                            "relative w-full max-w-md p-6 rounded-2xl shadow-2xl overflow-hidden",
                            "bg-white border border-slate-200" // Light mode
                        )}
                    >
                        <div className="flex flex-col items-center text-center">
                            <div className={cn(
                                "w-16 h-16 rounded-full flex items-center justify-center mb-4",
                                type === 'success' ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                            )}>
                                {type === 'success' ? <CheckCircle size={32} /> : <AlertCircle size={32} />}
                            </div>

                            <h3 className="text-xl font-bold text-text-main mb-2">
                                {title}
                            </h3>

                            <p className="text-text-dim mb-6">
                                {message}
                            </p>

                            <Button onClick={onClose} className="w-full justify-center">
                                Close
                            </Button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
