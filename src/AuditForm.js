import React, { useState } from 'react';

const AuditForm = () => {
  const [score, setScore] = useState(0);
  const [comments, setComments] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:5000/audit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ score, comments }),
    });
    const data = await response.json();
    if (response.ok) {
      alert('Audit submitted successfully');
    } else {
      alert('Error submitting audit');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Score:</label>
        <input
          type="number"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />
      </div>
      <div>
        <label>Comments:</label>
        <textarea
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
      </div>
      <button type="submit">Submit Audit</button>
    </form>
  );
};

export default AuditForm;
