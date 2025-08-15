export const metadata = {
  title: "Privacy Policy - USNow360",
  description: "Read USNow360's privacy policy to understand how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="px-5 py-10">
      <div className="max-w-4xl p-8 mx-auto bg-white border border-gray-200 shadow-lg rounded-xl">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 md:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        {/* Content */}
        <div className="mt-6 space-y-5 leading-relaxed text-gray-700">
          <p>
            At <strong>USNow360</strong> (“we,” “our,” or “us”), we value your privacy and are committed 
            to protecting your personal information. This Privacy Policy explains how we collect, 
            use, and safeguard your information when you visit our website.
          </p>

          <h2 className="mt-6 text-2xl font-semibold">Information We Collect</h2>
          <p>
            We may collect personal information that you voluntarily provide to us, including 
            your name, email address, and any other details you submit through forms or 
            communications with us. Additionally, we may automatically collect certain 
            information about your device, browser, and site usage.
          </p>

          <h2 className="mt-6 text-2xl font-semibold">How We Use Your Information</h2>
          <ul className="pl-6 space-y-2 list-disc">
            <li>To provide, operate, and maintain our website.</li>
            <li>To improve, personalize, and expand our services.</li>
            <li>To communicate with you, including customer support.</li>
            <li>To send you updates, promotions, and relevant content (if you have opted in).</li>
            <li>To comply with legal obligations.</li>
          </ul>

          <h2 className="mt-6 text-2xl font-semibold">Cookies and Tracking Technologies</h2>
          <p>
            We may use cookies and similar technologies to enhance your browsing experience, 
            analyze site traffic, and personalize content. You can choose to disable cookies 
            in your browser settings, but this may affect certain features of our website.
          </p>

          <h2 className="mt-6 text-2xl font-semibold">Third-Party Services</h2>
          <p>
            We may use third-party services (such as analytics tools or advertising networks) 
            that collect, monitor, and analyze usage to improve our services. These third parties 
            have their own privacy policies.
          </p>

          <h2 className="mt-6 text-2xl font-semibold">Data Security</h2>
          <p>
            We implement reasonable measures to protect your personal information from 
            unauthorized access, disclosure, alteration, or destruction.
          </p>

          <h2 className="mt-6 text-2xl font-semibold">Your Rights</h2>
          <p>
            Depending on your location, you may have rights regarding your personal data, 
            including access, correction, deletion, and restriction of processing.
          </p>

          <h2 className="mt-6 text-2xl font-semibold">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted 
            on this page with the updated date.
          </p>

          <h2 className="mt-6 text-2xl font-semibold">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:  
            <a href="mailto:support@usnow360.com" className="text-blue-600 underline">
              support@usnow360.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
