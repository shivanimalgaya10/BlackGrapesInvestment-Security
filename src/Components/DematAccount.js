import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import emailjs from 'emailjs-com';

const DematAccountModal = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    country: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(formData);
    alert(`Name: ${formData.name}, Email: ${formData.email}, Mobile: ${formData.mobile}, Country: ${formData.country}`);
    handleClose();
  };

  const sendEmail = (formData) => {
    const templateParams = {
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      country: formData.country,
    };

    emailjs.send('service_ayksrjw', 'template_p0rr4aa', templateParams, 'HEZjTQL1GfjkkeG9f')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((error) => {
        console.log('FAILED...', error);
      });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Open Demat Account</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formMobile">
            <Form.Label>Mobile</Form.Label>
            <Form.Control type="text" name="mobile" value={formData.mobile} onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCountry">
            <Form.Label>Country</Form.Label>
            <Form.Control type="text" name="country" value={formData.country} onChange={handleChange} required />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default DematAccountModal;
