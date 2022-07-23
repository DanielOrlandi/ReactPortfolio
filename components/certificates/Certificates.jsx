import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './certificates.css'
import ModalCertificate from './ModalCertificate';
import {FaCheck} from 'react-icons/fa'

const Certificate = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [numCertificate, setNumCertificate] = React.useState(0);

  function NumCertificateSet (num) {
    setNumCertificate(num);
    console.log(num);
    setModalShow(true);
  }

  return (
    <section id="certificates">
      <h2>Meus Certificados</h2>
      <ModalCertificate
        num={numCertificate}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <Row>
        <Col>
          <div className='certificate__container'>
            <div className='experience__frontend'>
              <h3>Frontend</h3>
              <div className="certificate__content">
                <article className='certificate__details'>
                  <FaCheck className='certificate__details-icon'/>
                  <button className='btn-certificate' onClick={() => NumCertificateSet(1)}>
                    React.js Essential Training
                  </button>
                </article>
                <article className='certificate__details'>
                  <FaCheck className='certificate__details-icon'/>
                  <button className='btn-certificate' onClick={() => NumCertificateSet(2)}>
                    React Hooks
                  </button>
                </article>
                <article className='certificate__details'>
                  <FaCheck className='certificate__details-icon'/>
                  <button className='btn-certificate' onClick={() => NumCertificateSet(3)}>
                    Building Projects with React
                  </button>
                </article>
                <article className='certificate__details'>
                  <FaCheck className='certificate__details-icon'/>
                  <button className='btn-certificate' onClick={() => NumCertificateSet(4)}>
                    React.js Building an Interface
                  </button>
                </article>
                <article className='certificate__details'>
                  <FaCheck className='certificate__details-icon'/>
                  <button className='btn-certificate' onClick={() => NumCertificateSet(5)}>
                    React FullStack Site
                  </button>
                </article>
                <article className='certificate__details'>
                  <FaCheck className='certificate__details-icon'/>
                  <button className='btn-certificate' onClick={() => NumCertificateSet(6)}>
                    JavaScript Formacao Basica
                  </button>
                </article>
              </div>
            </div>
            <div className='experience__backend'>
              <h3>Backend</h3>
              <div className="certificate__content">
                <article className='certificate__details'>
                  <FaCheck className='certificate__details-icon'/>
                  <button className='btn-certificate' onClick={() => NumCertificateSet(7)}>
                    Python Essential Training
                  </button>
                </article>
                <article className='certificate__details'>
                  <FaCheck className='certificate__details-icon'/>
                  <button className='btn-certificate' onClick={() => NumCertificateSet(8)}>
                    ASP.NET Core Middleware
                  </button>
                </article>
                <article className='certificate__details'>
                  <FaCheck className='certificate__details-icon'/>
                  <button className='btn-certificate' onClick={() => NumCertificateSet(9)}>
                    ASP.NET Core New Features
                  </button>
                </article>
                <article className='certificate__details'>
                  <FaCheck className='certificate__details-icon'/>
                  <button className='btn-certificate' onClick={() => NumCertificateSet(10)}>
                    ASP.NET Core Razor Pages
                  </button>
                </article>
                <article className='certificate__details'>
                  <FaCheck className='certificate__details-icon'/>
                  <button className='btn-certificate' onClick={() => NumCertificateSet(11)}>
                    ASP.NET Core Security
                  </button>
                </article>
                <article className='certificate__details'>
                  <FaCheck className='certificate__details-icon'/>
                  <button className='btn-certificate' onClick={() => NumCertificateSet(12)}>
                    ASP.NET Test Driven Development
                  </button>
                </article>
                <article className='certificate__details'>
                  <FaCheck className='certificate__details-icon'/>
                  <button className='btn-certificate' onClick={() => NumCertificateSet(13)}>
                    Become an ASP.NET Developer
                  </button>
                </article>
                <article className='certificate__details'>
                  <FaCheck className='certificate__details-icon'/>
                  <button className='btn-certificate' onClick={() => NumCertificateSet(14)}>
                    ASP.NET Core RESTful APIs
                  </button>
                </article>
                <article className='certificate__details'>
                  <FaCheck className='certificate__details-icon'/>
                  <button className='btn-certificate' onClick={() => NumCertificateSet(15)}>
                    Deploying ASP.NET Applications
                  </button>
                </article>
                <article className='certificate__details'>
                  <FaCheck className='certificate__details-icon'/>
                  <button className='btn-certificate' onClick={() => NumCertificateSet(16)}>
                    Learning ASP.NET Core MVC
                  </button>
                </article>
                <article className='certificate__details'>
                  <FaCheck className='certificate__details-icon'/>
                  <button className='btn-certificate' onClick={() => NumCertificateSet(17)}>
                    ASP.NET Web Forms
                  </button>
                </article>
                <article className='certificate__details'>
                  <FaCheck className='certificate__details-icon'/>
                  <button className='btn-certificate' onClick={() => NumCertificateSet(18)}>
                    PHP Persistent Sessions
                  </button>
                </article>
                <article className='certificate__details'>
                  <FaCheck className='certificate__details-icon'/>
                  <button className='btn-certificate' onClick={() => NumCertificateSet(19)}>
                    Descubra o SQL
                  </button>
                </article>
                <article className='certificate__details'>
                  <FaCheck className='certificate__details-icon'/>
                  <button className='btn-certificate' onClick={() => NumCertificateSet(20)}>
                    Learning MySQL Development
                  </button>
                </article>
                <article className='certificate__details'>
                  <FaCheck className='certificate__details-icon'/>
                  <button className='btn-certificate' onClick={() => NumCertificateSet(21)}>
                    Learning Entity Framework
                  </button>
                </article>
              </div>
            </div>
            <div className='experience__backend'>
              <h3>IBM and Gaming</h3>
              <div className="certificate__content">
                <article className='certificate__details'>
                  <FaCheck className='certificate__details-icon'/>
                  <button className='btn-certificate' onClick={() => NumCertificateSet(22)}>
                    C# Unity Game Development
                  </button>
                </article>
                <article className='certificate__details'>
                  <FaCheck className='certificate__details-icon'/>
                  <button className='btn-certificate' onClick={() => NumCertificateSet(23)}>
                    IBM RPA Basic I
                  </button>
                </article>
                <article className='certificate__details'>
                  <FaCheck className='certificate__details-icon'/>
                  <button className='btn-certificate' onClick={() => NumCertificateSet(24)}>
                    IBM RPA Basic II
                  </button>
                </article>
                <article className='certificate__details'>
                  <FaCheck className='certificate__details-icon'/>
                  <button className='btn-certificate' onClick={() => NumCertificateSet(25)}>
                    IBM RPA Intermediate I
                  </button>
                </article>
                <article className='certificate__details'>
                  <FaCheck className='certificate__details-icon'/>
                  <button className='btn-certificate' onClick={() => NumCertificateSet(26)}>
                    IBM RPA Intermediate II
                  </button>
                </article>
                <article className='certificate__details'>
                  <FaCheck className='certificate__details-icon'/>
                  <button className='btn-certificate' onClick={() => NumCertificateSet(27)}>
                    IBM RPA Database
                  </button>
                </article>
                <article className='certificate__details'>
                  <FaCheck className='certificate__details-icon'/>
                  <button className='btn-certificate' onClick={() => NumCertificateSet(28)}>
                    IBM RPA IVA
                  </button>
                </article>
                <article className='certificate__details'>
                  <FaCheck className='certificate__details-icon'/>
                  <button className='btn-certificate' onClick={() => NumCertificateSet(29)}>
                    IBM RPA Regex
                  </button>
                </article>
                <article className='certificate__details'>
                  <FaCheck className='certificate__details-icon'/>
                  <button className='btn-certificate' onClick={() => NumCertificateSet(30)}>
                    IBM RPA Reports
                  </button>
                </article>
                <article className='certificate__details'>
                  <FaCheck className='certificate__details-icon'/>
                  <button className='btn-certificate' onClick={() => NumCertificateSet(31)}>
                    IBM RPA Windows Applications
                  </button>
                </article>
                <article className='certificate__details'>
                  <FaCheck className='certificate__details-icon'/>
                  <button className='btn-certificate' onClick={() => NumCertificateSet(32)}>
                    IBMRPA Excel basics
                  </button>
                </article>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  )
}

export default Certificate