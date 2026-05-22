import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useEffect, useRef, useCallback } from "react";

export function Contact() {
  const formRef = useRef(null);
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    cardRef.current.style.setProperty("--mouse-x", `${x}%`);
    cardRef.current.style.setProperty("--mouse-y", `${y}%`);
  }, []);

  const handleMouseLeave = useCallback(() => {
    cardRef.current?.style.setProperty("--mouse-x", "50%");
    cardRef.current?.style.setProperty("--mouse-y", "50%");
  }, []);

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    const submitBtn = form.querySelector('button[type="submit"]');

    const handleSubmit = async (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      formData.append("access_key", "d8805654-098a-4ce9-8ce8-087ab20d27e8");

      const originalText = submitBtn.textContent;

      submitBtn.textContent = "Sending...";
      submitBtn.disabled = true;

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });

        const data = await response.json();

        if (response.ok) {
          alert("Success! Your message has been sent.");
          form.reset();
        } else {
          alert("Error: " + data.message);
        }

      } catch (error) {
        alert("Something went wrong. Please try again.");
      } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }
    };

    form.addEventListener("submit", handleSubmit);
    return () => form.removeEventListener("submit", handleSubmit);
  }, []);

  return (
    <section
      id="contact"
      className="min-h-screen py-20 md:py-28 relative"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="max-w-[1280px] mx-auto px-8 md:px-10">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="flex items-center gap-3">
            <div
              className="w-6 h-px"
              style={{ backgroundColor: "var(--accent)" }}
            />
            <span
              className="text-xs font-semibold tracking-[0.15em] uppercase"
              style={{ color: "var(--accent)" }}
            >
              Contact
            </span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight"
            style={{ color: "var(--text)" }}
          >
            Get in Touch
          </h2>

          {/* Divider */}
          <div
            className="w-full h-px mt-8 mb-16"
            style={{ backgroundColor: "rgba(0,0,0,0.08)" }}
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-[1150px]"
        >
          <div
            className="space-y-10 text-sm md:text-[17px] leading-[2]"
            style={{ color: "var(--text-muted)" }}
          >
            <p className="max-w-[1100px]">
              We'd love to hear from you. Whether you have a project in mind,
              a technical challenge to discuss, or a collaboration opportunity —
              feel free to reach out.
            </p>
          </div>

          {/* Contact Details & Form */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Details (Left) */}
            <div className="space-y-6">
              {/* Email Card */}
              <div className="group relative bg-bg-card backdrop-blur-md border rounded-xl p-6 transition-all duration-500 border-border/50 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent-rgb/10 hover:-translate-y-2">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <Mail size={18} style={{ color: "var(--accent)" }} />
                    <span
                      className="text-xs font-semibold uppercase tracking-widest"
                      style={{ color: "var(--accent)" }}
                    >
                      Email
                    </span>
                  </div>
                  <a
                    href="mailto:projects@sairag.net"
                    className="text-base md:text-lg font-medium transition-colors hover:underline"
                    style={{ color: "var(--text)" }}
                  >
                    projects@sairag.net
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="group relative bg-bg-card backdrop-blur-md border rounded-xl p-6 transition-all duration-500 border-border/50 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent-rgb/10 hover:-translate-y-2">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <Phone size={18} style={{ color: "var(--accent)" }} />
                    <span
                      className="text-xs font-semibold uppercase tracking-widest"
                      style={{ color: "var(--accent)" }}
                    >
                      Phone
                    </span>
                  </div>
                  <p
                    className="text-base md:text-lg font-medium"
                    style={{ color: "var(--text)" }}
                  >
                    +91 8668479379
                  </p>
                </div>
              </div>

              {/* Location Card */}
              <div className="group relative bg-bg-card backdrop-blur-md border rounded-xl p-6 transition-all duration-500 border-border/50 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent-rgb/10 hover:-translate-y-2">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin size={18} style={{ color: "var(--accent)" }} />
                    <span
                      className="text-xs font-semibold uppercase tracking-widest"
                      style={{ color: "var(--accent)" }}
                    >
                      Location
                    </span>
                  </div>
                  <p
                    className="text-base md:text-lg font-medium leading-relaxed"
                    style={{ color: "var(--text)" }}
                  >
                    F102, Mahindra Royale Society,<br />
                    Nehru Nagar, Pimpri,<br />
                    Pune - 411018, India
                  </p>
                </div>
              </div>
            </div>

            {/* Form Card (Right) */}
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="group card relative bg-bg-card backdrop-blur-md border rounded-xl p-7 transition-all duration-500 border-border/50 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent-rgb/10 hover:-translate-y-2"
              style={{ willChange: "transform, box-shadow", marginLeft: "-10px" }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5" />
              </div>

              <div className="relative z-10">
                <h3 className="text-lg font-bold mb-6" style={{ color: "var(--text)" }}>
                  Send Us a Message
                </h3>
                <form ref={formRef} id="form" className="space-y-5">
                  <input type="hidden" name="subject" value="New Contact Form Submission - SaiRag Engineering LLP" />
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--accent)" }}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      required
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-colors"
                      style={{ backgroundColor: "var(--bg-alt)", color: "var(--text)", border: "1px solid var(--border)" }}
                      onFocus={(e) => e.target.style.borderColor = "var(--accent)"}
                      onBlur={(e) => e.target.style.borderColor = "var(--border)"}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--accent)" }}>
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      required
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-colors"
                      style={{ backgroundColor: "var(--bg-alt)", color: "var(--text)", border: "1px solid var(--border)" }}
                      onFocus={(e) => e.target.style.borderColor = "var(--accent)"}
                      onBlur={(e) => e.target.style.borderColor = "var(--border)"}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--accent)" }}>
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Tell us about your project..."
                      required
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-colors resize-none"
                      style={{ backgroundColor: "var(--bg-alt)", color: "var(--text)", border: "1px solid var(--border)" }}
                      onFocus={(e) => e.target.style.borderColor = "var(--accent)"}
                      onBlur={(e) => e.target.style.borderColor = "var(--border)"}
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-lg text-sm font-semibold transition-all hover:opacity-90"
                    style={{ backgroundColor: "var(--accent)", color: "#fff" }}
                  >
                    <Send size={16} />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}