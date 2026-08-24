import React, { useState } from 'react';
import { toast } from 'react-toastify';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaCheck,
  FaArrowRight,
} from 'react-icons/fa';
import { useFormValidation } from '../hooks/useFormValidation';
import { validateAll } from '../utils/validators';
import Button from '../component/ui/Button';

const Contract = () => {
  const { errors, touched, handleChange, handleBlur, getInputBorder, getFocusClass, resetValidation } = useFormValidation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChangeForm = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    handleChange(e);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const { firstError } = validateAll(formData);

    Object.keys(formData).forEach(key => {
      handleChange({ target: { name: key, value: formData[key] } });
    });

    if (firstError) {
      toast.error('Please fix the errors before submitting.');
      return;
    }

    toast.success('Your message has been sent successfully!');

    setFormData({ name: '', email: '', subject: '', message: '' });
    resetValidation();
  };

  return (
    <section className="min-h-screen bg-(--bg-light) px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* ================= HEADER ================= */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h1 className="text-3xl font-bold text-(--text-two)  md:text-6xl">
            Get in Touch
          </h1>

          <p className="mt-5 text-sm leading-7 text-(--text-3) font-family font-medium md:text-xl">
            We'd love to hear from you. Whether you have a question about our
            menu, reservations, or events, our team is ready to answer all your
            questions.
          </p>
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="grid gap-6 md:grid-cols-[340px_1fr]">
          {/* ================= LEFT SIDE ================= */}
          <div className="flex flex-col gap-6">
            {/* Contact Information */}
            <div className="rounded-md bg-(--bg-light) border border-(--primary-color-dark)/20 p-7 shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
              <h2 className=" md:pt-5 text-2xl font-bold text-(--primary-color-dark)">
                Contact Information
              </h2>

              {/* Address */}
              <div className="mt-7 flex gap-4">
                <div className="pt-1 text-lg text-[#ad4d0d]">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-(--primary-color-dark)">
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
                  <h3 className="text-sm font-semibold text-(--primary-color-dark)">
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
                  <h3 className="text-sm font-semibold text-(--primary-color-dark)">
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
              <h2 className="font-serif text-2xl font-bold text-(--primary-color-dark)">
                Hours
              </h2>

              <div className="mt-6 space-y-5 text-sm text-[#6b5e54]">
                <div className="flex justify-between gap-3">
                  <span className='text-(--primary-color-dark)'>Mon - Thu</span>
                  <span>12:00 PM - 10:00 PM</span>
                </div>

                <div className="flex justify-between gap-3">
                  <span className='text-(--primary-color-dark)'>Fri - Sat</span>
                  <span>12:00 PM - 11:30 PM</span>
                </div>

                <div className="flex justify-between gap-3">
                  <span className='text-(--primary-color-dark)'>Sunday</span>
                  <span>1:00 PM - 9:00 PM</span>
                </div>
              </div>
            </div>

            {/* ================= MAP ================= */}
            
          </div>

          {/* ================= RIGHT SIDE FORM ================= */}
          <div className="self-start rounded-md bg-(--bg-light) border border-(--primary-color-dark)/20 p-7 shadow-[0_10px_30px_rgba(0,0,0,0.12)] sm:p-10 lg:p-12">
            <h2 className="text-(--primary-color-dark) text-2xl font-bold  md:text-4xl">
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="mt-8">
              {/* Name + Email */}
              <div className="grid gap-5 md:grid-cols-2">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-(--font-3)">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChangeForm}
                    onBlur={handleBlur}
                    placeholder="Your Name"
                    className={`h-13.5 w-full rounded-md border bg-(--bg-light) px-4 text-sm text-(--text-two) outline-none transition ${getInputBorder('name')} ${getFocusClass('name')}`}
                  />
                  {touched.name && errors.name && <p className="text-(--error) text-sm">{errors.name}</p>}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2 relative">
                  <label className="text-(--font-3)">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChangeForm}
                    onBlur={handleBlur}
                    placeholder="Your Email"
                    className={`h-13.5 w-full rounded-md border bg-(--bg-light) px-4 pr-12 text-sm text-(--text-two) outline-none transition ${getInputBorder('email')} ${getFocusClass('email')}`}
                  />

                  {touched.email && !errors.email && formData.email && (
                    <span className="absolute right-4 top-9.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-(--success) text-[10px] text-(--success)">
                      <FaCheck />
                    </span>
                  )}
                  {touched.email && errors.email && <p className="text-(--error) text-sm">{errors.email}</p>}
                </div>
              </div>

              {/* Subject */}
              <div className="mt-5 flex flex-col gap-2">
                <label className="text-(--font-3)">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChangeForm}
                  onBlur={handleBlur}
                  placeholder="Subject"
                  className={`h-13.5 w-full rounded-md border bg-(--bg-light) px-4 text-sm text-(--text-two) outline-none transition ${getInputBorder('subject')} ${getFocusClass('subject')}`}
                />
                {touched.subject && errors.subject && <p className="text-(--error) text-sm">{errors.subject}</p>}
              </div>

              {/* Message */}
              <div className="mt-5 flex flex-col gap-2">
                <label className="text-(--font-3)">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChangeForm}
                  onBlur={handleBlur}
                  placeholder="Your Message"
                  className={`h-42.5 w-full resize-none rounded-md border bg-(--bg-light) px-4 py-4 text-sm text-(--text-two) outline-none transition ${getInputBorder('message')} ${getFocusClass('message')}`}
                ></textarea>
                {touched.message && errors.message && <p className="text-(--error) text-sm">{errors.message}</p>}
              </div>

              {/* Button */}
              <div className="mt-7 flex justify-end">
                <Button
                  type="submit"
                  text="Send Message"
                  rIcon={FaArrowRight}
                  className="flex items-center gap-2 rounded-md bg-(--primary-color-dark) px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-(--primary-color) hover:-translate-y-0.5"
                />
              </div>
            </form>
          </div>
        </div>
        
      </div>
      <div className="h-65 mt-8 overflow-hidden rounded-md bg-(--bg-light) border border-(--primary-color-dark)/20  shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
              <iframe
                title="Restaurant Location"
                src="https://www.google.com/maps?q=Dhaka,Bangladesh&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
    </section>
  );
};

export default Contract;
