import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import Section from "./Section";
import AnimatedSection from "./AnimatedSection";
import InputField from "./InputField";
import Button from "./Button";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ loading: false, success: null });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null });

    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form, "YOUR_PUBLIC_KEY")
      .then(() => {
        setStatus({ loading: false, message: true });
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus({ loading: false, success: false });
      });
  };

  return (
    <Section id="contact">
      <AnimatedSection>
        <h2 className="fw-bold text-center mb-4">Contact me</h2>

        <div className="row justify-content-center">
          <div className="cold-md-8 col-lg-6">
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <InputField
                label="Your Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
              <InputField
                label="Your Email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
              <InputField
                label="Message"
                name="message"
                textarea
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message"
                required
              />

              <div className="d-grid">
                <Button type="submit" disabled={status.loading}>
                  {status.loading ? "Sending..." : "Send message"}
                </Button>
              </div>

              {status.success === true && (
                <div className="alert alert-success mt-3">
                  ✅ Message sent successfully!
                </div>
              )}
              {status.success === false && (
                <div className="alert alert-danger mt-3">
                  ❌ Failed to send message. Try again later.
                </div>
              )}
            </motion.form>
          </div>
        </div>
      </AnimatedSection>
    </Section>
  );
}
