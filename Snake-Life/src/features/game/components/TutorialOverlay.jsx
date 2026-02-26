import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Move, GripHorizontal } from 'lucide-react';

const TutorialOverlay = ({ onDismiss }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Auto-hide after 3.5 seconds
        const timer = setTimeout(() => {
            handleDismiss();
        }, 3500);

        // Hide immediately on any interaction
        const handleInteraction = () => handleDismiss();
        window.addEventListener('touchstart', handleInteraction, { once: true });
        window.addEventListener('keydown', handleInteraction, { once: true });
        window.addEventListener('mousedown', handleInteraction, { once: true });

        return () => {
            clearTimeout(timer);
            window.removeEventListener('touchstart', handleInteraction);
            window.removeEventListener('keydown', handleInteraction);
            window.removeEventListener('mousedown', handleInteraction);
        };
    }, []);

    const handleDismiss = () => {
        setIsVisible(false);
        if (onDismiss) setTimeout(onDismiss, 300); // allow fade out
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none"
                >
                    <div className="bg-black/80 backdrop-blur-sm p-6 rounded-2xl flex flex-col items-center shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                        {/* A hand swipe animation could go here, but an icon is simple and effective */}
                        <motion.div
                            animate={{ x: [-15, 15, -15] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                            className="bg-white/10 p-4 rounded-full mb-4"
                        >
                            <GripHorizontal size={40} className="text-white" />
                        </motion.div>

                        <h3 className="text-white font-outfit font-bold text-xl mb-1">How to Play</h3>
                        <p className="text-gray-300 font-outfit text-sm text-center">
                            <span className="md:hidden">Swipe anywhere on screen</span>
                            <span className="hidden md:inline">Use Arrow Keys on keyboard</span>
                            <br />to control the snake
                        </p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default TutorialOverlay;
