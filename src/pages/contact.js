import React from 'react';

const Contact = () => {
   return (
      <div className="inner-wrap contact">
         <h2>Want to get in touch?</h2>
         <p className="contact__body-text">
            Have an exciting project that you need my help with? Have a bug that
            you need to be squashed? Want to order me pizza and donuts? Whatever
            it may be, I can be reached all over the internet, or by good ol'
            fashioned email. Shoot me a message and let's build something great
            together.
         </p>
         <form action="submit" className="contact__form">
            <label htmlFor="full-name" className="contact__cell">
               <span className="contact__label">Full Name</span>
               <input
                  type="text"
                  id="full-name"
                  className="contact__input"
                  required
                  autoFocus
               />
            </label>
            <label htmlFor="email" className="contact__cell">
               <span className="contact__label">Email Address</span>
               <input
                  type="email"
                  id="email"
                  className="contact__input"
                  required
               />
            </label>
            <label htmlFor="message" className="contact__cell">
               <span className="contact__label">Message</span>
               <textarea
                  id="message"
                  resize="none"
                  rows="5"
                  required
                  className="contact__input"
               />
            </label>
            <input
               type="submit"
               className="button contact__submit"
               value="Send"
            />
         </form>
      </div>
   );
};

export default Contact;
