import Layout from '../Layout/Layout';
import React from 'react';

export default function Contact() {
  return (
    <Layout>
      <div style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'center', padding: '20px' }}>
        <h1>Contact Us</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert('Form submitted!');
          }}
        >
          {/* Name Field */}
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>
              Your Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              style={{ width: '100%', padding: '8px' }}
              required
            />
          </div>

          {/* Email Field */}
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>
              Email Address:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              style={{ width: '100%', padding: '8px' }}
              required
            />
          </div>

          {/* Phone Field */}
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="phone" style={{ display: 'block', marginBottom: '5px' }}>
              Phone Number:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              style={{ width: '100%', padding: '8px' }}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              padding: '10px 20px',
              backgroundColor: '#0070f3',
              color: '#fff',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
            }}
          >
            Send
          </button>
        </form>
      </div>
    </Layout>
  );
}
