import React from "react";
import { FaWhatsapp } from "react-icons/fa6";

const WHATSAPP_URL =
  "https://wa.me/212625218443?text=Hi%20Fluxly%2C%20I%27d%20like%20a%20free%20quote%20for%20my%20project.";

/** Floating WhatsApp contact button, shown site-wide (bottom-right). */
export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.65)] transition-transform duration-300 hover:scale-110"
    >
      <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366] opacity-60 [animation:ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite]" />
      <FaWhatsapp className="h-7 w-7" />
    </a>
  );
}
