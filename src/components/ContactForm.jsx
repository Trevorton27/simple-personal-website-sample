"use client";
import { useState } from "react";

export function ContactForm() {
  let [status, setStatus] = useState("idle"); // "idle" | "sending" | "sent" | "error"

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    let formData = new FormData(e.target);

    try {
      let response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("sent");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label className="flex flex-col gap-1">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Name</span>
        <input
          type="text"
          name="name"
          required
          className="border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>

      <label className="flex flex-col gap-1">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</span>
        <input
          type="email"
          name="email"
          required
          className="border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>

      <label className="flex flex-col gap-1">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</span>
        <textarea
          name="message"
          required
          rows={5}
          className="border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-2 px-6 rounded-md transition-colors"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "sent" && (
        <p className="text-green-600 dark:text-green-400 text-sm">Message sent! I will be in touch soon.</p>
      )}
      {status === "error" && (
        <p className="text-red-600 dark:text-red-400 text-sm">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
