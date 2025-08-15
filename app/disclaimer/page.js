export const metadata = {
  title: "Disclaimer - USNow360",
  description: "Read the disclaimer for USNow360's content and information usage.",
};

export default function DisclaimerPage() {
  return (
    <div className="px-5 py-10">
      <div className="max-w-4xl p-8 mx-auto bg-white border border-gray-200 shadow-lg rounded-xl">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 md:text-4xl">
          Disclaimer
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        {/* Content */}
        <div className="mt-6 space-y-5 leading-relaxed text-gray-700">
          <p>
            The information provided by <strong>USNow360</strong> (“we,” “our,”
            or “us”) on this website is for general informational purposes only.
            All information is provided in good faith; however, we make no
            representation or warranty of any kind, express or implied,
            regarding the accuracy, adequacy, validity, reliability, or
            completeness of any information.
          </p>

          <p>
            Under no circumstance shall we have any liability to you for any
            loss or damage incurred as a result of the use of the site or
            reliance on any information provided. Your use of the site and your
            reliance on any information is solely at your own risk.
          </p>

          <h2 className="mt-6 text-2xl font-semibold">External Links</h2>
          <p>
            This website may contain links to other websites or content
            belonging to or originating from third parties. Such external links
            are not investigated, monitored, or checked for accuracy,
            adequacy, validity, reliability, or completeness by us.
          </p>

          <h2 className="mt-6 text-2xl font-semibold">Professional Disclaimer</h2>
          <p>
            The site cannot and does not contain legal, financial, or medical
            advice. The information is provided for general informational and
            educational purposes only and is not a substitute for professional
            advice.
          </p>

          <h2 className="mt-6 text-2xl font-semibold">Consent</h2>
          <p>
            By using our website, you hereby consent to our disclaimer and agree
            to its terms.
          </p>
        </div>
      </div>
    </div>
  );
}
