import React from "react";
import { cn } from "../utils/cn";

const StepEngine = ({ step, selections, onSelect, stepIndex = 4 }) => {
    const currentSelection = selections[step.id] || [];

    return (
        <div className="flex flex-col items-center justify-start w-full">

            <div className="relative z-10 w-full max-w-md px-6 pt-12 pb-10">

                <div className="flex justify-center mb-6">
                    <div className="px-6 py-2 bg-blue-500 text-white rounded-full text-sm font-semibold shadow-md">
                        Step {stepIndex} of 5
                    </div>
                </div>

                <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-3">
                    {step.title}
                </h2>

                <p className="text-center text-slate-600 mb-6">
                    {step.description}
                </p>

                <div className="w-full mb-10">
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-blue-500"
                            style={{ width: `${(stepIndex / 5) * 100}%` }}
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-5">
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
                                    "flex items-center p-6 rounded-2xl bg-white/90 backdrop-blur-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all",
                                    isSelected && "ring-2 ring-blue-500"
                                )}
                            >
                                <img
                                    src={option.image}
                                    alt={option.label}
                                    className="w-20 h-20 rounded-lg object-cover mr-5 shadow-sm flex-shrink-0"
                                />
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-slate-900 leading-tight">
                                        {option.label}
                                    </h3>
                                    <p className="text-sm text-slate-500 mt-1">
                                        {option.sublabel}
                                    </p>
                                </div>

                                <div className="ml-2 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-400">
                                    →
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default StepEngine;
