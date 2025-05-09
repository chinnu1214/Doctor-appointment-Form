import React, { useState } from 'react';
import AppointmentForm from './AppointmentForm';

export default function AppointmentFormContainer() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    gender: '',
    date: '',
    doctor: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">
          Doctor Appointment Form
        </h2>

        <AppointmentForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />

        {submitted && (
          <div className="mt-6 bg-indigo-50 p-4 rounded-xl text-gray-700">
            <h3 className="font-semibold text-indigo-700 mb-2">Submitted Details</h3>
            <p><strong>Patient Name:</strong> {formData.name}</p>
            <p><strong>Phone Number:</strong> {formData.phone}</p>
            <p><strong>Age:</strong> {formData.age}</p>
            <p><strong>Gender:</strong> {formData.gender}</p>
            <p><strong>Date:</strong> {formData.date}</p>
            <p><strong>Doctor Name:</strong> {formData.doctor}</p>
          </div>
        )}
      </div>
    </div>
  );
}
