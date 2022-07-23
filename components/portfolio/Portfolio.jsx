import React, {useState} from 'react'
import { Row } from 'react-bootstrap';
import { Col } from 'reactstrap';
import Carousel from 'react-bootstrap/Carousel';
import './portfolio.css'
import pic01 from ''
import pic02 from ''
import pic03 from ''
import pic04 from ''
import pic05 from ''
import pic06 from ''
import pic07 from ''
import rmpic01 from ''
import rmpic02 from ''
import rmpic03 from ''
import rmpic04 from ''
import rlpic01 from ''
import rlpic02 from ''
import rlpic03 from ''
import rlpic04 from ''
import rlpic05 from ''
import rlpic06 from ''
import rlpic07 from ''
import rlpic08 from ''
import {FaCheck} from 'react-icons/fa'


export const Portfolio = () => {
  const [index, setIndex] = useState(0);
  const [indexRM, setIndexRM] = useState(0);
  const [indexRL, setIndexRL] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleSelectRM = (selectedIndexRM, e) => {
    setIndexRM(selectedIndexRM);
  };

  const handleSelectRL = (selectedIndexRL, e) => {
    setIndexRL(selectedIndexRL);
  };

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <h5 className='portfolio__description'>Projetos no Google Play</h5>
      <div className='portfolio__container'>
        <Row>
          <Col md={7}>
            <div className='carousel'>
              <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={pic01}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={pic02}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={pic03}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={pic04}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={pic05}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={pic06}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={pic07}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
          <Col md={5}>
            <div className='portfolio__title'>
              
            </div>
            <div className='portfolio__description'>
              Knights of Merinda é um jogo de aventura 
              e ação com o objetivo de destruir a torre inimiga e avançar de nível.
            </div><br/>
            <div>
              <iframe 
                src="" 
                width="100%"
                title="" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div><br/>
            <div>
              <a href='' target="blank" className='btn-first text-decoration'>Baixar</a>
            </div>
          </Col>
        </Row>
      </div><br/>
      <div className='container portfolio__container'>
        <Row>
          <Col md={7}>
            <div className='carousel'>
              <Carousel activeIndex={indexRM} onSelect={handleSelectRM}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={rmpic01}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={rmpic02}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={rmpic03}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={rmpic04}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
          <Col md={5}>
            <div className='portfolio__title'>
              
            </div><br/>
            <div className='portfolio__description'>
              Um jogo de labirinto. Você precisa encontrar o portal para escapar. 
              Existem três níveis de dificuldade. 
              Quanto maior a dificuldade, maior é o labirinto. 
              Evite o inimigo escondendo-se nos cantos.
            </div><br/>
            <div>
              <a href='' target="blank" className='btn-first text-decoration'>Baixar</a>
            </div>
          </Col>
        </Row>
      </div><br/>
      <div className='container portfolio__container'>
        <Row>
          <Col md={7}>
            <div className='carousel'>
              <Carousel activeIndex={indexRL} onSelect={handleSelectRL}>
                <Carousel.Item>
                  <Row>
                    <Col>
                      <img
                        className="d-block w-100"
                        src={rlpic01}
                        alt="First slide"
                      />
                    </Col>
                    <Col>
                      <img
                        className="d-block w-100"
                        src={rlpic02}
                        alt="First slide"
                      />
                    </Col>
                    <Col>
                      <img
                        className="d-block w-100"
                        src={rlpic03}
                        alt="First slide"
                      />
                    </Col>
                  </Row>
                </Carousel.Item>
                <Carousel.Item>
                <Row>
                    <Col>
                      <img
                        className="d-block w-100"
                        src={rlpic04}
                        alt="First slide"
                      />
                    </Col>
                    <Col>
                      <img
                        className="d-block w-100"
                        src={rlpic05}
                        alt="First slide"
                      />
                    </Col>
                    <Col>
                      <img
                        className="d-block w-100"
                        src={rlpic06}
                        alt="First slide"
                      />
                    </Col>
                  </Row>
                </Carousel.Item>
                <Carousel.Item>
                <Row>
                    <Col>
                      <img
                        className="d-block w-100"
                        src={rlpic07}
                        alt="First slide"
                      />
                    </Col>
                    <Col>
                      <img
                        className="d-block w-100"
                        src={rlpic08}
                        alt="First slide"
                      />
                    </Col>
                    <Col>
                      <img
                        className="d-block w-100"
                        src={rlpic01}
                        alt="First slide"
                      />
                    </Col>
                  </Row>
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
          <Col md={5}>
            <div className='portfolio__title'>
              
            </div><br/>
            <div className='portfolio__description'>
              Cut the link rescue é um jogo de estratégia 
              onde você precisa cortar uma corda ou mais 
              cordas e passar pela porta.
            </div><br/>
            <div>
              <a href='' target="blank" className='btn-first text-decoration'>Baixar</a>
            </div>
          </Col>
        </Row>
      </div><br/>
      <h5 className='portfolio__description section__padding'>Projetos no GitHub</h5>
      <Row>
        <Col>
          <div className='container portfolio__containergit'>
            <div>
              <div className='portfolio__title'>
                Este Portfolio
              </div><br/>
              <div>
                <article className='portfolio__details'>
                  <FaCheck className='portfolio__details-icon'/>
                  <h4 className='portfolio__description'>React</h4>
                </article>
              </div><br/>
              <div>
                <a href='' target="blank" className='btn-certificate text-decoration'>Arquivos</a>
              </div>
            </div>
            <div>
              <div className='portfolio__title'>
                So Piadas
              </div><br/>
              <div>
                <article className='portfolio__details'>
                  <FaCheck className='portfolio__details-icon'/>
                  <h4 className='portfolio__description'>.NET Core</h4>
                </article>
              </div><br/>
              <div>
                <a href='' target="blank" className='btn-certificate text-decoration'>Arquivos</a>
              </div>
            </div>
            <div>
              <div className='portfolio__title'>
                Supermercado
              </div><br/>
              <div>
                <article className='portfolio__details'>
                  <FaCheck className='portfolio__details-icon'/>
                  <h4 className='portfolio__description'>Python</h4>
                </article>
              </div><br/>
              <div>
                <a href='' target="blank" className='btn-certificate text-decoration'>Arquivos</a>
              </div>
            </div>
            <div>
              <div className='portfolio__title'>
                Media
              </div><br/>
              <div>
                <article className='portfolio__details'>
                  <FaCheck className='portfolio__details-icon'/>
                  <h4 className='portfolio__description'>PHP</h4>
                </article>
              </div><br/>
              <div>
                <a href='' target="blank" className='btn-certificate text-decoration'>Arquivos</a>
              </div>
            </div>
          </div>
        </Col>
      </Row><br/>
      <h5 className='portfolio__description section__padding'>Projetos Empresariais</h5>
      <Row>
        <Col>
          <div className='container portfolio__containerwebsite'>
            <Row>
              <Col>
                <div>
                  <div className='portfolio__title'>
                    GHubee
                  </div><br/>
                  <div>
                    <article className='portfolio__details'>
                      <FaCheck className='portfolio__details-icon'/>
                      <h4 className='portfolio__description'>React</h4>
                    </article>
                    <article className='portfolio__details'>
                      <FaCheck className='portfolio__details-icon'/>
                      <h4 className='portfolio__description'>PHP</h4>
                    </article>
                  </div><br/>
                  <div>
                    <a href='' target="blank" className='btn-certificate text-decoration'>Site</a>
                  </div>
                </div>
              </Col>
              <Col>
                <div>
                  <div className='portfolio__title'>
                    Descrição
                  </div><br/>
                  <p className='portfolio__description'>dfhalhaljafjaiofa</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div>
                  <div className='portfolio__title'>
                    mygroundforce
                  </div><br/>
                  <div>
                    <article className='portfolio__details'>
                      <FaCheck className='portfolio__details-icon'/>
                      <h4 className='portfolio__description'>React</h4>
                    </article>
                  </div><br/>
                  <div>
                    <a href='' target="blank" className='btn-certificate text-decoration'>Site</a>
                  </div>
                </div>
              </Col>
              <Col>
                <div>
                  <div className='portfolio__title'>
                    Descrição
                  </div><br/>
                  <p className='portfolio__description'>dfhalhaljafjaiofa</p>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </section>
  )
}

export default Portfolio
