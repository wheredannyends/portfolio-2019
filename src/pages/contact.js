import React, { useRef, useEffect, useCallback, useState } from 'react';
import { Back, TimelineLite } from 'gsap';
import cn from 'classnames';

const Contact = () => {
   let [
      contactWrap,
      titleRef,
      bodyRef,
      nameRef,
      emailRef,
      messageRef,
      buttonRef,
   ] = useRef(null);

   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [message, setMessage] = useState('');
   const [sending, setSending] = useState(false);
   const [submitMessage, setSubmitMessage] = useState('');

   useEffect(() => {
      let TL = new TimelineLite();

      const animation = {
         settings: [
            2,
            {
               opacity: 0,
               y: 50,
               scale: 1.1,
               ease: Back.easeOut,
            },
         ],
         delay: '-=1.8',
      };

      TL.to(contactWrap, 0, { css: { visibility: 'visible' } })
         .from(titleRef, ...animation.settings)
         .from(bodyRef, ...animation.settings, animation.delay)
         .from(nameRef, ...animation.settings, animation.delay)
         .from(emailRef, ...animation.settings, animation.delay)
         .from(messageRef, ...animation.settings, animation.delay)
         .from(buttonRef, ...animation.settings, animation.delay);
      return () => {
         TL.kill();
      };
   }, []);

   const encode = useCallback(data => {
      return Object.keys(data)
         .map(
            key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
         )
         .join('&');
   }, []);

   const handleSubmit = useCallback(
      async event => {
         event.preventDefault();

         try {
            setSending(true);

            const response = await fetch('/', {
               method: 'POST',
               headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
               body: encode({
                  'form-name': 'contact',
                  name,
                  email,
                  message,
               }),
            });

            if (response.ok) {
               setSubmitMessage(
                  "Message received! I'll get back to you as soon as I can."
               );
               setName('');
               setEmail('');
               setMessage('');
            } else {
               setSubmitMessage(
                  'Oops! Something went wrong. Please try again.'
               );
            }
         } catch (error) {
            setSubmitMessage('Oops! Something went wrong. Please try again.');
         } finally {
            setSending(false);
         }
      },
      [name, email, message]
   );

   return (
      <div
         className="contact container container--sm"
         ref={el => (contactWrap = el)}
      >
         <h2 ref={el => (titleRef = el)}>Want to get in touch?</h2>
         <p className="contact__body-text" ref={el => (bodyRef = el)}>
            Have an exciting project that you need my help with? Have a bug that
            you need squashed? Want to order me pizza and donuts? Whatever it
            may be, I can be reached all over the internet, or by good ol'
            fashioned <a href="mailto:iam@dannyburton.dev">email</a>. Shoot me a
            message and let's build something great together.
         </p>

         <form
            action="submit"
            onSubmit={handleSubmit}
            className="contact__form"
            method="post"
            data-netlify="true"
         >
            <label
               htmlFor="full-name"
               className="contact__cell"
               ref={el => (nameRef = el)}
            >
               <span className="contact__label">Full Name</span>
               <input
                  name="name"
                  type="text"
                  id="full-name"
                  className="contact__input"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
               />
            </label>

            <label
               htmlFor="email"
               className="contact__cell"
               ref={el => (emailRef = el)}
            >
               <span className="contact__label">Email Address</span>
               <input
                  name="email"
                  type="email"
                  id="email"
                  className="contact__input"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
               />
            </label>

            <label
               htmlFor="message"
               className="contact__cell"
               ref={el => (messageRef = el)}
            >
               <span className="contact__label">Message</span>
               <textarea
                  name="message"
                  id="message"
                  rows="5"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  required
                  className="contact__input"
               />
            </label>

            <button
               type="submit"
               className={cn('button contact__submit', {
                  'button--loading': sending,
               })}
               ref={el => (buttonRef = el)}
            >
               Send
            </button>

            {submitMessage && (
               <p className="contact__submit-message">{submitMessage}</p>
            )}
         </form>
      </div>
   );
};

export default Contact;

