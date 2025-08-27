// components/ContactForm.jsx
"use client";

import { useState } from "react";
import {
  Mail, User, MessageSquare, CheckCircle2, AlertCircle, Loader2,
} from "lucide-react";

const initialValues = { name: "", email: "", message: "" };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Name is required";
  if (!values.email.trim()) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email))
    errors.email = "Please enter a valid email address";
  if (!values.message.trim()) errors.message = "Message is required";
  else if (values.message.trim().length < 10)
    errors.message = "Message should be at least 10 characters";
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(null); // { email: string } | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined })); // live-clear after touch
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors((prev) => ({ ...prev, ...validate({ ...values, [name]: values[name] }) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validate(values);
    setErrors(v);
    setTouched({ name: true, email: true, message: true });
    setSuccess(null);

    if (Object.keys(v).length > 0) {
      // Scroll to first error for mobile UX
      const firstErrorField = Object.keys(v)[0];
      const el = document.querySelector(`[name="${firstErrorField}"]`);
      if (el?.scrollIntoView) el.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    try {
      setSubmitting(true);

      // TODO: Replace this timeout with a real API call (e.g. /api/contact)
      await new Promise((res) => setTimeout(res, 900));

      setSuccess({ email: values.email });
      setValues(initialValues);
      setTouched({});
    } catch (err) {
      setSuccess(null);
      setErrors((prev) => ({
        ...prev,
        form: "Something went wrong. Please try again.",
      }));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl border border-gray-200">
      {/* Header strip matching site colors */}
      <div className="px-6 py-4 rounded-t-2xl bg-gradient-to-r from-red-700 to-red-600 text-white">
        <h2 className="text-lg font-semibold">Send us a message</h2>
        <p className="text-white/90 text-sm">
          We usually respond within 1–2 business days.
        </p>
      </div>

      {/* Success banner */}
      {success && (
        <div className="mx-6 mt-4 rounded-lg bg-green-50 border border-green-200 p-3 flex items-start gap-2">
          <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
          <div className="text-sm text-green-800">
            Thanks! Your message has been sent. We’ll reply at{" "}
            <span className="font-medium">{success.email}</span>.
          </div>
        </div>
      )}

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        noValidate
        className="px-6 py-6 space-y-5"
        aria-describedby={errors.form ? "form-error" : undefined}
      >
        {errors.form && (
          <div
            id="form-error"
            className="rounded-lg bg-red-50 border border-red-200 p-3 flex items-start gap-2"
          >
            <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
            <div className="text-sm text-red-800">{errors.form}</div>
          </div>
        )}

        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <div className="relative mt-1">
            <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              name="name"
              type="text"
              placeholder="Your name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={Boolean(touched.name && errors.name)}
              aria-describedby={touched.name && errors.name ? "name-error" : undefined}
              className={`w-full pl-10 pr-4 py-2 rounded-lg border outline-none transition
                ${touched.name && errors.name
                  ? "border-red-500 focus:ring-2 focus:ring-red-500"
                  : "border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-red-600"
                }`}
              required
            />
          </div>
          {touched.name && errors.name && (
            <p id="name-error" className="mt-1 text-xs text-red-600">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <div className="relative mt-1">
            <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={Boolean(touched.email && errors.email)}
              aria-describedby={touched.email && errors.email ? "email-error" : undefined}
              className={`w-full pl-10 pr-4 py-2 rounded-lg border outline-none transition
                ${touched.email && errors.email
                  ? "border-red-500 focus:ring-2 focus:ring-red-500"
                  : "border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-red-600"
                }`}
              required
            />
          </div>
          {touched.email && errors.email && (
            <p id="email-error" className="mt-1 text-xs text-red-600">{errors.email}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <div className="relative mt-1">
            <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <textarea
              name="message"
              rows={4}
              placeholder="Write your message here..."
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={Boolean(touched.message && errors.message)}
              aria-describedby={touched.message && errors.message ? "message-error" : undefined}
              className={`w-full pl-10 pr-4 py-2 rounded-lg border outline-none resize-none transition
                ${touched.message && errors.message
                  ? "border-red-500 focus:ring-2 focus:ring-red-500"
                  : "border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-red-600"
                }`}
              required
            />
          </div>
          {touched.message && errors.message && (
            <p id="message-error" className="mt-1 text-xs text-red-600">{errors.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={submitting}
          className={`w-full py-3 font-medium text-white rounded-lg transition shadow-md
            bg-gradient-to-r from-red-700 to-red-600 hover:from-red-800 hover:to-red-700
            disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2`}
        >
          {submitting && <Loader2 className="w-5 h-5 animate-spin" />}
          {submitting ? "Sending..." : "Send Message"}
        </button>

        {/* Small privacy note */}
        <p className="text-xs text-gray-500 text-center">
          By sending, you agree to be contacted at the email you provided.
        </p>
      </form>
    </div>
  );
}
