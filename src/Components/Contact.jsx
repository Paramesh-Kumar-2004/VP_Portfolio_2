import React, { useState } from 'react';
import { useSnackbar } from 'notistack';
import '../Styles/Contact.css';


function Contact() {

  const { enqueueSnackbar } = useSnackbar();
  const [isSuccess, setIsSuccess] = useState(true);

  const [formData, setFormData] = useState({
    UserName: '',
    UserEmail: '',
    Message: '',
  });

  const handleOnChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSuccess(false);

    const formDataToSend = new FormData();
    formDataToSend.append('UserName', formData.UserName);
    formDataToSend.append('UserEmail', formData.UserEmail);
    formDataToSend.append('Message', formData.Message);
    formDataToSend.append('access_key', '278353fd-92fe-4718-89bc-0881b4f39ebb');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formDataToSend,
    });
    const data = await response.json();

    setIsSuccess(true)

    if (data.success) {
      enqueueSnackbar("Mail Send Successfully", {
        variant: "success",
        autoHideDuration: 3000
      })
    }
    if (!data.success) {
      enqueueSnackbar("Something Went Wrong... Try Later", {
        variant: "error",
        autoHideDuration: 3000
      })
    }

    console.log(data);
    console.log('User Name :', formData.UserName);
    console.log('User Email :', formData.UserEmail);
    console.log('Message :', formData.Message);

    setFormData({
      UserName: '',
      UserEmail: '',
      Message: '',
    });
  };

  return (
    <div id="Contact">
      <h1 id="Title">Contact</h1>

      <form onSubmit={handleSubmit} id="form">
        <div id="UserName">
          <label className="label">Name :</label><br />
          <input
            type="text"
            name="UserName"
            placeholder="Enter Your Name"
            value={formData.UserName}
            onChange={handleOnChange}
            required
          />
        </div>

        <div id="UserEmail">
          <label className="label">Email :</label><br />
          <input
            name="UserEmail"
            type="email"
            placeholder="Enter Your Email"
            value={formData.UserEmail}
            onChange={handleOnChange}
            required
          />
        </div>

        <div id="UserMessage">
          <label className="label">Message :</label><br />
          <input
            name="Message"
            placeholder="Enter Your Message"
            onChange={handleOnChange}
            value={formData.Message}
            type="text"
            required
          />
        </div>

        <button type="submit" id="SendButton"
          style={{
            opacity: !isSuccess ? 0.5 : 1,
            cursor: !isSuccess ? "progress" : "pointer",
            background: !isSuccess ? "grey" : ""
          }}
        >
          {isSuccess ? "Send" : "Sending..."}
        </button>

      </form>
    </div>
  );
}

export default Contact;

