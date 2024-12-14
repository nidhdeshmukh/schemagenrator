import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

const SchemaGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [schema, setSchema] = useState(null);
  const [error, setError] = useState(null);

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleGenerateSchema = async () => {
    try {
      const response = await axios.post('/api/generate-schema', { prompt });
      setSchema(response.data.schema);
      setError(null);
    } catch (err) {
      setError('Error generating schema. Please try again.');
    }
  };

  return (
    <div>
      <h1>Schema Generator</h1>
      <Form>
        <Form.Group controlId="formPrompt">
          <Form.Label>Enter your prompt</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={prompt}
            onChange={handlePromptChange}
            placeholder="Describe your application requirements..."
          />
        </Form.Group>
        <Button variant="primary" onClick={handleGenerateSchema}>Generate Schema</Button>
      </Form>
      {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
      {schema && (
        <pre className="mt-3">
          {JSON.stringify(schema, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default SchemaGenerator;
