import React, { useState } from "react";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import {
  CreateBlogContainer,
  Form,
  FormGroup,
  Label,
  Input,
  Textarea,
  Button,
} from "./styledComponents";

const CreateBlog = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    summary: "",
    publicationDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `https://667bb1df3c30891b86598b46.mockapi.io/blogs`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        publicationDate: new Date(formData.publicationDate).getTime() / 1000,
      }),
    };
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error("Failed to create the blog");
      }

      setFormData({
        title: "",
        author: "",
        summary: "",
        publicationDate: "",
      });
      
      navigate("/");
      alert("Blog created successfully!"); 
    } catch (error) {
      console.error("Failed to create the blog:", error);
      alert("Failed to create the blog. Please try again."); 
    }
  };

  return (
    <>
      <Navbar />
      <CreateBlogContainer>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor='title'>Title:</Label>
            <Input
              type='text'
              name='title'
              value={formData.title}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor='author'>Author:</Label>
            <Input
              type='text'
              name='author'
              value={formData.author}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor='summary'>Summary:</Label>
            <Textarea
              name='summary'
              value={formData.summary}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor='publicationDate'>Publication Date:</Label>
            <Input
              type='date'
              name='publicationDate'
              value={formData.publicationDate}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <Button type='submit'>Create Blog</Button>
        </Form>
      </CreateBlogContainer>
    </>
  );
};

export default CreateBlog;
