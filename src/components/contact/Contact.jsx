import React, { useEffect, useState } from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {RiWhatsappFill} from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const [resultado, setResultado] = useState(false);
  const [clase, setClase] = useState('');
  // const [mensaje, setMensaje] = useState();

  useEffect(() => {
    if (resultado === 'Message sent successfully'){
      setClase('error__message');
    } else {
      setClase('error__message-true');
    }
  }, [resultado]);
  
  const sendEmail = (e) => {
    setResultado(false);
    // setMensaje(null);
    e.preventDefault();

    emailjs.sendForm('service_60weg4e', 'template_atd5xzl', form.current, 'EzfzvwuRLjCefzBHp')
      .then((result) => {
          console.log(result.text);
          setResultado('Message sent successfully');
          // setMensaje('Message sent successfully');
      }, (error) => {
          console.log(error.text);
          setResultado('An error has occurred, try with the other contact options');
          // setMensaje('An error has occurred, try with the other contact options');
      });

      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className="contact__option">
           <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>martinmesa1299@gmail.com</h5>
            <a href="mailto:martinmesa1299@gmail.com" target={'_blank'}>Send a message</a>
          </article>

          <article className="contact__option">
           <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>mmesa@vlcybernetics.com</h5>
            <a href="mailto:mmesa@vlcybernetics.com" target={'_blank'}>Send a message</a>
          </article>

          <article className="contact__option">
           <RiWhatsappFill className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+50762226338</h5>
            <a href="https://wa.me/50762226338" target={'_blank'}>Send a message</a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          {resultado && (<h5 className= {`${clase}`}>{resultado}</h5>)}
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact