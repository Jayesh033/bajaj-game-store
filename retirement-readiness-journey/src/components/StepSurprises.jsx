import React from 'react';
import { cn } from '../utils/cn';

const StepSurprises = ({ step, selections, onSelect, stepIndex = 5 }) => {
    const currentSelections = selections[step.id] || {};

    const handleSubSelect = (catId, optId) => {
        onSelect(step.id, {
            ...currentSelections,
            [catId]: optId
        });
    };

    return (
        <div
            className="flex flex-col items-center justify-start w-full"
        >

            <div className="relative z-10 w-full max-w-md px-6 pt-12 pb-10 flex flex-col items-center">

                {/* Step Badge */}
                <div className="mb-6">
                    <div className="px-6 py-2 bg-blue-500 text-white rounded-full text-sm font-semibold shadow-md">
                        Step {stepIndex} of 5
                    </div>
                </div>

                {/* Title */}
                <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-3">
                    {step.title}
                </h2>

                {/* Description */}
                <p className="text-center text-slate-600 mb-6">
                    {step.description}
                </p>

                {/* Progress Bar */}
                <div className="w-full mb-10">
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-blue-500 rounded-full transition-all"
                            style={{ width: `${(stepIndex / 5) * 100}%` }}
                        />
                    </div>
                </div>

                <div className="space-y-8">
                    {step.categories.map((category) => (
                        <div key={category.id} className="space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="text-[1.5rem]">{category.icon}</span>
                                <div>
                                    <h3 className="text-[1.125rem] font-bold text-slate-800 uppercase tracking-wide">
                                        {category.title}
                                    </h3>
                                    <p className="text-[0.875rem] text-slate-400 font-medium">
                                        {category.description}
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-2 pl-4 border-l-2 border-slate-100">
                                {category.options.map((option) => {
                                    const isSelected = currentSelections[category.id] === option.id;
                                    return (
                                        <button
                                            key={option.id}
                                            onClick={() => handleSubSelect(category.id, option.id)}
                                            className={cn(
                                                "flex items-center p-3 rounded-[0.75rem] border-2 transition-all text-left group overflow-hidden",
                                                isSelected
                                                    ? "border-blue-500 bg-blue-50/30"
                                                    : "border-slate-50 bg-white hover:border-slate-200"
                                            )}
                                        >
                                            <img
                                                src={option.image}
                                                alt={option.label}
                                                className="w-12 h-12 rounded-md object-cover mr-3 shadow-sm flex-shrink-0"
                                            />
                                            <div className="flex-1 mr-2">
                                                <span className={cn(
                                                    "text-[0.75rem] font-bold tracking-tight uppercase leading-tight block",
                                                    isSelected ? "text-blue-700" : "text-slate-600"
                                                )}>
                                                    {option.label}
                                                </span>
                                            </div>
                                            <div className={cn(
                                                "px-2 py-0.5 rounded-full text-[0.625rem] font-black tracking-widest uppercase shadow-sm flex-shrink-0",
                                                option.strength === 'STRONG'
                                                    ? (isSelected ? "bg-blue-500 text-white" : "bg-slate-100 text-slate-400")
                                                    : (isSelected ? "bg-[#ff6600] text-white" : "bg-slate-100 text-slate-400")
                                            )}>
                                                {option.strength}
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StepSurprises;
