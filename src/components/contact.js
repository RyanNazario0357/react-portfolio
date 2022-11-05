import React, { useState } from 'react';
import { validateEmail } from '../utils/validateEmail'

const titleStyle = {
  backgroundColor: 'red',
  padding: '20px'
}

const linkStyle = {
  color: 'red',
}

const padding = {
  padding: '10px'
}

const errorStyle = {
  backgroundColor: 'black',
  color: 'red'
}
function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' })

    const [errorMessage, setErrorMessage] = useState('')

    const { name, email, message } = formState;

    function handleChange(e) {
      if (e.target.name === 'email') {
        const validate = validateEmail(e.target.value);

        if (!validate) {
          setErrorMessage('Please enter a valid email.');
        } else {
          setErrorMessage('')
        }
      } else if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`)
      } else setErrorMessage();

      if (!errorMessage) {
        setFormState({ ...formState, [e.target.name]: e.target.value })
      }
    }

    function handleSubmit(e) {
      e.preventDefault();
    }
