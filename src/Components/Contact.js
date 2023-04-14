import React, { useState } from "react";
import axios from 'axios';

const Contact = () => {
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputPhone, setInputPhone] = useState('');
  const [inputQuestion, setQuestion] = useState('');

  const handleSummit = () => {
  
    if (!inputName || !inputEmail || !inputPhone || !inputQuestion) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    axios.post('http://127.0.0.1:8000/api/question', {
      name : inputName,
      email: inputEmail,
      phone : inputPhone,
      question: inputQuestion
    })
      .then(response => {
        alert('Gracias por su opinion.');
        setInputName('');
        setInputEmail('');
        setInputPhone('');
        setQuestion('');
      })
      .catch(error => {
        console.error(error);
      });

  };

  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">¿Tienes preguntas en mente?</h1>
      <h1 className="primary-heading">Escribenos</h1>
      <div className="contact-form-container">
        <input name="name" type="text" placeholder="nombre" value={inputName} onChange={(e) => setInputName(e.target.value)} />
      </div>
      <div className="contact-form-container">
        <input name="phone" type="text" placeholder="numero telefonico" value={inputPhone} onChange={(e) => setInputPhone(e.target.value)} />
      </div>
      <div className="contact-form-container">
        <input name="email" type="text" placeholder="correo@gmail.com" value={inputEmail} onChange={(e) => setInputEmail(e.target.value)}  />
      </div>
      <div className="contact-form-container">
        <input name="question" type="text" placeholder="Tu opinion o pregunta" value={inputQuestion} onChange={(e) => setQuestion(e.target.value)} />
      </div>
      <button className="secondary-button" onClick={() => handleSummit()}>Submit</button>
    </div>
  );
};

export default Contact;
