import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const validateInput = (e) => {
        let checkname = true;
        let checkemail = true;
        let checkmessage = true;
        if(e) {
            const whichinput = e.target.name;
            checkname = whichinput === 'name';
            checkemail = whichinput === 'email';
            checkmessage = whichinput === 'message';
        }
        if(checkname && !(name.trim())) {
            setErrorMessage('Please provide a name.');
            return false;
        }
        if(checkemail && !validateEmail(email.trim())) {
            setErrorMessage('Invalid email format.');
            return false;
        }
        if(checkmessage && !(message.trim())) {
            setErrorMessage('No message entered.');
            return false;
        }
        return true;
    };

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const inputName = e.target.name;
        const inputValue = e.target.value;

        if(inputName === 'user_name') {
            setName(inputValue);
        } else if(inputName === 'user_email') {
            setEmail(inputValue);
        } else if(inputName === 'message') {
            setMessage(inputValue);
        } 

        setErrorMessage('');
    };

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        if(validateInput()) {
            emailjs.sendForm('service_1t1o9hj', 'template_vvv0pte', form.current, 'M6nC19kdFxTxGOlW6')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            }).then(()=>{
                setName('');
                setEmail('');
                setMessage('');
                alert('Message sent. Thanks!');
            });
        }
    };

    return (
        <div className="center-content">
            <div id="contact-area">
                <div className="form-header">
                    <h2>Contact Me</h2>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <label htmlFor="user_name">Name:</label>
                    <input
                        value={name}
                        id="user_name"
                        name="user_name"
                        onChange={handleInputChange}
                        onBlur={validateInput}
                        type="text"
                    />
                    <label htmlFor="user_email">Email:</label>
                    <input
                        value={email}
                        id="user_email"
                        name="user_email"
                        onChange={handleInputChange}
                        onBlur={validateInput}
                        type="text"
                    />
                    <label htmlFor="message">Message:</label>
                    <textarea
                        value={message}
                        id="message"
                        name="message"
                        onChange={handleInputChange}
                        onBlur={validateInput}
                    />
                    <button>
                        Submit
                    </button>
                </form>
                <p>{errorMessage}</p>
            </div>
        </div>
    );
}