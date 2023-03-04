import React, { useState } from 'react';

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

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(validateInput()) {
            //Future Development:
            //Package inputs and ship them off wherever
        }
    };

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const inputName = e.target.name;
        const inputValue = e.target.value;

        if(inputName === 'name') {
            setName(inputValue);
        } else if(inputName === 'email') {
            setEmail(inputValue);
        } else if(inputName === 'message') {
            setMessage(inputValue);
        } 

        setErrorMessage('');
    };

    return (
        <div className="center-content">
            <div id="contact-area">
                <div className="form-header">
                    <h2>Contact Me</h2>
                </div>
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="contact-name">Name:</label>
                    <input
                        value={name}
                        id="contact-name"
                        name="name"
                        onChange={handleInputChange}
                        onBlur={validateInput}
                        type="text"
                    />
                    <label htmlFor="contact-email">Email:</label>
                    <input
                        value={email}
                        id="contact-email"
                        name="email"
                        onChange={handleInputChange}
                        onBlur={validateInput}
                        type="text"
                    />
                    <label htmlFor="contact-message">Message:</label>
                    <textarea
                        value={message}
                        id="contact-message"
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