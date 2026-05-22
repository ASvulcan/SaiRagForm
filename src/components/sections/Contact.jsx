import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen py-20 md:py-28"
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

          {/* Contact Details */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Email */}
            <div>
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

            {/* Phone */}
            <div>
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

            {/* Location */}
            <div>
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
                Pune, Maharashtra, India
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}