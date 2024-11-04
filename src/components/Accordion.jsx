import  { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const FAQAccordion = () => {
  const faqs = [
    {
      question: 'What is the Teshie project?',
      answer: 'Motito is an asset financing marketplace that provides alternative payment options for customers to purchase essential assets. Motito promotes affordability and flexibility, allowing customers to purchase essentials with other payment options besides cash.'
    },
    {
      question: 'When do I receive my item?',
      answer: 'You will receive your item based on the financing option you select. For example, items can be delivered right after a downpayment for buy now, pay later, or after a successful Pay4Me campaign. Visit the payment options pages to learn more.'
    },
    {
      question: 'What forms of payment can I use?',
      answer: 'Motito allows you to make payments using mobile money providers (MTN Mobile Money, Vodafone Cash, Airtel Tigo Cash) and Visa cards.'
    }
  ];

  return (
    <div className="container">
    <div className="faq-title">
        <h2>Got questions ?
        </h2>
        <p>Get the answers to your questions about this project.  </p>
    </div>
    <div className="faq-accordion">
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <div className="faq-question" onClick={toggleOpen}>
        <h3>{question}</h3>
        <div className="icon">
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
              <path
                d="M7 15h18a1 1 0 110 2H7a1 1 0 010-2z"
                fill="currentColor"
              />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
              <path
                d="M25.333 15.667V16.334a1 1 0 01-1 1h-7.667v7.666a1 1 0 01-1 1h-.667a1 1 0 01-1-1v-7.666H7.333a1 1 0 01-1-1v-.667a1 1 0 011-1H15v-7.667a1 1 0 011-1h.667a1 1 0 011 1v7.667h7.667a1 1 0 011 1z"
                fill="currentColor"
              />
            </svg>
          )}
        </div>
      </div>
      <div className={`faq-answer ${isOpen ? 'show' : ''}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

// PropTypes validation
FAQItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired
};

export default FAQAccordion;
