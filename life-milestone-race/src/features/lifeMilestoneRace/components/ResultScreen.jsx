import { memo, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { Share2, Phone, Calendar, ChevronDown, ChevronUp, RefreshCw } from 'lucide-react';
import Speedometer from './Speedometer';
import TimelineSummary from './TimelineSummary';
import BookingModal from './BookingModal';

/**
 * Result Screen Redesign.
 * Single page scrolling layout with Speedometer, Timeline, and CTAs.
 */
const ResultScreen = memo(function ResultScreen({
    score,
    finalScore,
    userName,
    timeline,
    category,
    onRestart,
    gameId,
    riskGaps
}) {
    const [isTimelineOpen, setIsTimelineOpen] = useState(false);
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    // Derived logic for Score Ranges and Badge Styles
    const { label: protectionLabel, subtext, badgeColor, textColor } = useMemo(() => {
        // Ranges: 0-60 Low, 70-80 Medium, 90-100 High
        if (finalScore >= 90) {
            return {
                label: 'HIGH PROTECTION',
                subtext: "You're well prepared! Keep maintaining your financial safety net.",
                badgeColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
                textColor: 'text-emerald-700'
            };
        } else if (finalScore >= 70) {
            return {
                label: 'MEDIUM PROTECTION',
                subtext: "Good foundation, but there's room to improve your coverage.",
                badgeColor: 'bg-blue-100 text-blue-700 border-blue-200',
                textColor: 'text-blue-700'
            };
        } else {
            return {
                label: 'LOW PROTECTION',
                subtext: "Life moves faster than planning. Let's strengthen your protection.",
                badgeColor: 'bg-orange-100 text-orange-700 border-orange-200',
                textColor: 'text-orange-700'
            };
        }
    }, [finalScore]);

    const handleShare = async () => {
        const shareText = `Check LifeMilestone - Bajaj Life Insurance Game\nLifeMilestone Race\n${window.location.href}`;
        const shareData = {
            title: 'Life Milestone Race Score',
            text: shareText,
            url: window.location.href
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                console.log('Error sharing:', err);
            }
        } else {
            navigator.clipboard.writeText(shareText);
            // Could add a toast here if strictly needed, but basic alert is fine for now
            alert("Link copied to clipboard!");
        }
    };

    const handleCall = () => {
        window.location.href = 'tel:18002099999';
    };

    return (
        <div className="w-full flex flex-col items-center gap-6 pb-12 animate-fade-in relative">

            {/* Top Right Share Icon */}
            <button
                onClick={handleShare}
                className="absolute right-0 -top-2 p-2 bg-white/20 backdrop-blur-md rounded-full text-blue-900 border border-white/50 shadow-sm hover:bg-white/40 transition-all z-10"
            >
                <Share2 size={20} />
            </button>

            {/* Header Section */}
            <div className="text-center space-y-1 mt-4">
                <h1 className="text-2xl font-black text-blue-950 uppercase tracking-wider">
                    Hi {userName || 'There'}!
                </h1>
                <p className="text-blue-900/60 text-sm font-bold tracking-widest uppercase">
                    Your Score Is
                </p>
            </div>

            {/* Speedometer Section */}
            <div className="relative w-full flex flex-col items-center -mt-4">
                <Speedometer score={finalScore} />

                {/* Score Badge & Label */}
                <div className="flex flex-col items-center gap-3 -mt-4">
                    <span className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border ${badgeColor} shadow-sm`}>
                        {protectionLabel}
                    </span>
                    <p className={`text-center text-sm font-medium ${textColor} max-w-[280px] leading-relaxed`}>
                        {subtext}
                    </p>
                </div>
            </div>

            {/* Journey Toggle Section */}
            <div className="w-full">
                <button
                    onClick={() => setIsTimelineOpen(!isTimelineOpen)}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white p-4 rounded-xl shadow-lg shadow-blue-500/20 flex items-center justify-between group active:scale-[0.98] transition-all"
                >
                    <span className="font-bold text-sm uppercase tracking-wide">View Your Journey</span>
                    {isTimelineOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>

                <AnimatePresence>
                    {isTimelineOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="pt-4 px-1">
                                <TimelineSummary timeline={timeline} onContinue={() => { }} />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* CTA Section */}
            <div className="w-full space-y-4">
                {/* Support Message */}
                <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-4 backdrop-blur-sm">
                    <p className="text-blue-900/80 text-xs text-center font-medium leading-relaxed">
                        &ldquo;To know more about insurance & saving products, please connect with our relationship manager.&rdquo;
                    </p>
                </div>

                {/* Main Action Buttons */}
                <div className="grid grid-cols-2 gap-3">
                    <button
                        onClick={handleCall}
                        className="flex items-center justify-center gap-2 bg-gradient-to-br from-orange-500 to-orange-600 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-orange-500/20 active:translate-y-0.5 transition-all text-sm uppercase tracking-wide"
                    >
                        <Phone size={18} fill="currentColor" />
                        Call Now
                    </button>
                    <button
                        onClick={() => setIsBookingModalOpen(true)}
                        className="flex items-center justify-center gap-2 bg-gradient-to-br from-blue-600 to-blue-700 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-blue-600/20 active:translate-y-0.5 transition-all text-sm uppercase tracking-wide"
                    >
                        <Calendar size={18} />
                        Book A Slot
                    </button>
                </div>
            </div>

            {/* Try Again */}
            <button
                onClick={onRestart}
                className="flex items-center gap-2 text-slate-400 hover:text-slate-600 font-bold text-xs uppercase tracking-widest transition-colors mt-4"
            >
                <RefreshCw size={14} />
                Try Again
            </button>

            {/* Modals */}
            <BookingModal
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
                gameId={gameId}
                score={finalScore}
                category={category}
                riskGaps={riskGaps}
                initialName={userName}
            />
        </div>
    );
});

ResultScreen.displayName = 'ResultScreen';

ResultScreen.propTypes = {
    score: PropTypes.number,
    finalScore: PropTypes.number,
    userName: PropTypes.string,
    timeline: PropTypes.array,
    category: PropTypes.object,
    onRestart: PropTypes.func,
    gameId: PropTypes.string,
    riskGaps: PropTypes.array
};

export default ResultScreen;
