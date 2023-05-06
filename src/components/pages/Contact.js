import React from 'react';

const styles = {
  h1: {
    padding: 20,
  }, 
  form: {
    width: 700,
    padding: 10,
    lineHeight: 2.5,
    marginLeft: 30,
  }

};


export default function Contact() {
  return (
    <div>
      <h1 style={styles.h1}>Contact Me</h1>

      <form style={styles.form}>
            <div class="mb-3">
            <label class="form-label" for="name">Name:</label>
            <input class="form-control" id="name" type="text" placeholder="Name" data-sb-validations="required" />
            <div class="invalid-feedback" data-sb-feedback="name:required">Name is required.</div>

            <div class="mb-3">
            <label class="form-label" for="emailAddress">Email Address:</label>
            <input class="form-control" id="emailAddress" type="email" placeholder="Email Address" data-sb-validations="required, email" />
            <div class="invalid-feedback" data-sb-feedback="emailAddress:required">Email Address is required.</div>
            <div class="invalid-feedback" data-sb-feedback="emailAddress:email">Email Address Email is not valid.</div>
          </div>

          <div class="mb-3">
            <label class="form-label" for="message">Message:</label>
            <textarea class="form-control" id="message" type="text" placeholder="Message" style={{height: '10'}} data-sb-validations="required"></textarea>
            <div class="invalid-feedback" data-sb-feedback="message:required">Message is required.</div>
              </div>
              <div class="d-none" id="submitSuccessMessage">
          <div class="text-center mb-3">Form submission successful!</div>
        </div>

          <div class="d-none" id="submitErrorMessage">
            <div class="text-center text-danger mb-3">Error sending message!</div>
          </div>

          <div class="d-grid">
            <button class="btn btn-primary btn-lg" type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}