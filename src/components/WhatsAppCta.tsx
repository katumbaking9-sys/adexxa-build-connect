import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/site";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(
        "Hello ADEXXA, I would like to enquire about your products."
      )}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chat with ADEXXA on WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-accent text-accent-foreground shadow-lg transition-transform hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
