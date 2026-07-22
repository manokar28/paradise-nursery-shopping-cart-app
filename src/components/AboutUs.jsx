import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-us-container" style={{ padding: '30px', maxWidth: '800px', margin: '20px auto', backgroundColor: 'rgba(255,255,255,0.95)', borderRadius: '12px', color: '#2d3748', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
      <h2 style={{ color: '#2e7d32', marginBottom: '15px' }}>Our Mission</h2>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.7', margin: '0 0 20px 0' }}>
        Welcome to Paradise Nursery, the premier online destination for premium curated houseplants! Our core mission is to bring life, crisp clean air, and natural serenity straight to your urban living spaces. We meticulously source, select, and nurture each plant variety to guarantee absolute health, vigor, and aesthetic perfection before they arrive safely at your doorstep.
      </p>
      <h3 style={{ color: '#2e7d32', marginBottom: '10px' }}>Our Services</h3>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.7', margin: 0 }}>
        We specialize in offering expert botanical pairings, tailored plant care resources, and premium specimen groupings categorized by therapeutic benefits. Whether you are an advanced horticulturist or looking to buy your very first green roommate, our comprehensive collection meets all home interior layouts and lighting conditions.
      </p>
    </div>
  );
};

export default AboutUs;
