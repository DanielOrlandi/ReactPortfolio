import React from 'react'
import {Row, Col} from 'reactstrap'
import './experience.css'
import {
  SiHtml5, 
  SiCss3, 
  SiReact, 
  SiNodedotjs, 
  SiBootstrap,
  SiUnity,
  SiDotnet,
  SiPhp,
  SiLaravel,
  SiIbm,
  SiCsharp,
  SiBlender,
  SiAdobepremierepro,
  SiAdobeillustrator
} from 'react-icons/si'
import {DiJavascript} from 'react-icons/di'

const Experience = () => {
  return (
    <section id="experience">
      <h2 className='text-title'>Minhas Abilidades</h2>
      <Row>
        <Col>
          <div className='container experience__container'>
            <div className='experience__frontend'>
              <h3>Frontend</h3>
              <div className="experience__content">
                <article className='experience__details'>
                  <SiHtml5 className='experience__details-icon'/>
                  <h4 className='experience__text'>HTML5</h4>
                </article>
                <article className='experience__details'>
                  <SiCss3 className='experience__details-icon'/>
                  <h4 className='experience__text'>CSS3</h4>
                </article>
                <article className='experience__details'>
                  <DiJavascript className='experience__details-icon'/>
                  <h4 className='experience__text'>JAVASCRIPT</h4>
                </article>
                <article className='experience__details'>
                  <SiReact className='experience__details-icon'/>
                  <h4 className='experience__text'>REACT</h4>
                </article>
                <article className='experience__details'>
                  <SiBootstrap className='experience__details-icon'/>
                  <h4 className='experience__text'>BOOTSTRAP5</h4>
                </article>
              </div>
            </div>
            <div className='experience__backend'>
              <h3>Backend</h3>
              <div className="experience__content">
                <article className='experience__details'>
                  <SiDotnet className='experience__details-icon'/>
                  <h4 className='experience__text'>.NET CORE</h4>
                </article>
                <article className='experience__details'>
                  <SiNodedotjs className='experience__details-icon'/>
                  <h4 className='experience__text'>NODEJS</h4>
                </article>
                <article className='experience__details'>
                  <SiPhp className='experience__details-icon'/>
                  <h4 className='experience__text'>PHP</h4>
                </article>
                <article className='experience__details'>
                  <SiLaravel className='experience__details-icon'/>
                  <h4 className='experience__text'>LARAVEL</h4>
                </article>
                <article className='experience__details'>
                  <SiIbm className='experience__details-icon'/>
                  <h4 className='experience__text'>IBM</h4>
                </article>
              </div>
            </div>
            <div className='experience__backend'>
              <h3>Gaming</h3>
              <div className="experience__content">
                <article className='experience__details'>
                  <SiUnity className='experience__details-icon'/>
                  <h4 className='experience__text'>UNITY</h4>
                </article>
                <article className='experience__details'>
                  <SiCsharp className='experience__details-icon'/>
                  <h4 className='experience__text'>C#</h4>
                </article>
                <article className='experience__details'>
                  <SiBlender className='experience__details-icon'/>
                  <h4 className='experience__text'>BLENDER</h4>
                </article>
                <article className='experience__details'>
                  <SiAdobepremierepro className='experience__details-icon'/>
                  <h4 className='experience__text'>PREMIER</h4>
                </article>
                <article className='experience__details'>
                  <SiAdobeillustrator className='experience__details-icon'/>
                  <h4 className='experience__text'>ILLUSTRATOR</h4>
                </article>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  )
}

export default Experience