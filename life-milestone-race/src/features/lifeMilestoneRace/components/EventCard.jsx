import { memo } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { AlertTriangle, Shield } from 'lucide-react';

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
    exit: {
        opacity: 0,
        y: -30,
        scale: 0.95,
        transition: { duration: 0.3, ease: 'easeIn' },
    },
};

/**
 * Impact badge styling — High Impact is orange, Medium Impact is blue.
 */
const IMPACT_STYLES = {
    high: {
        label: 'High Impact',
        bg: '#FF8C00',
        text: '#fff',
        glow: 'rgba(255, 140, 0, 0.4)',
        Icon: AlertTriangle,
    },
    medium: {
        label: 'Medium Impact',
        bg: 'rgba(0, 102, 178, 0.15)',
        text: '#0066B2',
        glow: 'none',
        Icon: Shield,
    },
    moderate: {
        label: 'Medium Impact',
        bg: 'rgba(0, 102, 178, 0.15)',
        text: '#0066B2',
        glow: 'none',
        Icon: Shield,
    },
};

/**
 * Hero-style event card — dramatic, game challenge feel.
 * Slightly lighter blue bg, 24px corners, soft shadow, big centered text.
 * Contains: Impact Tag, Event Title, Short Description.
 */
const EventCard = memo(function EventCard({ event }) {
    if (!event) return null;

    const impact = IMPACT_STYLES[event.severity] || IMPACT_STYLES.medium;
    const ImpactIcon = impact.Icon;

    return (
        <motion.div
            key={event.id}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full"
        >
            <div
                className="w-full text-center space-y-4 flex flex-col items-center justify-center h-full"
                style={{
                    background: 'rgba(255, 255, 255, 0.92)',
                    backdropFilter: 'blur(16px)',
                    borderRadius: '28px',
                    border: '4px solid #FFFFFF',
                    padding: '2rem 1.75rem',
                    boxShadow: '0 12px 40px rgba(0, 74, 128, 0.1), 0 4px 12px rgba(0, 0, 0, 0.05)',
                }}
            >
                {/* Impact tag */}
                <div className="flex justify-center mb-1">
                    <span
                        className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[0.85rem] font-black uppercase tracking-wider transform transition-transform"
                        style={{
                            backgroundColor: impact.bg,
                            color: impact.text,
                            boxShadow: impact.glow !== 'none' ? `0 0 16px ${impact.glow}` : undefined,
                        }}
                    >
                        <ImpactIcon size={16} strokeWidth={3} />
                        {impact.label}
                    </span>
                </div>

                {/* Event title - HERO */}
                <h3
                    className="font-black text-blue-950 leading-tight drop-shadow-sm"
                    style={{ fontSize: '1.75rem', letterSpacing: '-0.03em' }}
                >
                    {event.title}
                </h3>

                {/* Description */}
                <p
                    className="text-blue-900/80 leading-relaxed max-w-[280px] mx-auto font-medium"
                    style={{ fontSize: '1.125rem' }}
                >
                    {event.description}
                </p>
            </div>
        </motion.div >
    );
});

EventCard.displayName = 'EventCard';

EventCard.propTypes = {
    event: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        severity: PropTypes.oneOf(['high', 'medium', 'moderate']).isRequired,
        stage: PropTypes.string.isRequired,
    }),
};

export default EventCard;
