import { useState } from 'react';
import emailjs from 'emailjs-com';
import { Container, Form, Col, Row, Alert } from 'react-bootstrap';
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
            <section className='banner-about-section py-5 mb-5'>
                <Container>
                    <Row className='g-5'>
                        <Col lg={12}>
                            <div className='d-flex justify-content-center mb-5'>
                                <p className='text-border-desing font-Montserrat font-w6'>PROJECT</p>
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
                                    <p className='font-gray font-w6 font-Raleway py-3 m-0'>Online eCommerce store to sell products of different categories to local people.</p>
                                    <ul class="space-y-10 list-unstyled list-inline mb-0">
                                        <li class="list-inline-item border border-dark rounded-pill px-2 font-Montserrat font-w6 letter-spacing">HTML</li>
                                        <li class="list-inline-item border border-dark rounded-pill px-2 font-Montserrat font-w6 letter-spacing">CSS</li>
                                        <li class="list-inline-item border border-dark rounded-pill px-2 font-Montserrat font-w6 letter-spacing">REACT-JS</li>
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
                                    <p className='font-gray font-w6 font-Raleway py-3 m-0'>Online eCommerce store to sell products of different categories to local people.</p>
                                    <ul class="space-y-10 list-unstyled list-inline mb-0">
                                        <li class="list-inline-item border border-dark rounded-pill px-2 font-Montserrat font-w6 letter-spacing">HTML</li>
                                        <li class="list-inline-item border border-dark rounded-pill px-2 font-Montserrat font-w6 letter-spacing">CSS</li>
                                        <li class="list-inline-item border border-dark rounded-pill px-2 font-Montserrat font-w6 letter-spacing">HUBSPORT</li>
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
                                    <p className='font-gray font-w6 font-Raleway py-3 m-0'>Online eCommerce store to sell products of different categories to local people.</p>
                                    <ul class="space-y-10 list-unstyled list-inline mb-0">
                                        <li class="list-inline-item border border-dark rounded-pill px-2 font-Montserrat font-w6 letter-spacing">HTML</li>
                                        <li class="list-inline-item border border-dark rounded-pill px-2 font-Montserrat font-w6 letter-spacing">CSS</li>
                                        <li class="list-inline-item border border-dark rounded-pill px-2 font-Montserrat font-w6 letter-spacing">WORDPRESS</li>
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
                                    <p className='font-gray font-w6 font-Raleway py-3 m-0'>Online eCommerce store to sell products of different categories to local people.</p>
                                    <ul class="space-y-10 list-unstyled list-inline mb-0">
                                        <li class="list-inline-item border border-dark rounded-pill px-2 font-Montserrat font-w6 letter-spacing">HTML</li>
                                        <li class="list-inline-item border border-dark rounded-pill px-2 font-Montserrat font-w6 letter-spacing">CSS</li>
                                        <li class="list-inline-item border border-dark rounded-pill px-2 font-Montserrat font-w6 letter-spacing">BOOTSTRAP</li>
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
                                    <p className='font-gray font-w6 font-Raleway py-3 m-0'>Online eCommerce store to sell products of different categories to local people.</p>
                                    <ul class="space-y-10 list-unstyled list-inline mb-0">
                                        <li class="list-inline-item border border-dark rounded-pill px-2 font-Montserrat font-w6 letter-spacing">HTML</li>
                                        <li class="list-inline-item border border-dark rounded-pill px-2 font-Montserrat font-w6 letter-spacing">CSS</li>
                                        <li class="list-inline-item border border-dark rounded-pill px-2 font-Montserrat font-w6 letter-spacing">REACT-JS</li>
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
                                    <p className='font-gray font-w6 font-Raleway py-3 m-0'>Online eCommerce store to sell products of different categories to local people.</p>
                                    <ul class="space-y-10 list-unstyled list-inline mb-0">
                                        <li class="list-inline-item border border-dark rounded-pill px-2 font-Montserrat font-w6 letter-spacing">HTML</li>
                                        <li class="list-inline-item border border-dark rounded-pill px-2 font-Montserrat font-w6 letter-spacing">CSS</li>
                                        <li class="list-inline-item border border-dark rounded-pill px-2 font-Montserrat font-w6 letter-spacing">BOOTSTRAP</li>
                                    </ul>
                                </div>
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
                                <p className='text-border-desing font-Montserrat font-w6'>CONTACT</p>
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


