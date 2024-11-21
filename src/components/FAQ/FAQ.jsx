import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const faqs = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time.",
    },
    {
      question: "What is your cancellation policy?",
      answer: "You can cancel your subscription at any time without penalty.",
    },
    {
      question: "Can other info be added to an invoice?",
      answer: "Yes, additional information can be added to your invoices.",
    },
    {
      question: "How does billing work?",
      answer:
        "We bill you at the beginning of each month for the upcoming billing cycle.",
    },
    {
      question: "How do I change my account email?",
      answer:
        "You can change your account email in the account settings section of your dashboard.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
    <div className="faq-section">
     
      <div className="faq-header">
        <h1 className="faq-title">Frequently asked questions</h1>
        <p className="faq-description">
          Everything you need to know about the product and billing.
        </p>
      </div>
      
      <div className="faq-items">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
              role="button"
            >
              <span>{faq.question}</span>
              <span>{activeIndex === index ? "−" : "+"}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div> 
    </div>
    


    <div className="faq-cta">
        <div className="profile-container">
          <img
            src="https://s3-alpha-sig.figma.com/img/a48e/1aea/866434aa73c311701a963ddc75997754?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kLauCRybBCEQFoNwLwmiTad1T~QAh3W4BFWiskYz9h2aLVGfRr0A77nXkj0UMFEqtMl1zb60PUqvEKdjHlaxlaZAHWUErKAGP8QuauVbbk4uk~13K4BxDZA8pvC41J95WPMcdmgzbtbTXLFpM7pjUB7pt2DqmuahxmJVLFMnOOKrc~tVcstFC1KzmM-EMmoD168jBC56BAQX~FvmSS5uHb78UIHeqCUkD2Hf-hh-NFLbYMJPrQoa6vKEwNrqpDpuFfgRjRlXAKi1~wPeyfpHRwqCn8BJoWCZVnth0p4EF2-~GriOraWhnf6DBVpEFUBynjvU9V6JEAorPRheZ7351w__"
            alt="Profile 1"
            className="profile-circle"
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/27a8/497d/5cb712a39a846f3d49443b8283852dca?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nj1dhHJvIwqKXhqEFQBNONRc113LfBUCy-0oGmZDlV-0qwv3paPWz0AhVnQlAh8n743SJAQqGwNLiwvqu3NiQ9~~dKI4SWiBp2mbdzu24CDTSpWbMk0FEEt0uVMuvErbYlh9Pde79A8RnQNPX3caI61XMQJCUadFzsB~ttGXFaOo0p7ClgWKFwmgcfU3E-J3ndwBSnXjNCJTlD5Hv6HQgE-sC1MBhgTzwj8iPj9R7JWd7W~rQS-7fZMnnSDxZTlNSk1Fqgsui~tlkGHx0rgj2wZJbBmDpjWc89e8iiNE7MBk9Pvs6p2WxGu61oX4SNdJPXybNcQ109-58cGnbCDhxA__"
            alt="Profile 2"
            className="profile-circle"
            style={{ marginLeft: "-20px" }}
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/7ab6/3dcb/71188af6aa830e9296f62671157262d1?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L3BxbJ4qZcpFGuofUtxaqy6jhwCFJi-fEveMWznXTsMIEv~cyo14pmdwtoJB9kz58feAGo2I1R84izMTlnqRrcs1aEv6JQOyvQAke0ZXA9Co5FF2rYh0dNBymmmgOuyZ1XCLeaPUlGEHusrCENCUct~8z7YQFkI9G-ZLTkv~F9B3vdFhTaIBMZ8IGqR1co~KuP~nWsn~kYsP-LLTzWs~tGsHUhCkI66~BxyPCUQk3sAxV4hCbk21V2PzWhreAsdFlZ21s0YGWyBCmpoMENAzqWkSigGHY6HY0cgVmfvSQ0WhDgszlKnAzd8~37hE7KZIcPwXrJlYhWDLJGEv8HhG2A__"
            alt="Profile 3"
            className="profile-circle"
            style={{ marginLeft: "-20px" }}
          />
        </div>
        <h2 className="cta-heading">Still have questions?</h2>
        <p className="cta-subheading">
          Can't find the answer you’re looking for? Please chat to our friendly
          team.
        </p>
        <button className="cta-button">Get in touch</button>
      </div>
    </div>
  );
};

export default FAQ;
