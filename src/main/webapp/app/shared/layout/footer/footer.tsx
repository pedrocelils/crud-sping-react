import './footer.scss';

import React from 'react';

import { Col, Row } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => (
  <div className="footer page-content">
    <Row>
      <Col md="12">
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div className="footer-blog">
                  <h3>Menu</h3>

                  <div>
                    <a href="#">Códigos Html</a>
                  </div>

                  <div>
                    <a href="#">Códigos Css</a>
                  </div>

                  <div>
                    <a href="#">jQuery</a>
                  </div>

                  <div>
                    <a href="#">WordPress</a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="footer-tags">
                  <h3>Tags</h3>
                  <a href="#">html</a>
                  <a href="#">css</a>
                  <a href="#">jquery</a>
                  <a href="#">h1</a>
                  <a href="#">article</a>
                  <a href="#">footer</a>
                  <a href="#">slide</a>
                  <a href="#">menus</a>
                  <a href="#">picture</a>
                  <a href="#">nav</a>
                  <a href="#">ul</a>
                  <a href="#">li</a>
                  <a href="#">header</a>
                  <a href="#">aside</a>
                  <a href="#">form</a>
                  <a href="#">label</a>
                  <a href="#">input</a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="footer-newsletter">
                  <h3>Newsletter</h3>

                  <form>
                    <input className="campo" value="Nome" type="text" name="name" />
                    <input className="campo" value="E-mail" type="text" name="name" />
                    <input className="btn" type="submit" value="Assinar" />
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="footer-contact">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <h4>E-mail</h4>
                  <p>contato@loopnerd.com.br</p>
                </div>

                <div className="col-md-6">
                  <h4>Redes Sociais</h4>
                  <a href="https://twitter.com/">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.facebook.com/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.instagram.com/">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://br.pinterest.com/">
                    <i className="fab fa-pinterest"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="copyright">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="copy-text">
                    <p>
                      &copy; <a href="#">Seu site</a> - Todos os Direitos Reservados.
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="copy-menu">
                    <a href="#">Termos de Uso</a>
                    <a href="#">Privacidade</a>
                    <a href="#">Loop Nerd</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </Col>
    </Row>
  </div>
);

export default Footer;
