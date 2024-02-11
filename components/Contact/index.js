

import React from 'react';

export default function Contact() {
  const sendEmail = () => {
    const form = document.getElementById('contactForm');
    const formData = new FormData(form);

    fetch('/send-email', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          alert('Email sent successfully!');
          form.reset(); // Clear the form after successful submission
        } else {
          throw new Error('Email sending failed.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Failed to send email. Please try again later.');
      });
  };

  return (
    <div className="py-2 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl font-extrabold text-center text-gray-900">
        Contact Us
      </h2>
      <br />
      <br />
      <p className="mb-4 font-light text-left text-gray-500 sm:text-xl">
        Leave all your worries to us. Let tickboxes handle your work.
      </p>
      <form id="contactForm">
	  <div className="flex flex-row"> 
					<div className="w-1/2 pr-2 "> 
						<label htmlFor="firstName"
							className="block my-2 text-left 
										text-sm font-medium text-gray-900"> 
							First Name 
						</label> 
						<input type="text"
							className="shadow-sm bg-gray-50 border 
										border-gray-300 text-gray-900 
										text-sm rounded-lg block w-full p-2.5"
							placeholder="Enter First Name"
							required/> 
					</div> 
					<div className="w-1/2 pl-2"> 
						<label htmlFor="firstName"
							className="block my-2 text-left text-sm 
										font-medium text-gray-900"> 
							Last Name 
						</label> 
						<input type="text"
							className="shadow-sm bg-gray-50 border 
										border-gray-300 text-gray-900 
										text-sm rounded-lg block w-full p-2.5"
							placeholder="Enter Last Name"/> 
					</div> 
				</div> 
				<div> 
					<label htmlFor="email"
						className="block my-2 text-left text-sm 
									font-medium text-gray-900"> 
						Your email 
					</label> 
					<input type="email"
						className="shadow-sm bg-gray-50 border 
									border-gray-300 text-gray-900 
									text-sm rounded-lg block w-full p-2.5"
						placeholder="abc@gmail.com"
						required /> 
				</div> 
				<div> 
					<label htmlFor="subject"
						className="block my-2 text-left 
									text-sm font-medium text-gray-900"> 
						Subject 
					</label> 
					<input type="text"
						className="block p-3 w-full text-sm 
									text-gray-900 bg-gray-50 rounded-lg 
									border border-gray-300 shadow-sm "
						placeholder="Which service do you need?"
						required /> 
				</div> 
				<div > 
					<label htmlFor="message"
						className="block my-2 text-left 
									text-sm font-medium text-gray-900 "> 
						Message.  
					</label> 
					<textarea rows="6"
							className="block p-2.5 w-full text-sm 
										text-gray-900 bg-gray-50 rounded-lg 
										shadow-sm border border-gray-300 "
							placeholder="Tell us your needs."/> 
				</div> 

        <button
          type="button"
          onClick={sendEmail}
          className="mt-4 p-2 float-center text-white rounded-lg border-black-600 shadow-sm bg-gray-400 hover:scale-105"
        >
          Send message
        </button>
      </form>
    </div>
  );
}
