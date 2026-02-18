import { memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

/**
 * Protection meter with Bajaj Blue base and Orange fill animation.
 * Thick 14px bar, glowing pill label, bold white score.
 */
const ProtectionMeter = memo(function ProtectionMeter({ score, maxScore = 100 }) {
    const percentage = useMemo(() => {
        return Math.max(0, Math.min(100, (score / maxScore) * 100));
    }, [score, maxScore]);

    const { label, pillColor } = useMemo(() => {
        if (percentage <= 35) {
            return { label: 'Low', pillColor: '#EF4444' };
        }
        if (percentage <= 70) {
            return { label: 'Medium', pillColor: '#FF8C00' };
        }
        return { label: 'High', pillColor: '#10B981' };
    }, [percentage]);

    return (
        <div className="w-full space-y-2">
            {/* Header */}
            <div className="flex items-end justify-between px-1">
                <span className="text-[0.9rem] font-bold text-blue-950/90 tracking-wide uppercase mb-0.5">
                    Protection Score
                </span>
                <div className="flex items-center gap-2">
                    {/* Glowing pill */}
                    <span
                        className="text-[0.7rem] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full transition-colors duration-300"
                        style={{
                            backgroundColor: pillColor,
                            color: '#fff',
                            boxShadow: `0 0 10px ${pillColor}60`,
                        }}
                    >
                        {label}
                    </span>
                    {/* Bold score */}
                    <span className="text-[1.75rem] font-black text-blue-950 leading-none tabular-nums tracking-tight">
                        {Math.round(score)}
                    </span>
                </div>
            </div>

            {/* Thick progress bar */}
            <div
                className="relative w-full rounded-full overflow-hidden"
                style={{
                    height: '16px',
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    border: '1px solid rgba(255, 255, 255, 0.6)',
                    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)'
                }}
            >
                <div
                    className="h-full rounded-full transition-all duration-700 ease-out relative"
                    style={{
                        width: `${Math.max(5, percentage)}%`,
                        background: 'linear-gradient(90deg, #FF8C00 0%, #FF6600 100%)',
                        boxShadow: '0 0 12px rgba(255, 140, 0, 0.4)',
                    }}
                >
                    {/* Shine effect */}
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-white/30 to-transparent" />
                </div>
            </div>
        </div>
    );
});

ProtectionMeter.displayName = 'ProtectionMeter';

ProtectionMeter.propTypes = {
    score: PropTypes.number.isRequired,
    maxScore: PropTypes.number,
};

export default ProtectionMeter;
