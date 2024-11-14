import React from 'react';
import { Container, Form, Col, Row } from 'react-bootstrap';
import code from '../../assets/images/18941-Photoroom.png'


export default function Brand() {

    return (
        <main>
            <section className='banner-section-wapper py-5'>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={6}>
                            <h3 className='font-size-min font-black font-w6'>Hi, I am</h3>
                            <h1 className='font-size-big font-black font-w6'>Sagar Chachapara</h1>
                            <p className='font-gray font-w7 font-size-small'>Front-end Developer / UI Designer</p>
                        </Col>
                        <Col lg={6}>
                            <div className='img-responsive'>
                                <img src={code} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    )
}


