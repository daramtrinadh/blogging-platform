import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as Loader from 'react-loader-spinner'
import Navbar from "../Navbar";
import {
  BlogDetailContainer,
  BlogDetailTitle,
  BlogDetailAuthor,
  BlogDetailContent,
  BlogDetailDate,
  BlogDetailButton,
  BlogDetailButtonContainer,
  Form,
  Label,
  Input,
  Textarea,
  LoaderContainer,
} from "./styledComponents";

const apiConstraints = {
  initial: "initial",
  loading: "loading",
  success: "success",
  failed: "failed",
};

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [apiStatus, setApiStatus] = useState({
    status: apiConstraints.initial,
    data: null,
    errorMsg: null,
  });
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    summary: "",
    publicationDate: "",
  });

  const fetchBlog = async () => {
    try {
      setApiStatus((prevState) => ({
        ...prevState,
        status: apiConstraints.loading,
        errorMsg: null,
      }));

      const url = `https://667bb1df3c30891b86598b46.mockapi.io/blogs/${id}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch blog with id: ${id}`);
      }

      const data = await response.json();
      setApiStatus({
        status: apiConstraints.success,
        data: data,
        errorMsg: null,
      });

      setFormData({
        title: data.title,
        author: data.author,
        summary: data.summary,
        publicationDate: new Date(data.publicationDate * 1000)
          .toISOString()
          .substr(0, 10),
      });
    } catch (error) {
      setApiStatus({
        status: apiConstraints.failed,
        data: null,
        errorMsg: error.message,
      });
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [id]);

  const handleDelete = async () => {
    try {
      const url = `https://667bb1df3c30891b86598b46.mockapi.io/blogs/${id}`;
      const options = {
        method: "DELETE",
      };
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Failed to delete blog with id: ${id}`);
      }
      navigate("/");
    } catch (error) {
      console.error("Failed to delete the blog:", error);
    }
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `https://667bb1df3c30891b86598b46.mockapi.io/blogs/${id}`;
      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: formData.title,
          author: formData.author,
          summary: formData.summary,
          publicationDate: new Date(formData.publicationDate).getTime() / 1000,
        }),
      };
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Failed to edit blog with id: ${id}`);
      }
      setEditMode(false);
      fetchBlog();
    } catch (error) {
      console.error("Failed to edit the blog:", error);
    }
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    fetchBlog();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const renderSuccess = () => {
    const { data } = apiStatus;
    return (
      <BlogDetailContainer>
        {editMode ? (
          <Form onSubmit={handleSubmit}>
            <Label>
              Title:
              <Input
                type='text'
                name='title'
                value={formData.title}
                onChange={handleChange}
                required
              />
            </Label>
            <Label>
              Author:
              <Input
                type='text'
                name='author'
                value={formData.author}
                onChange={handleChange}
                required
              />
            </Label>
            <Label>
              Summary:
              <Textarea
                name='summary'
                value={formData.summary}
                onChange={handleChange}
                required
              />
            </Label>
            <Label>
              Publication Date:
              <Input
                type='date'
                name='publicationDate'
                value={formData.publicationDate}
                onChange={handleChange}
                required
              />
            </Label>
            <BlogDetailButton type='submit'>Save</BlogDetailButton>
            <BlogDetailButton type='button' onClick={handleCancelEdit}>
              Cancel
            </BlogDetailButton>
          </Form>
        ) : (
          <>
            <BlogDetailTitle>{data.title}</BlogDetailTitle>
            <BlogDetailAuthor>By {data.author}</BlogDetailAuthor>
            <BlogDetailContent>{data.summary}</BlogDetailContent>
            <BlogDetailDate>
              Published on{" "}
              {new Date(data.publicationDate * 1000).toLocaleDateString()}
            </BlogDetailDate>
            <BlogDetailButtonContainer>
              <BlogDetailButton onClick={handleEdit}>Edit</BlogDetailButton>
              <BlogDetailButton onClick={handleDelete}>Delete</BlogDetailButton>
            </BlogDetailButtonContainer>
          </>
        )}
      </BlogDetailContainer>
    );
  };

  const renderFailed = () => (
    <div>
      <h1>Failed to load blog details</h1>
      <p>{apiStatus.errorMsg}</p>
    </div>
  );

  const renderLoading = () => (
    <LoaderContainer>
      <Loader.TailSpin
        visible={true}
        height={80}
        width={80}
        color='skyblue'
        ariaLabel='tail-spin-loading'
      />
    </LoaderContainer>
  );

  const renderBlog = () => {
    const { status } = apiStatus;
    switch (status) {
      case apiConstraints.success:
        return renderSuccess();
      case apiConstraints.failed:
        return renderFailed();
      case apiConstraints.loading:
        return renderLoading();
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      {renderBlog()}
    </>
  );
};

export default BlogDetails;
