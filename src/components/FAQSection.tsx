import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What age groups do you accept?",
    answer: "Children from 2 years for Playgroup, daycare from 1 year."
  },
  {
    question: "What curriculum do you follow?",
    answer: "Activity-based, child-centered learning that focuses on holistic development through play, exploration, and meaningful activities."
  },
  {
    question: "How do you ensure safety?",
    answer: "CCTV monitoring, trained staff, secure campus with controlled entry, and strict safety protocols."
  },
  {
    question: "How do you communicate with parents?",
    answer: "WhatsApp updates, regular parent-teacher meetings, progress reports, and direct calls when needed."
  },
  {
    question: "Is transport available?",
    answer: "Transport services are available based on demand and availability in specific areas."
  },
  {
    question: "Can parents visit before admission?",
    answer: "Yes, school visits are encouraged! We welcome parents to see our facilities and meet our teachers."
  },
  {
    question: "What is the admission process?",
    answer: "Enquiry → School Visit → Registration → Document Submission → Confirmation. The process is simple and parent-friendly."
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-lavender-light text-lavender text-sm font-semibold mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Frequently Asked <span className="text-gradient-nature">Questions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background rounded-2xl border border-border/50 px-6 shadow-soft"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
