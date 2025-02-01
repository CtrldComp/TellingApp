import React, { useState } from 'react';

const FeedbackForm = () => {
  const [feedbackType, setFeedbackType] = useState('complaint');
  const [message, setMessage] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ feedbackType, message, file });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Submit Your Feedback</h2>
      <label className="block mb-2">
        Type:
        <select
          value={feedbackType}
          onChange={(e) => setFeedbackType(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded"
        >
          <option value="complaint">Complaint</option>
          <option value="suggestion">Suggestion</option>
          <option value="praise">Praise</option>
        </select>
      </label>
      <label className="block mb-2">
        Message:
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="block w-full p-2 border border-gray-300 rounded"
        />
      </label>
      <label className="block mb-2">
        Attach File:
        <input
          type="file"
          onChange={(e) => {
            if (e.target.files) {
              setFile(e.target.files[0]);
            }
          }}
          className="block w-full p-2 border border-gray-300 rounded"
        />
      </label>
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default FeedbackForm;
