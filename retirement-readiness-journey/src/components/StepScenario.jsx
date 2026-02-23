import React from 'react';
import { cn } from '../utils/cn';

const StepScenario = ({ step, selections, onSelect, stepIndex = 1 }) => {
    const currentSelection = selections[step.id];

    return (
        <div
            className="flex flex-col items-center justify-start w-full"
        >

            <div className="relative z-10 w-full max-w-md px-4 pt-6 pb-4 flex flex-col items-center">

                {/* Step Badge */}
                <div className="mb-3">
                    <div className="px-5 py-1.5 bg-blue-500 text-white rounded-full text-xs font-semibold shadow-md">
                        Step {stepIndex} of 5
                    </div>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-extrabold text-slate-900 text-center mb-1.5">
                    {step.title}
                </h2>

                {/* Description */}
                <p className="text-center text-slate-600 text-sm mb-4">
                    {step.description}
                </p>

                {/* Progress Bar */}
                <div className="w-full mb-5">
                    <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-blue-500 rounded-full transition-all"
                            style={{ width: `${(stepIndex / 5) * 100}%` }}
                        />
                    </div>
                </div>

                {/* Options - Zig-zag 2-column grid */}
                <div className="grid grid-cols-2 gap-2.5 w-full">
                    {step.options.map((option, index) => {
                        const isSelected = currentSelection === option.id;
                        const isOddColumn = index % 2 === 1;

                        return (
                            <button
                                key={option.id}
                                onClick={() => onSelect(step.id, option.id)}
                                style={isOddColumn ? { marginTop: '1.5rem' } : {}}
                                className={cn(
                                    "flex flex-col items-center text-center rounded-xl transition-all duration-300 overflow-hidden group",
                                    "bg-white/90 backdrop-blur-xl shadow-md hover:shadow-lg hover:-translate-y-0.5",
                                    isSelected
                                        ? "ring-2 ring-blue-500 bg-blue-50/90"
                                        : "hover:bg-white"
                                )}
                            >
                                <div className="h-20 w-full overflow-hidden p-2 flex items-center justify-center bg-slate-50/50">
                                    <img
                                        src={option.image}
                                        alt={option.label}
                                        className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="px-2 py-2 w-full flex flex-col items-center justify-center flex-1">
                                    <h3 className="text-[12px] font-bold text-slate-900 leading-tight">
                                        {option.label}
                                    </h3>
                                    <p className="text-[10px] text-slate-500 mt-0.5 leading-snug line-clamp-1">
                                        {option.sublabel}
                                    </p>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default StepScenario;
