const FeaturesSection = () => {
  return (
    <section className="features bg-slate-900">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="card shadow-md rounded-lg p-6 bg-gradient-to-r from-blue-600 to-purple-600">
          <h3 className="text-xl font-bold mb-2">Precise Erasure</h3>
          <p className="text-gray-200">
            Remove unwanted elements with pixel-perfect accuracy.
          </p>
        </div>
        <div className="card shadow-md rounded-lg p-6 bg-gradient-to-r from-blue-600 to-purple-600">
          <h3 className="text-xl font-bold mb-2">Permanent Removal</h3>
          <p className="text-gray-200">
            Data is permanently deleted, ensuring complete security.
          </p>
        </div>
        <div className="card shadow-md rounded-lg p-6 bg-gradient-to-r from-blue-600 to-purple-600">
          <h3 className="text-xl font-bold mb-2">Easy to Use</h3>
          <p className="text-gray-200">
            Simple interface for quick and efficient data redaction.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
