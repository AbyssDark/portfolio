import AnimatedLetters from '@components/AnimatedLetters/AnimatedLetters';
import React, { useState, useEffect, useRef } from 'react';
import './contact.scss';
import Map, { Marker } from 'react-map-gl';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = [...'Contact me'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  });

  const form = useRef<HTMLFormElement>(null);

  const inputRef1 = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);
  const inputRef3 = useRef<HTMLTextAreaElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (form.current !== null) {
      emailjs
        .sendForm(
          'service_l9xofg9',
          'template_vws9vy4',
          form.current,
          'bwNmpvN9pSlHKdFTC',
        )
        .then(
          () => {
            window.alert('Mail Have Been Sent Successfully!!!');
          },
          () => {},
        );
    }

    if (inputRef1.current !== null) inputRef1.current.value = '';
    if (inputRef2.current !== null) inputRef2.current.value = '';
    if (inputRef2.current !== null) inputRef2.current.value = '';
  };

  return (
    <div className='contact'>
      <div className='contact__left'>
        <span className='tag' style={{ padding: '0rem' }}>
          &lt;body&gt;
        </span>
        <h1 className='about__headingPrimary'>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
        </h1>
        <p className='contact__description'>
          I currently seeking new opportunities at this time, I am always
          available through my inbox. Whether you have a question or simply want
          to connect, please don't hesitate to reach out. I will make every
          effort to respond to your message as promptly as I can.
        </p>
        <div className='form'>
          <form ref={form} onSubmit={sendEmail}>
            <div className='form__group'>
              <input
                name='user_name'
                ref={inputRef1}
                type='text'
                className='form__input'
                id='name'
                placeholder='Full Name'
                required
              />
              <label htmlFor='name' className='form__label'>
                Full Name
              </label>
            </div>
            <div className='form__group'>
              <input
                type='email'
                ref={inputRef2}
                name='user_email'
                className='form__input'
                id='email'
                placeholder='Email Address'
                required
              />
              <label htmlFor='email' className='form__label'>
                Email Address
              </label>
            </div>
            <div className='form__group'>
              <textarea
                name='message'
                ref={inputRef3}
                className='form__input'
                id='message'
                placeholder='Message'
                required
              />
              <label htmlFor='message' className='form__label'>
                Message
              </label>
            </div>
            <button type='submit' value='Send' className='intro__button'>
              Send Mail
            </button>
          </form>
        </div>
        <span className='tag' style={{ padding: '0rem' }}>
          &lt;body&gt;
        </span>
      </div>
      <div className='contact__right'>
        <Map
          mapboxAccessToken='pk.eyJ1IjoieWFzaGZhbGtlNzciLCJhIjoiY2t1MjQ2Z2cwMmxjazJvbXI2OGk5b2V0dSJ9.BGnMIJbpa2OzthfRTtTP6w'
          initialViewState={{
            longitude: 106.72583247487199,
            latitude: 10.769359134628786,
            zoom: 9.5,
          }}
          style={{ width: '100%', height: 600 }}
          mapStyle='mapbox://styles/mapbox/outdoors-v12'
        >
          {/* <Marker latitude={106.72583247487199} longitude={10.769359134628786}></Marker> */}
        </Map>
      </div>
    </div>
  );
};

export default Contact;
