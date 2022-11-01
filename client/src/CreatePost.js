import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function CreatePost() {
  const navigate = useNavigate();

  return (
    <div style={{ width: '90%', margin: 'auto auto', textAlign: 'center' }}>
      <h1>Create a post</h1>
      <Form.Group>
        <Form.Control name="title" placeholder="title" />
        <Form.Control name="description" placeholder="description" />
      </Form.Group>
      <Button variant="outline-dark" style={{ width: '100%' }} onClick={() => navigate(-1)}>
        NEXT
      </Button>
    </div>
  );
}
