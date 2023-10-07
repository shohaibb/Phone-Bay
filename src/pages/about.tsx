import React from 'react';

export function About() {

  const headerStyle: React.CSSProperties = {
    fontFamily: '"Jazz LET", Verdana, sans-serif',
    textAlign: 'center',
    padding: '50px',
    fontSize: '2em',
    borderBottom: '2px solid black'
  };

  const contentStyle: React.CSSProperties = {
    fontFamily: '"Jazz LET", Arial, sans-serif',
    margin: '40px',
    lineHeight: '1.8',
    fontSize: '1.1em',
  };

  const subheaderStyle: React.CSSProperties = {
    fontSize: '1.3em',
    marginBottom: '20px',
    fontWeight: 'bold'
  };

  const centeredBold: React.CSSProperties = {
    textAlign: 'center',
    fontWeight: 'bold'
  };

  return (
    <div>
      <h1 style={headerStyle}>📱 About Phone Bay 📱</h1>
      <div style={contentStyle}>
        <div style={subheaderStyle}>🔍 Who We Are</div>
        <p>
          Welcome to Phone Bay, your number one source for all things mobile. We're dedicated to providing the very best smartphones, with a focus on quality, customer service, and uniqueness.
        </p>
        
        <div style={subheaderStyle}>🚀 Our Journey</div>
        <p>
          Founded in 2021, Phone Bay has come a long way from its humble beginnings. We now serve customers all over the world and are thrilled to be a part of the ever-changing, wing of the tech industry.
        </p>

        <div style={subheaderStyle}>✅ Our Promise</div>
        <p>
          We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
        </p>

        <div style={subheaderStyle}>📞 Contact Us</div>
        <p>
        We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out. You can contact us at <a href="mailto:support@phonebay.com">support@phonebay.com</a>.
        </p>

      </div>
      

      <p style={centeredBold}>
         P.S - Don't actually try to buy anything or send something to the email; this is just a React/TypeScript project I made to work on my skills more - Shohaib Mohammad
      </p>
    </div>
  );
}
