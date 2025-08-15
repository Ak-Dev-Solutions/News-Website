export const metadata = {
  title: "Contact Us - USNow360",
  description: "Get in touch with the USNow360 team.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen px-4 py-10">
      <div className="max-w-2xl mx-auto">
        {/* Page Heading */}
        <h1 className="text-3xl font-bold text-center text-gray-800 md:text-4xl">
          Contact Us
        </h1>
        <p className="max-w-xl mx-auto mt-3 text-center text-gray-600">
          Have a question, suggestion, or partnership idea? We’d love to hear from you.
          Fill out the form below, and our team will get back to you as soon as possible.
        </p>

        {/* Contact Form */}
        <form className="p-6 mt-10 space-y-5 bg-white border border-gray-200 shadow-lg rounded-xl">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message here..."
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg outline-none resize-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 text-white transition-all bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
