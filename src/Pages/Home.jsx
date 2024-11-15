import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const googleApiKey = 'AIzaSyDtSm8WyC-AfQXxU42ilgHc6dEfdSRH3MA'; // Your Google API Key
  const googleCseId = 'a3c0f792f89d349f6'; // Your Custom Search Engine ID

  const cleanResponse = (text) => {
    // Remove unwanted characters like @mentions, dates, etc.
    return text
      .replace(/@\w+/g, '') // Remove @mentions
      .replace(/\d{1,2}\/\d{1,2}\/\d{4}/g, '') // Remove date in dd/mm/yyyy format
      .replace(/\d{4}-\d{2}-\d{2}/g, '') // Remove date in yyyy-mm-dd format
      .replace(/[^\w\s.,?!]/g, '') // Remove non-word characters (except some punctuation)
      .trim(); // Trim any leading or trailing spaces
  };

  const handleAskQuestion = async () => {
    if (question.trim()) {
      setLoading(true);

      // Google Custom Search API request for text-based answer
      const textResponse = await fetch(
        `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(question)}&key=${googleApiKey}&cx=${googleCseId}`
      );
      const textData = await textResponse.json();

      // Concatenate the descriptions from multiple results (if available) and clean up the text
      const answers = textData.items?.map(item => cleanResponse(item.snippet)).join(' ') || "No relevant answer found.";
      setResponse(answers);

      // Google Custom Search API request for image search
      const imageResponse = await fetch(
        `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(question)}&searchType=image&key=${googleApiKey}&cx=${googleCseId}`
      );
      const imageData = await imageResponse.json();
      const imageUrl = imageData.items && imageData.items[0]?.link ? imageData.items[0].link : null;
      setImage(imageUrl);

      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4"></h2>

      {/* Main Chat Screen Container with Border */}
      <div
        className="chat-screen border rounded p-4 mb-3 d-flex flex-column"
        style={{
          height: '500px',
          overflowY: 'auto',
          backgroundColor: '#f4f4f4',
          border: '2px solid #ccc', // Main screen border
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Light shadow for 3D effect
        }}
      >
        {/* Inner Screen with Shadow to Create 3D Look */}
        <div
          className="inner-screen"
          style={{
            backgroundColor: 'white', // Background of inner screen
            borderRadius: '10px', // Rounded corners
            padding: '20px', // Padding for the inner screen
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)', // Stronger shadow for 3D effect
            height: '100%', // Ensure the inner screen fills up the main screen
            overflowY: 'auto', // Allow scrolling if content overflows
          }}
        >
          {/* Result Section - Display image first, then answer text */}
          {loading ? (
            <div className="text-center">Loading...</div>
          ) : (
            <>
              {/* Image Section - Display image first */}
              {image && (
                <div className="text-center mb-3">
                  <img
                    src={image}
                    alt="Related Image"
                    className="img-fluid"
                    style={{ maxWidth: '100%', maxHeight: '300px' }}
                  />
                </div>
              )}

              {/* Answer Section */}
              {response && (
                <div className="alert alert-info">
                  <strong>Answer:</strong> {response}
                </div>
              )}
            </>
          )}
        </div>

        {/* Spacer to push input to the bottom */}
        <div className="mt-auto" />

        <br />

        {/* Chat Input Section at Bottom */}
        <div className="d-flex align-items-center">
          <textarea
            className="form-control me-2"
            rows="1"
            placeholder="Type your question here..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            style={{ resize: 'none', height: '38px' }} // Set height equal to button height
          />
          <button
            className="btn btn-primary"
            onClick={handleAskQuestion}
            style={{ marginLeft: '10px', height: '38px' }} // Set height equal to textarea height
          >
            Ask
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
