import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers'

function ContactForm() {
  const [errorMessage, setErrorMessage] = useState('');

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const { name, email, message } = formState;

  // validate data was entered into form
  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }

  }

  // submit button (currently non-functioning)
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (

    <section>
      <h2>Contact me</h2>
      {/* contact me form */}
      <form id='contact-form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
        </div>
        <div>
          <label htmlFor="email">Email address: </label>
          <input type="email" defaultValue={email} name="email" onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="message">Message: </label>
          <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">SUBMIT</button>
      </form>
    </section>
  );

}

export default ContactForm;