"use client";
import { motion } from "framer-motion";
import { useState, FormEvent } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="relative">
      {/* Background accents */}
      <div className="absolute top-0 right-0 bg-cyan-500/5 rounded-full blur-3xl z-0 bg-blur-md"></div>
      <div className="absolute bottom-0 left-0 bg-blue-500/5 rounded-full blur-3xl z-0 bg-blur-md"></div>

      <div className="container relative z-10">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Contact Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.form
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            onSubmit={handleSubmit}
            className="space-y-4 sm:space-y-6 bg-gray-900/50 p-4 sm:p-8 rounded-lg shadow-xl border border-gray-800"
            aria-label="Contact form"
            noValidate
          >
            <div>
              <label
                htmlFor="name"
                className="block text-gray-300 font-medium mb-1 sm:mb-2 text-sm sm:text-base"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                aria-required="true"
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800 border ${
                  errors.name ? "border-red-500" : "border-gray-700"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-gray-200 text-sm sm:text-base`}
                placeholder="Your name"
                autoComplete="name"
              />
              {errors.name && (
                <p
                  id="name-error"
                  className="mt-1 text-red-500 text-xs sm:text-sm font-medium"
                >
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-300 font-medium mb-1 sm:mb-2 text-sm sm:text-base"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                aria-required="true"
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800 border ${
                  errors.email ? "border-red-500" : "border-gray-700"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-gray-200 text-sm sm:text-base`}
                placeholder="Your email address"
                autoComplete="email"
              />
              {errors.email && (
                <p
                  id="email-error"
                  className="mt-1 text-red-500 text-xs sm:text-sm font-medium"
                >
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-gray-300 font-medium mb-1 sm:mb-2 text-sm sm:text-base"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                aria-required="true"
                aria-invalid={errors.message ? "true" : "false"}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800 border ${
                  errors.message ? "border-red-500" : "border-gray-700"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-gray-200 text-sm sm:text-base`}
                placeholder="Your message"
              ></textarea>
              {errors.message && (
                <p
                  id="message-error"
                  className="mt-1 text-red-500 text-xs sm:text-sm font-medium"
                >
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
              className="w-full py-2.5 sm:py-3 px-4 sm:px-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg shadow transition duration-300 flex items-center justify-center text-sm sm:text-base active:scale-[0.98] touch-manipulation"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>

            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 p-3 bg-green-900/30 border border-green-500 text-green-300 rounded-lg text-sm sm:text-base"
                role="alert"
              >
                <div className="flex items-center">
                  <svg
                    className="h-4 w-4 sm:h-5 sm:w-5 mr-2 flex-shrink-0 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Your message has been sent successfully! I&apos;ll get back
                    to you soon.
                  </span>
                </div>
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 p-3 bg-red-900/30 border border-red-500 text-red-300 rounded-lg text-sm sm:text-base"
                role="alert"
              >
                <div className="flex items-center">
                  <svg
                    className="h-4 w-4 sm:h-5 sm:w-5 mr-2 flex-shrink-0 text-red-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    There was an error sending your message. Please try again
                    later.
                  </span>
                </div>
              </motion.div>
            )}
          </motion.form>
        </div>
        <div className="mt-8 text-center">
          <p className="text-2xl font-bold mb-4 bg-clip-text  text-gray-400">
            Or you can reach me on: {}
            <a
              href="mailto:kisanmajumdar44@gmail.com"
              className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600"
            >
              kisanmajumdar44@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
