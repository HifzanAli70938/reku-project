const Community = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#0f0f1e] via-[#1a1a2f] to-[#2a1f47]">
      <div className="absolute inset-0 bg-gradient-overlay"></div>
      <div className="relative z-10 py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-riosark text-4xl font-normal text-white text-center mb-8">
            Join Our Community
          </h2>
          <p className="font-satoshi text-lg text-gray-300 text-center max-w-3xl mx-auto">
            Connect with fellow traders and grow together
          </p>
          {/* ... rest of the content ... */}
        </div>
      </div>
    </section>
  );
};

export default Community; 