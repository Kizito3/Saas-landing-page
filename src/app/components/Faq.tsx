
import { AccordionItem } from "./AccordionItem";

const items = [
  {
    question: "What payment method do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and various other payment methods depending on your location. Please contact our support team for more information.",
  },
  {
    question: "How does the pricing work for teams?",
    answer:
      "Our pricing is per user, per month. This means you only pay for the number of team members you have on your account. Discounts are available for larger teams and annual subscriptions.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be prorated and reflected in your next billing cycle.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, security is our top priority. We use state-of-the-art encryption and comply with the best industry practices to ensure that your data is safe.",
  },
];



export const FAQS = () => {
  return (
    <div className="bg-black text-white bg-gradient-to-b from-[#5d2ca8] to-black sm:py-24 py-[72px]">
      <div className="container">
        <h2 className="text-center font-bold tracking-tighter text-5xl sm:text-6xl sm:max-w-[648px] mx-auto">
          Frequently asked questions
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map(({ question, answer }, index) => (
            <AccordionItem key={index} question={question} answer={answer} />
          ))}
        </div>
      </div>
    </div>
  );
};
