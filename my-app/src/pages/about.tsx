import React from 'react';
import Layout from '../Layout/Layout';

export default function About() {
  return (
    <Layout>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <h1 style={{ textAlign: 'center' }}>About Us</h1>
        <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
          Welcome to our project! We are two passionate developers, Davinder and Othneil,
          collaborating to build a modern and interactive web application using React and Next.js.
          Our goal is to design a clean, user-friendly interface while learning and applying the best
          web development practices.
        </p>

        <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
          This platform was created as part of our academic coursework in CPAN 144 - Advanced Front-End
          Development. We’re using this opportunity not only to showcase our technical skills but also
          to work as a team—sharing ideas, solving bugs, and building something we’re proud of.
        </p>

        <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
          Technologies used include React, Next.js, TypeScript, and modern styling approaches. As we
          continue building, we plan to integrate real-time APIs, custom backend routes, and dynamic
          pages to make this application more powerful and interactive.
        </p>

        <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
          Thank you for visiting our site. If you'd like to contact us or learn more, feel free to check
          out our <a href="/contact" style={{ color: '#0070f3' }}>Contact Page</a>.
        </p>
      </div>
    </Layout>
  );
}
