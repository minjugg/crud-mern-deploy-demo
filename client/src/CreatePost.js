import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function CreatePost() {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleEvent = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:3001/create', post)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ width: '90%', margin: 'auto auto', textAlign: 'center' }}>
      <h1>Create a post</h1>
      <Form>
        <Form.Group>
          <Form.Control name="title" value={post.title} placeholder="title" onChange={handleChange} />
          <Form.Control name="description" value={post.description} placeholder="description" onChange={handleChange} />
        </Form.Group>
        <Button style={{ width: '100%' }} onClick={handleEvent}>
          Save
        </Button>
      </Form>
      <Button variant="outline-dark" style={{ width: '100%' }} onClick={() => navigate(-1)}>
        NEXT
      </Button>
    </div>
  );
}
