interface Feature {
  gradient: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeaturesSection({ features }: { features: Feature[] }) {
    return (
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`text-center p-6 bg-gradient-to-br ${feature.gradient} rounded-lg shadow-2xl transform transition hover:scale-105`}
              >
                <div className="text-5xl mb-4 animate-pulse">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-200">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }