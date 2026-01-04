import React from "react";

function Contact() {
  return (
    <div className="card p-4 shadow-sm">
      <h2>Contact</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Your name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="you@example.com"
          />
        </div>
        <button type="submit" className="btn btn-success">
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
