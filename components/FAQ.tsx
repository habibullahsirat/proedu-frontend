"use client";
import { useState } from "react";

const faqs = [
  {
    q: "What other services are you compatible with?",
    a: "There are many variations of passages of available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the generators on the.",
    open: true,
  },
  {
    q: "I have a technical I need resolved, who do I email?",
    a: "",
    open: false,
  },
  { q: "What other services are you compatible with?", a: "", open: false },
  { q: "What other services are you compatible with?", a: "", open: false },
];

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(0);
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold lg:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-gray-600">Everything you need to know.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="overflow-hidden rounded-xl border">
              <button
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                className="flex w-full items-center justify-between bg-white px-6 py-5 text-left font-semibold"
              >
                {faq.q}

                <span className="text-xl">{openFaq === index ? "−" : "+"}</span>
              </button>

              {openFaq === index && faq.a && (
                <div className="bg-gray-50 px-6 py-5 text-gray-600">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
