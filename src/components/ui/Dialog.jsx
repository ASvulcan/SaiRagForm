import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, AlertCircle } from "lucide-react";
import { useEffect } from "react";

export function Dialog({ open, onClose, type, title, message }) {
  useEffect(() => {
    if (!open) return;
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isSuccess = type === "success";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center px-6"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-2xl p-8 shadow-2xl border"
            style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1 rounded-lg transition-colors"
              style={{ color: "var(--text-muted)" }}
              onMouseOver={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseOut={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              <X size={20} />
            </button>

            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: isSuccess
                    ? "rgba(34, 197, 94, 0.12)"
                    : "rgba(239, 68, 68, 0.12)",
                }}
              >
                {isSuccess ? (
                  <CheckCircle size={32} style={{ color: "#22c55e" }} />
                ) : (
                  <AlertCircle size={32} style={{ color: "#ef4444" }} />
                )}
              </div>
            </div>

            {/* Title */}
            <h3
              className="text-xl font-bold text-center mb-2"
              style={{ color: "var(--text)" }}
            >
              {title}
            </h3>

            {/* Message */}
            <p
              className="text-sm text-center leading-relaxed mb-6"
              style={{ color: "var(--text-muted)" }}
            >
              {message}
            </p>

            {/* Button */}
            <button
              onClick={onClose}
              className="w-full py-3 rounded-xl text-sm font-semibold transition-all hover:opacity-90"
              style={{
                backgroundColor: isSuccess
                  ? "#22c55e"
                  : "var(--accent)",
                color: "#fff",
              }}
            >
              {isSuccess ? "Great!" : "Try Again"}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}