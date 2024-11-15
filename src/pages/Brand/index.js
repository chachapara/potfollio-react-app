import React from 'react';
import { Container, Form, Col, Row } from 'react-bootstrap';
import code from '../../assets/images/18941-Photoroom.png'
import desing from '../../assets/images/desing.png'
import maintenance from '../../assets/images/maintenance.png'
import setting from '../../assets/images/setting.png'
import html from '../../assets/images/html.png'
import css from '../../assets/images/css.png'
import scss from '../../assets/images/scss.png'
import bootstrap from '../../assets/images/bootstrap.png'
import reactjs from '../../assets/images/reactjs.png'
import hubsport from '../../assets/images/hubsport.png'



export default function Brand() {

    return (
        <main className='banner-main-wapper'>
            <section className='banner-section-wapper py-5'>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={6}>
                            <h3 className='font-size-min font-black font-w6 font-Raleway'>Hi, I am</h3>
                            <h1 className='font-size-big font-black font-w6 font-Raleway'>Sagar Chachapara</h1>
                            <p className='font-gray font-w7 font-size-small font-Raleway'>Front-end Developer / UI Designer</p>
                        </Col>
                        <Col lg={6}>
                            <div className='img-responsive'>
                                <img src={code} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='banner-about-section py-5 mb-5'>
                <Container>
                    <Row className='g-5 justify-content-center'>
                        <Col lg={12}>
                            <div className='d-flex justify-content-center'>
                                <p className='text-border-desing font-Montserrat font-w6'>ABOUT</p>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='border-card p-4 border-r mt-5'>
                                <div className='d-flex align-items-center pb-3'>
                                    <img src={desing} alt="" />
                                    <p className='font-Montserrat font-w6 about-fomt font-black letter-spacing m-0 ms-2'>DESIGN</p>
                                </div>
                                <p className='para-font font-gray font-Open-Sans font-w6 m-0'>crafting an effective and visually appealing user interface (UI) involves balancing aesthetics with usability.</p>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='border-card p-4 border-r mt-5'>
                                <div className='d-flex align-items-center pb-3'>
                                    <img src={maintenance} alt="" />
                                    <p className='font-Montserrat font-w6 about-fomt font-black letter-spacing m-0 ms-2'>DEVELOPMENT</p>
                                </div>
                                <p className='para-font font-gray font-Open-Sans font-w6 m-0'>focuses on the look of the website. It includes layout, color schemes, typography, and component styling.</p>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='border-card p-4 border-r'>
                                <div className='d-flex align-items-center pb-3'>
                                    <img src={setting} alt="" />
                                    <p className='font-Montserrat font-w6 about-fomt font-black letter-spacing m-0 ms-2'>MAINTENANCE</p>
                                </div>
                                <p className='para-font font-gray font-Open-Sans font-w6 m-0'>Regularly update the UI based on user feedback. This may include updating components as per client requirements.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='banner-about-section py-5 mb-5'>
                <Container>
                    <Row className='g-5'>
                        <Col lg={12}>
                            <div className='d-flex justify-content-center mb-5'>
                                <p className='text-border-desing font-Montserrat font-w6'>SKILLS</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className='text-center'>
                                <img src={html} alt="" />
                                <p className='font-Montserrat font-w6 about-fomt font-black letter-spacing mt-2'>HTML</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className='text-center'>
                                <img src={css} alt="" />
                                <p className='font-Montserrat font-w6 about-fomt font-black letter-spacing mt-2'>CSS</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className='text-center'>
                                <img src={scss} alt="" />
                                <p className='font-Montserrat font-w6 about-fomt font-black letter-spacing mt-2'>SCSS</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className='text-center'>
                                <img src={bootstrap} alt="" />
                                <p className='font-Montserrat font-w6 about-fomt font-black letter-spacing mt-2'>BOOTSTRAP</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className='text-center'>
                                <img src={reactjs} alt="" />
                                <p className='font-Montserrat font-w6 about-fomt font-black letter-spacing mt-2'>REACT-JS</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className='text-center'>
                                <img src={hubsport} alt="" />
                                <p className='font-Montserrat font-w6 about-fomt font-black letter-spacing mt-2'>HUBSPORT</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='banner-about-section py-5'>
                <Container>
                    <Row className='g-5'>
                        <Col lg={12}>
                            <div className='d-flex justify-content-center mb-5'>
                                <p className='text-border-desing font-Montserrat font-w6'>PROJECT</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    )
}


