// app/contact/page.js
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us - HotTopicsHub",
  description: "Get in touch with HotTopicsHub team.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen px-4 py-12 bg-gradient-to-b from-red-50 to-white">
      <div className="max-w-2xl mx-auto">
        {/* Page Heading */}
        <h1 className="text-3xl font-bold text-center text-gray-900 md:text-4xl">
          Contact Us
        </h1>
        <p className="max-w-xl mx-auto mt-3 text-center text-gray-600">
          Have a question, suggestion, or partnership idea? We’d love to hear from you.
        </p>

        {/* Form */}
        <div className="mt-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
