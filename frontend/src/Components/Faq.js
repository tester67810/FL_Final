import React, { useState } from "react";
import "../Styles/Faq.css";

const FAQData = [
  {
  question: "Can I reschedule my booking?",
  answer: [
    "Yes, you can reschedule your booking easily.",
    "Send a quote message and our team will contact you.",
  ],
},
{
  question: "How do I cancel a booking?",
  answer: [
    "You can cancel your booking by sending a quote message.",
    "Our team will contact you to confirm the cancellation.",
  ],
},
  {
    question: "How do I book a cleaning service?",
    answer: [
      "Booking is simple! Just click on the 'Book Now' button on our website.",
      "Fill in your details, select the type of cleaning, date, and time that works best for you.",
      "Submit the form and you’ll receive a confirmation email shortly after.",
    ],
  },
  {
    question: "Can I schedule recurring cleanings?",
    answer: [
      "Yes! We offer flexible scheduling options including weekly, bi-weekly, and monthly cleanings.",
      "When booking, simply select your preferred frequency and we’ll take care of the rest.",
    ],
  },
  {
    question: "Can I request the same cleaner each time?",
    answer: [
      "We do our best to send you the same trusted cleaner for each visit whenever possible.",
      "Please let us know your preference when booking or contact our support team.",
    ],
  },
  {
    question: "Do I need to be home during the cleaning?",
    answer: [
      "No, you don’t have to be home during the service.",
      "Just let us know how we can access your home — for example, leaving a key or providing an access code.",
      "Your security and trust are very important to us.",
    ],
  },
  {
    question: "What cleaning supplies do you use?",
    answer: [
      "Our team brings all the necessary eco-friendly cleaning products and equipment.",
      "If you have any special product requests, please let us know in advance.",
    ],
  },
  {
    question: "Is my personal information safe with you?",
    answer: [
      "Absolutely. We use industry-standard encryption and strict privacy policies to keep your data secure.",
      "Your trust and safety are our top priorities.",
    ],
  },
];

function Faq() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <>
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <div className="faq-container">
        {FAQData.map((item, index) => (
          <div
            key={index}
            className={`question-container ${
              expandedIndex === index ? "expanded" : ""
            }`}
          >
            <div className="question" onClick={() => toggleExpand(index)}>
              {item.question}
              <span className="question-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </div>
            <div
              className="answer-container"
              style={{
                maxHeight:
                  expandedIndex === index ? `${item.answer.length * 50}px` : "0",
              }}
            >
              {item.answer.map((a, i) => (
                <div className="answer" key={i}>
                  <span className="answer-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  {a}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Faq;
