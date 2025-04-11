import { useState } from 'react';
import emailjs from 'emailjs-com';
import { Container, Form, Col, Row, Alert, Accordion } from 'react-bootstrap';
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
import Siffra from '../../assets/images/Siffra.png'
import Inymbus from '../../assets/images/Inymbus.png'
import Pacarada from '../../assets/images/Pacarada.png'
import Onyx from '../../assets/images/Onyx.png'
import Digital from '../../assets/images/Digital.png'
import Coventic from '../../assets/images/Coventic.png'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';


export default function Brand() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Invalid email address';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            await emailjs.send(
                'service_fcf3tdf',      // Replace with your EmailJS service ID
                'template_h6yfadk',     // Replace with your EmailJS template ID
                {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                },
                'lWGEA6kgJfhw34aEH'       // Replace with your EmailJS public key
            );

            setSuccess(true);
            setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form
            setTimeout(() => setSuccess(false), 3000);
            setErrors({});
        } catch (error) {
            console.error('Failed to send email:', error);
            alert('Something went wrong. Please try again.');
        }
    };

    return (
        <main className='banner-main-wapper'>
            <section className='banner-section-wapper py-5'>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={6}>
                            <h3 className='font-size-min msg-text font-black font-w6 font-Raleway'>Hi, I am</h3>
                            <h1 className='font-size-big text-responsive font-black font-w6 font-Raleway'>Sagar Chachapara</h1>
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
                                <p id='About' className='text-border-desing font-Montserrat font-w6'>ABOUT</p>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='border-card p-4 border-r mt-5'>
                                <div className='d-flex align-items-center flex-wrap pb-3'>
                                    <img src={desing} alt="" />
                                    <p className='font-Montserrat font-w6 about-fomt font-black letter-spacing m-0 ms-2'>DESIGN</p>
                                </div>
                                <p className='para-font font-gray font-Open-Sans font-w6 m-0'>crafting an effective and visually appealing user interface (UI) involves balancing aesthetics with usability.</p>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='border-card p-4 border-r mt-md-5'>
                                <div className='d-flex align-items-center flex-wrap pb-3'>
                                    <img src={maintenance} alt="" />
                                    <p className='font-Montserrat font-w6 about-fomt font-black letter-spacing m-0 ms-2'>DEVELOPMENT</p>
                                </div>
                                <p className='para-font font-gray font-Open-Sans font-w6 m-0'>focuses on the look of the website. It includes layout, color schemes, typography, and component styling.</p>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='border-card p-4 border-r'>
                                <div className='d-flex align-items-center flex-wrap pb-3'>
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
                                <p id='Skills' className='text-border-desing font-Montserrat font-w6'>SKILLS</p>
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
            <section className='banner-about-section py-5 mb-5'>
                <Container>
                    <Row className='g-5'>
                        <Col lg={12}>
                            <div className='d-flex justify-content-center mb-5'>
                                <p id='Project' className='text-border-desing font-Montserrat font-w6'>PROJECT</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div class="work-card space-y-10">
                                <div class="work-card-header img-responsive">
                                    <a href="https://siffra.com" target="_blank" rel="noopener noreferrer">
                                        <img src={Siffra} alt="Siffra Logo" />
                                    </a>
                                </div>
                                <div class="">
                                    <p className='font-gray font-w6 font-Raleway py-3 m-0'>various categories of electric vehicles (EVs) online.</p>
                                    <ul class="space-y-10 list-unstyled list-inline mb-0">
                                        <li class="list-inline-item border border-dark rounded-pill px-2 font-Montserrat font-w6 letter-spacing">HTML</li>
                                        <li class="list-inline-item border border-dark rounded-pill px-2 font-Montserrat font-w6 letter-spacing">CSS</li>
                                        <li class="list-inline-item border border-dark rounded-pill px-2 font-Montserrat font-w6 letter-spacing last-link">REACT-JS</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div class="work-card space-y-10">
                                <div class="work-card-header img-responsive">
                                    <a href="https://www.inymbus.com/" target="_blank" rel="noopener noreferrer">
                                        <img src={Inymbus} alt="" />
                                    </a>
                                </div>
                                <div class="">
                                    <p className='font-gray font-w6 font-Raleway py-3 m-0'>Automated Deduction Management Software: iNymbus.</p>
                                    <ul class="space-y-10 list-unstyled list-inline mb-0">
                                        <li class="list-inline-item border border-dark rounded-pill px-2 font-Montserrat font-w6 letter-spacing">HTML</li>
                                        <li class="list-inline-item border border-dark rounded-pill px-2 font-Montserrat font-w6 letter-spacing">CSS</li>
                                        <li class="list-inline-item border border-dark rounded-pill px-2 font-Montserrat font-w6 letter-spacing last-link">HUBSPORT</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div class="work-card space-y-10">
                                <div class="work-card-header img-responsive">
                                    <a href="http://pacarda.smartweb-tech.com/" target="_blank" rel="noopener noreferrer">
                                        <img src={Pacarada} alt="" />
                                    </a>
                                </div>
                                <div class="">
                                    <p className='font-gray font-w6 font-Raleway py-3 m-0'>construction and contractor websites to explore innovative designs and layouts.</p>
                                    <ul class="space-y-10 list-unstyled list-inline mb-0">
                                        <li class="list-inline-item border border-dark rounded-pill px-2 font-Montserrat font-w6 letter-spacing">HTML</li>
                                        <li class="list-inline-item border border-dark rounded-pill px-2 font-Montserrat font-w6 letter-spacing">CSS</li>
                                        <li class="list-inline-item border border-dark rounded-pill px-2 font-Montserrat font-w6 letter-spacing last-link">WORDPRESS</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div class="work-card space-y-10">
                                <div class="work-card-header img-responsive">
                                    <a href="https://onyxhookah.com/" target="_blank" rel="noopener noreferrer">
                                        <img src={Onyx} alt="" />
                                    </a>
                                </div>
                                <div class="">
                                    <p className='font-gray font-w6 font-Raleway py-3 m-0'>Online eCommerce store to sell products of base template.</p>
                                    <ul class="space-y-10 list-unstyled list-inline mb-0">
                                        <li class="list-inline-item border border-dark rounded-pill px-2 font-Montserrat font-w6 letter-spacing">HTML</li>
                                        <li class="list-inline-item border border-dark rounded-pill px-2 font-Montserrat font-w6 letter-spacing">CSS</li>
                                        <li class="list-inline-item border border-dark rounded-pill px-2 font-Montserrat font-w6 letter-spacing last-link">BOOTSTRAP</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div class="work-card space-y-10">
                                <div class="work-card-header img-responsive">
                                    <a href="https://vercel-project-ten-swart.vercel.app" target="_blank" rel="noopener noreferrer">
                                        <img src={Digital} alt="" />
                                    </a>
                                </div>
                                <div class="">
                                    <p className='font-gray font-w6 font-Raleway py-3 m-0'>digitalization and technology, featuring detailed insights and innovative solutions.</p>
                                    <ul class="space-y-10 list-unstyled list-inline mb-0">
                                        <li class="list-inline-item border border-dark rounded-pill px-2 font-Montserrat font-w6 letter-spacing">HTML</li>
                                        <li class="list-inline-item border border-dark rounded-pill px-2 font-Montserrat font-w6 letter-spacing">CSS</li>
                                        <li class="list-inline-item border border-dark rounded-pill px-2 font-Montserrat font-w6 letter-spacing last-link">REACT-JS</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div class="work-card space-y-10">
                                <div class="work-card-header img-responsive">
                                    <a href="https://animation-live.vercel.app" target="_blank" rel="noopener noreferrer">
                                        <img src={Coventic} alt="" />
                                    </a>
                                </div>
                                <div class="">
                                    <p className='font-gray font-w6 font-Raleway py-3 m-0'>A straightforward project designed for practice and skill development.</p>
                                    <ul class="space-y-10 list-unstyled list-inline mb-0">
                                        <li class="list-inline-item border border-dark rounded-pill px-2 font-Montserrat font-w6 letter-spacing">HTML</li>
                                        <li class="list-inline-item border border-dark rounded-pill px-2 font-Montserrat font-w6 letter-spacing">CSS</li>
                                        <li class="list-inline-item border border-dark rounded-pill px-2 font-Montserrat font-w6 letter-spacing last-link">BOOTSTRAP</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='banner-about-section py-5 mb-lg-5'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='d-flex justify-content-center mb-lg-5'>
                                <p id='support' className='text-border-desing font-Montserrat font-w6'>SUPPORT</p>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className='pb-3 pt-5'>
                                <Swiper
                                    slidesPerView={3}
                                    spaceBetween={30}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                            spaceBetween: 20,
                                        },
                                        640: {
                                            slidesPerView: 2,
                                            spaceBetween: 20,
                                        },
                                        768: {
                                            slidesPerView: 3,
                                            spaceBetween: 30,
                                        },
                                        1024: {
                                            slidesPerView: 3,
                                            spaceBetween: 30,
                                        },
                                    }}
                                    modules={[Pagination, Autoplay]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <div className='work-card h-100'>
                                            <div className='mb-2'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#0077cc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-square">
                                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                                </svg>
                                            </div>
                                            <h3>client feedback</h3>
                                            <p className='m-0'>Quick responses and real-time help for your questions and issues.</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='work-card h-100'>
                                            <div className='mb-2'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#0077cc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-lightbulb">
                                                    <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12v2h8v-2a7 7 0 0 0-4-12z" />
                                                </svg>
                                            </div>
                                            <h3>Understanding of the issue</h3>
                                            <p className='m-0'>I listen carefully to client concerns, ask the right questions, and analyze the root cause before providing any solution.</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='work-card h-100'>
                                            <div className='mb-2'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#facc15" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-zap">
                                                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                                                </svg>
                                            </div>
                                            <h3>Quick and Effective Responses</h3>
                                            <p className='m-0'>Whether it's a bug, a feature request, or a usability concern I respond fast and offer clear, actionable help.</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='work-card h-100'>
                                            <div className='mb-2'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#4f46e5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-headphones">
                                                    <path d="M3 18v-6a9 9 0 0 1 18 0v6M21 18a3 3 0 0 1-6 0M3 18a3 3 0 0 0 6 0" />
                                                </svg>
                                            </div>
                                            <h3>Multiple Support Channels</h3>
                                            <p className='m-0'>I offer support through live chat, email, and FAQs to make sure clients can reach me easily.</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='work-card h-100'>
                                            <div className='mb-2'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-tool">
                                                    <path d="M14.7 6.3a4.5 4.5 0 0 1-6.4 6.4L3 21l-1-1 7.3-7.3a4.5 4.5 0 1 1 6.4-6.4z" />
                                                </svg>
                                            </div>
                                            <h3>Post-Launch Support</h3>
                                            <p className='m-0'>I continue to assist even after the project is delivered — helping with updates, improvements, and ongoing issues.</p>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
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
                                <p id='contact' className='text-border-desing font-Montserrat font-w6'>CONTACT</p>
                            </div>
                        </Col>
                        <Col md={{ span: 8, offset: 2 }}>
                            <Form onSubmit={handleSubmit}>
                                {success && <Alert variant="success" className='fade-message'>Your message has been sent successfully!</Alert>}

                                <Form.Group className="mb-5" controlId="formName">
                                    <Form.Control
                                        type="text"
                                        placeholder="ENTER YOUR NAME*"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        isInvalid={!!errors.name}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-5" controlId="formEmail">
                                    <Form.Control
                                        type="email"
                                        placeholder="ENTER YOUR EMAIL*"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        isInvalid={!!errors.email}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-5" controlId="formPhone">
                                    <Form.Control
                                        type="text"
                                        placeholder="PHONE NUMBER"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-5" controlId="formMessage">
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        placeholder="YOUR MESSAGE*"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        isInvalid={!!errors.message}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
                                </Form.Group>

                                <div className='text-center'>
                                    <button type="submit" className='submit-btn'>SUBMIT</button>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    )
}


