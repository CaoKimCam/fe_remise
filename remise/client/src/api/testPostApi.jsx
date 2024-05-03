import React, { useState } from 'react';

const App = () => {
  // State to hold JSON data
  const [jsonData, setJsonData] = useState({
    key1: 'value1',
    key2: 'value2'
  });

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/testpostapi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
      });

      if (response.ok) {
        console.log('Data successfully posted!');
      } else {
        console.error('Failed to post data:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Function to handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setJsonData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div>
      <h1>Post JSON Data</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Key 1:
          <input
            type="text"
            name="key1"
            value={jsonData.key1}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Key 2:
          <input
            type="text"
            name="key2"
            value={jsonData.key2}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
