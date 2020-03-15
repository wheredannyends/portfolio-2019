import React, { useRef, useEffect } from 'react';
import { Back, TimelineLite } from 'gsap';

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

  return (
    <div className="inner-wrap contact" ref={el => (contactWrap = el)}>
      <h2 ref={el => (titleRef = el)}>Want to get in touch?</h2>
      <p className="contact__body-text" ref={el => (bodyRef = el)}>
        Have an exciting project that you need my help with? Have a bug that
        you need squashed? Want to order me pizza and donuts? Whatever it
        may be, I can be reached all over the internet, or by good ol'
            fashioned <a href="mailto:iam@dannyburton.dev">email</a>. Shoot me a message and let's build something great
            together.
         </p>
      <form action="submit" className="contact__form">
        <label
          htmlFor="full-name"
          className="contact__cell"
          ref={el => (nameRef = el)}
        >
          <span className="contact__label">Full Name</span>
          <input
            type="text"
            id="full-name"
            className="contact__input"
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
            type="email"
            id="email"
            className="contact__input"
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
            id="message"
            resize="none"
            rows="5"
            required
            className="contact__input"
          />
        </label>
        <button
          type="submit"
          className="button contact__submit"
          ref={el => (buttonRef = el)}
        >
          Send
            </button>
      </form>
    </div>
  );
};

export default Contact;
