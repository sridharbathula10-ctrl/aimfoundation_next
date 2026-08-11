
"use client";

import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import toast from "react-hot-toast";

const CONTACT_API_URL =
  "https://api.nurexify.com/api/customer/saveContact";

const API_KEY = "21e52971e010cbc03a84cc834ebc27e3";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authentication: API_KEY,
        },
        body: JSON.stringify({
          name: formData.get("name"),
          organisation: formData.get("organisation"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          subject: formData.get("purpose"),
          message: formData.get("message"),
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          result.message || "Unable to send your enquiry."
        );
      }

      // Clear form after successful submission
      form.reset();

      // Show success toast
      toast.success(
        result.message ||
          "Your enquiry has been sent successfully!"
      );
    } catch (error) {
      // Show error toast
      toast.error(
        error.message ||
          "Unable to send your enquiry. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      {/* Name & Organisation */}
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-[12px] font-semibold text-[#55445f]">
          Name

          <input
            required
            name="name"
            type="text"
            className="rounded-lg border border-[#d5c5de] bg-white px-4 py-3 text-[15px] font-normal outline-none transition focus:border-[#8d245b]"
          />
        </label>

        <label className="grid gap-2 text-[12px] font-semibold text-[#55445f]">
          Organisation

          <input
            name="organisation"
            type="text"
            className="rounded-lg border border-[#d5c5de] bg-white px-4 py-3 text-[15px] font-normal outline-none transition focus:border-[#8d245b]"
          />
        </label>
      </div>

      {/* Email & Phone */}
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-[12px] font-semibold text-[#55445f]">
          Email

          <input
            required
            type="email"
            name="email"
            className="rounded-lg border border-[#d5c5de] bg-white px-4 py-3 text-[15px] font-normal outline-none transition focus:border-[#8d245b]"
          />
        </label>

        <label className="grid gap-2 text-[12px] font-semibold text-[#55445f]">
          Phone

          <input
            name="phone"
            type="tel"
            className="rounded-lg border border-[#d5c5de] bg-white px-4 py-3 text-[15px] font-normal outline-none transition focus:border-[#8d245b]"
          />
        </label>
      </div>

      {/* Purpose */}
      <label className="grid gap-2 text-[12px] font-semibold text-[#55445f]">
        Purpose Of Enquiry

        <select
          required
          name="purpose"
          defaultValue=""
          className="rounded-lg border border-[#d5c5de] bg-white px-4 py-3 text-[15px] font-normal outline-none transition focus:border-[#8d245b]"
        >
          <option value="" disabled>
            Select a purpose
          </option>

          <option value="CSR partnership">
            CSR partnership
          </option>

          <option value="Foundation partnership">
            Foundation partnership
          </option>

          <option value="Government engagement">
            Government engagement
          </option>

          <option value="Media enquiry">
            Media enquiry
          </option>

          <option value="Individual contribution">
            Individual contribution
          </option>

          <option value="Other">
            Other
          </option>
        </select>
      </label>

      {/* Message */}
      <label className="grid gap-2 text-[12px] font-semibold text-[#55445f]">
        Message

        <textarea
          required
          name="message"
          rows={5}
          className="resize-y rounded-lg border border-[#d5c5de] bg-white px-4 py-3 text-[15px] font-normal outline-none transition focus:border-[#8d245b]"
        />
      </label>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-fit items-center gap-3 rounded-full bg-[#172554] px-6 py-4 text-[14px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1e3a8a] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Sending…" : "Send Enquiry"}

        <FiArrowUpRight aria-hidden="true" />
      </button>
    </form>
  );
}

