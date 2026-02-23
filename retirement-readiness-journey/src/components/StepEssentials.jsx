import React from "react";
import { cn } from "../utils/cn";

const StepEssentials = ({ step, selections, onSelect, stepIndex = 3 }) => {
    const currentSelection = selections[step.id] || [];

    return (
        <div className="flex flex-col items-center justify-start w-full">

            <div className="relative z-10 w-full max-w-md px-4 pt-4 pb-4">

                <div className="flex justify-center mb-6">
                    <div className="px-6 py-2 bg-blue-500 text-white rounded-full text-sm font-semibold">
                        Step {stepIndex} of 5
                    </div>
                </div>

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

                <div className="flex flex-col gap-3">
                    {step.options.map((option) => {
                        const isSelected = currentSelection.includes(option.id);

                        return (
                            <button
                                key={option.id}
                                onClick={() => {
                                    const next = isSelected
                                        ? currentSelection.filter(id => id !== option.id)
                                        : [...currentSelection, option.id];
                                    onSelect(step.id, next);
                                }}
                                className={cn(
                                    "flex items-center p-4 rounded-[1.25rem] bg-white/90 shadow-sm backdrop-blur-xl transition-all hover:-translate-y-0.5",
                                    isSelected && "ring-2 ring-blue-500 bg-blue-50/90"
                                )}
                            >
                                <div className="w-16 h-16 bg-slate-50/50 rounded-xl flex items-center justify-center p-2 flex-shrink-0 shadow-inner">
                                    <img
                                        src={option.image}
                                        alt={option.label}
                                        className="max-h-full max-w-full object-contain"
                                    />
                                </div>
                                <div className="flex-1 text-left ml-4">
                                    <h3 className="text-sm font-bold text-slate-900 leading-tight">
                                        {option.label}
                                    </h3>
                                    <p className="text-[11px] text-slate-500 mt-1 leading-snug line-clamp-1">
                                        {option.sublabel}
                                    </p>
                                </div>

                                <div className={cn(
                                    "ml-2 w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors border-2",
                                    isSelected
                                        ? "bg-blue-500 border-blue-500 text-white shadow-sm"
                                        : "bg-slate-50 border-slate-100 text-slate-300"
                                )}>
                                    {isSelected ? <span className="text-[10px] font-bold">✓</span> : <span className="text-[10px]">→</span>}
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default StepEssentials;
