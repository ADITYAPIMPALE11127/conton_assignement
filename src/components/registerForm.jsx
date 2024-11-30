import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { db } from '../firebase'; // Adjust the path based on your folder structure
import { collection, addDoc } from 'firebase/firestore'; // Import Firestore functions
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import './IEERegistration.css';

const IEERegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    branch: '',
    semester: '',
    membershipYear: new Date(),
    membershipNumber: '',
    email: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    const nameRegex = /^[a-zA-Z ]{8,30}$/; // Name must be 8-30 characters long, letters and spaces only
    const semesterRegex = /^[0-9]{1,2}$/; // Semester should be a number (1-12)
    const membershipNumberRegex = /^[A-Za-z0-9]+$/; // Membership number should be alphanumeric
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Basic email format

    // Validate name
    if (!formData.name || !nameRegex.test(formData.name)) {
      formErrors.name = 'Name must be between 8 and 30 characters';
    }

    // Validate branch
    if (!formData.branch) {
      formErrors.branch = 'Branch is required';
    }

    // Validate semester
    if (!formData.semester || !semesterRegex.test(formData.semester)) {
      formErrors.semester = 'Semester should be a number between 1 and 12';
    }

    // Validate membership number
    if (!formData.membershipNumber || !membershipNumberRegex.test(formData.membershipNumber)) {
      formErrors.membershipNumber = 'Membership number should be alphanumeric';
    }

    // Validate email
    if (!formData.email || !emailRegex.test(formData.email)) {
      formErrors.email = 'Enter a valid email address';
    }

    // Validate membership year
    if (!formData.membershipYear) {
      formErrors.membershipYear = 'Membership year is required';
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, membershipYear: date });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please correct the errors before submitting'); // Show error toast
      return;
    }

    try {
      // Add a new document with a generated ID
      const docRef = await addDoc(collection(db, 'registrations'), formData);
      console.log('Document written with ID: ', docRef.id);
      toast.success('Registration successful!'); // Show success toast

      // Reset form data
      setFormData({
        name: '',
        branch: '',
        semester: '',
        membershipYear: new Date(),
        membershipNumber: '',
        email: '',
      });
    } catch (error) {
      console.error('Error saving data:', error);
      toast.error('Failed to register. Please try again.'); // Show error toast
    }
  };

  return (
    <Container style={{ marginTop: 40 }} className="mt-5">
      <h2 className="text-center mb-4">IEE Registration</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            isInvalid={errors.name}
            required
          />
          <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Branch</Form.Label>
          <Form.Control
            type="text"
            name="branch"
            placeholder="Enter your branch"
            value={formData.branch}
            onChange={handleChange}
            isInvalid={errors.branch}
            required
          />
          <Form.Control.Feedback type="invalid">{errors.branch}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Semester</Form.Label>
          <Form.Control
            type="text"
            name="semester"
            placeholder="Enter your semester"
            value={formData.semester}
            onChange={handleChange}
            isInvalid={errors.semester}
            required
          />
          <Form.Control.Feedback type="invalid">{errors.semester}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Year of Membership</Form.Label>
          <DatePicker
            selected={formData.membershipYear}
            onChange={handleDateChange}
            dateFormat="yyyy-MM-dd"
            className="form-control"
            isInvalid={errors.membershipYear}
          />
          {errors.membershipYear && <div className="invalid-feedback">{errors.membershipYear}</div>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Membership Number</Form.Label>
          <Form.Control
            type="text"
            name="membershipNumber"
            placeholder="Enter membership number"
            value={formData.membershipNumber}
            onChange={handleChange}
            isInvalid={errors.membershipNumber}
            required
          />
          <Form.Control.Feedback type="invalid">{errors.membershipNumber}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            isInvalid={errors.email}
            required
          />
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <ToastContainer /> {/* Add ToastContainer to render toasts */}
    </Container>
  );
};

export default IEERegistration;
