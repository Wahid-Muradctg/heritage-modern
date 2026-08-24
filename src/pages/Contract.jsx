import React, { useState } from 'react';
import { toast } from 'react-toastify';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaCheck,
  FaArrowRight,
} from 'react-icons/fa';

const Contract = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    toast.success('Your message has been sent successfully!');

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <section className="min-h-screen bg-[#f5f0e8] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* ================= HEADER ================= */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h1 className="font-serif text-4xl font-bold text-[#29241f] sm:text-5xl md:text-6xl">
            Get in Touch
          </h1>

          <p className="mt-5 text-sm leading-7 text-[#6b5e54] sm:text-base">
            We'd love to hear from you. Whether you have a question about our
            menu, reservations, or events, our team is ready to answer all your
            questions.
          </p>
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="grid gap-6 lg:grid-cols-[340px_1fr]">
          {/* ================= LEFT SIDE ================= */}
          <div className="flex flex-col gap-6">
            {/* Contact Information */}
            <div className="rounded-md bg-white p-7 shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
              <h2 className="font-serif text-2xl font-bold text-[#29241f]">
                Contact Information
              </h2>

              {/* Address */}
              <div className="mt-7 flex gap-4">
                <div className="pt-1 text-lg text-[#ad4d0d]">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-[#29241f]">
                    Address
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[#6b5e54]">
                    123 Heritage Ave, Dhaka 1212,
                    <br />
                    Bangladesh
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="mt-6 flex gap-4">
                <div className="pt-1 text-lg text-[#ad4d0d]">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-[#29241f]">
                    Phone
                  </h3>

                  <p className="mt-1 text-sm text-[#6b5e54]">
                    +880 1234 567890
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="mt-6 flex gap-4">
                <div className="pt-1 text-lg text-[#ad4d0d]">
                  <FaEnvelope />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-[#29241f]">
                    Email
                  </h3>

                  <p className="mt-1 text-sm text-[#6b5e54]">
                    hello@heritagemodern.bd
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="my-7 h-px bg-[#dfd4c6]" />

              {/* Hours */}
              <h2 className="font-serif text-2xl font-bold text-[#29241f]">
                Hours
              </h2>

              <div className="mt-6 space-y-5 text-sm text-[#6b5e54]">
                <div className="flex justify-between gap-3">
                  <span>Mon - Thu</span>
                  <span>12:00 PM - 10:00 PM</span>
                </div>

                <div className="flex justify-between gap-3">
                  <span>Fri - Sat</span>
                  <span>12:00 PM - 11:30 PM</span>
                </div>

                <div className="flex justify-between gap-3">
                  <span>Sunday</span>
                  <span>1:00 PM - 9:00 PM</span>
                </div>
              </div>
            </div>

            {/* ================= MAP ================= */}
            <div className="h-[245px] overflow-hidden rounded-md bg-white shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
              <iframe
                title="Restaurant Location"
                src="https://www.google.com/maps?q=Dhaka,Bangladesh&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* ================= RIGHT SIDE FORM ================= */}
          <div className="rounded-md bg-white p-7 shadow-[0_10px_30px_rgba(0,0,0,0.12)] sm:p-10 lg:p-12">
            <h2 className="font-serif text-3xl font-bold text-[#29241f] sm:text-4xl">
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="mt-8">
              {/* Name + Email */}
              <div className="grid gap-5 md:grid-cols-2">
                {/* Name */}
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="h-[54px] w-full rounded-md border border-[#dfd4c6] bg-[#fcf8f1] px-4 text-sm text-[#29241f] outline-none transition focus:border-[#ad4d0d] focus:ring-2 focus:ring-[#ad4d0d]/10"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="h-[54px] w-full rounded-md border border-[#dfd4c6] bg-[#fcf8f1] px-4 pr-12 text-sm text-[#29241f] outline-none transition focus:border-[#ad4d0d] focus:ring-2 focus:ring-[#ad4d0d]/10"
                  />

                  {formData.email && (
                    <span className="absolute right-4 top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#647558] text-[10px] text-[#647558]">
                      <FaCheck />
                    </span>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="mt-5">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="h-[54px] w-full rounded-md border border-[#dfd4c6] bg-[#fcf8f1] px-4 text-sm text-[#29241f] outline-none transition focus:border-[#ad4d0d] focus:ring-2 focus:ring-[#ad4d0d]/10"
                />
              </div>

              {/* Message */}
              <div className="mt-5">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  className="h-[170px] w-full resize-none rounded-md border border-[#dfd4c6] bg-[#fcf8f1] px-4 py-4 text-sm text-[#29241f] outline-none transition focus:border-[#ad4d0d] focus:ring-2 focus:ring-[#ad4d0d]/10"
                ></textarea>
              </div>

              {/* Button */}
              <div className="mt-7 flex justify-end">
                <button
                  type="submit"
                  className="flex items-center gap-2 rounded-md bg-[#ad4d0d] px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-[#8e3e09] hover:-translate-y-0.5"
                >
                  Send Message
                  <FaArrowRight className="text-xs" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contract;
