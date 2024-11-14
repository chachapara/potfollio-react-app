import React from 'react';
import { Container, Form, Col, Row } from 'react-bootstrap';
import code from '../../assets/images/18941-Photoroom.png'


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
            <section className='banner-about-section py-5'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='d-flex justify-content-center'>
                                <p className='text-border-desing font-Montserrat font-w6'>ABOUT ME</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    )
}


