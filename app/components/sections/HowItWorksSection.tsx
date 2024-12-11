import React from "react";
interface WorkStep {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function HowItWorksSection({
  workSteps,
}: {
  workSteps: WorkStep[];
}) {
  return (
    <section className="py-16 relative z-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Futuristic Learning Workflow
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {workSteps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-2xl text-center relative overflow-hidden border border-cyan-500"
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-cyan-500 text-black rounded-full flex items-center justify-center text-2xl font-bold">
                {step.number}
              </div>
              <div className="pt-8">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
