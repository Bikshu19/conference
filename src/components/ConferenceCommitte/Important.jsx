import React from 'react';
import { Container, Alert, ListGroup } from 'react-bootstrap';

const ImportantNote = () => {
  return (
    <Container className="my-5">
      <Alert
        variant="light"
        className="shadow-lg border-0 p-4"
        style={{
          background: 'linear-gradient(135deg, #fff4e6 0%, #ffe0b3 100%)',
          borderRadius: '12px'
        }}
      >
        <h3 className="text-primary fw-bold mb-3">
          <i className="bi bi-exclamation-triangle-fill me-2"></i>
          Important Note
        </h3>
        <ListGroup variant="flush">
          <ListGroup.Item className="bg-transparent border-0">
            📌 The conference will be conducted in <strong>Telugu medium</strong> with an option of language interpretation/translation.
          </ListGroup.Item>
          <ListGroup.Item className="bg-transparent border-0">
            🌐 Interested authors may submit their papers in <strong>English</strong>. The editorial team will translate these papers into Telugu.
          </ListGroup.Item>
          <ListGroup.Item className="bg-transparent border-0">
            🗣️ During the conference, translators will be available, and presentations may be delivered in English with spontaneous translation into Telugu for participants.
          </ListGroup.Item>
          <ListGroup.Item className="bg-transparent border-0">
            🤝 This option is being provided to encourage wider participation. Therefore, we request all of you to submit your valuable papers.
          </ListGroup.Item>
        </ListGroup>
      </Alert>
    </Container>
  );
};

export default ImportantNote;
