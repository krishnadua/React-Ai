import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';

function Contact() {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="col-12 col-md-10 col-lg-8 col-xl-6 form-container p-4">
        <h2 className="form-title text-center mb-4">Contact Us</h2>
        <form>
          {/* Name Input */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
          </div>

          {/* Email Input */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
          </div>

          {/* Message Textarea */}
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows="4" placeholder="Enter your message" required></textarea>
          </div>

          {/* Radio Buttons */}
          <fieldset className="mb-3">
            <legend className="form-label">Contact Preference</legend>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="contactPreference" id="contactPhone" value="phone" />
              <label className="form-check-label" htmlFor="contactPhone">Phone</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="contactPreference" id="contactEmail" value="email" defaultChecked />
              <label className="form-check-label" htmlFor="contactEmail">Email</label>
            </div>
          </fieldset>

          {/* Checkbox */}
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="gridCheck1" />
            <label className="form-check-label" htmlFor="gridCheck1">
              Follow The <a href="https://www.linkedin.com/in/krishna-dua-807771267/?originalSubdomain=in">Profile</a>
            </label>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
