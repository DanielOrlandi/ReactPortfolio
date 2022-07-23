import React, { useRef } from 'react'
import './contact.css'
import { Row, Col } from 'reactstrap'
import {MdEmail} from 'react-icons/md'
import {RiWhatsappFill} from 'react-icons/ri'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section className='contact__with' id="contact">
      <h2>Entre em Contato</h2>
      <Row>
        <Col md='4'>
          <div className='contact__container'>
            <div>
              <article>
                <MdEmail className='contact__details-icon'/>
                <h4 className='text-white'>Email</h4>
                <h5 className='text-white'></h5>
                <a href="mailto:" className='text-decoration' target='blank'>Envie um e-mail.</a>
              </article>
            </div>
          </div><br/>
          <div className='contact__container'>
            <div>
              <article>
                <RiWhatsappFill className='contact__details-icon'/>
                <h4 className='text-white'>WhatsApp</h4>
                <h5 className='text-white'></h5>
                <a href="https://api.whatsapp.com/send?phone=" className='text-decoration' target="blank">Envie uma mensagem.</a>
              </article>
            </div>
          </div><br/>
        </Col>
        <Col>
          <div>
            <form ref={form} onSubmit={sendEmail}>
              <input className='text-white' type="text" name='name' placeholder='Nome' required />
              <input className='text-white' type="text" name='email' placeholder='E-mail' required />
              <textarea className='text-white' name="message" rows="7" placeholder='Mensagem' required></textarea>
              <button type='submit' className='btn-first'>Enviar</button>
            </form>
          </div>
        </Col>
      </Row>
    </section>
  )
}

export default Contact