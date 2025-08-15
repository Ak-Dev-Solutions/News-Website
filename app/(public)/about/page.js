export default function AboutPage() {
  return (
    <div className="max-w-5xl px-4 py-12 mx-auto text-gray-800">
      {/* Heading */}
      <h1 className="mb-6 text-4xl font-bold text-center">
        About <span className="text-blue-600">USNow360</span>
      </h1>

      {/* Intro */}
      <p className="mb-6 text-lg leading-relaxed text-center text-gray-600">
        Welcome to <strong>USNow360</strong>, your trusted source for the latest
        news, trends, and updates from across the United States. We bring you
        accurate, unbiased, and timely coverage to keep you informed every day.
      </p>

      {/* Mission Section */}
      <div className="p-6 mb-8 bg-gray-100 shadow-sm rounded-xl">
        <h2 className="mb-3 text-2xl font-semibold">Our Mission</h2>
        <p className="leading-relaxed text-gray-700">
          Our mission is to deliver fact-based news and analysis that empowers
          our readers to understand current events and make informed decisions.
          We value transparency, integrity, and journalistic excellence.
        </p>
      </div>

      {/* What We Cover */}
      <div className="mb-8">
        <h2 className="mb-3 text-2xl font-semibold">What We Cover</h2>
        <ul className="pl-5 space-y-2 text-gray-700 list-disc">
          <li>Breaking News from across the US</li>
          <li>Politics & Government Updates</li>
          <li>Economy, Business & Finance</li>
          <li>Sports, Entertainment & Culture</li>
          <li>Technology & Innovation</li>
        </ul>
      </div>

      {/* Why Choose Us */}
      <div className="p-6 shadow-sm bg-blue-50 rounded-xl">
        <h2 className="mb-3 text-2xl font-semibold">Why Choose USNow360?</h2>
        <p className="leading-relaxed text-gray-700">
          At USNow360, we are committed to delivering trustworthy news free from
          political bias. Our team works around the clock to ensure that our
          readers always have access to the most important stories that shape
          America.
        </p>
      </div>

      {/* Closing */}
      <p className="mt-8 text-center text-gray-600">
        Thank you for visiting <strong>USNow360</strong>.  
        Stay connected, stay informed.
      </p>
    </div>
  );
}
