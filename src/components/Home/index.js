import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import * as Loader from "react-loader-spinner";
import BlogCard from "../BlogCard";
import styled from "styled-components";

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px; /* Adjust height as needed */
`;

const BlogsHeader = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const EmptyMessage = styled.p`
  text-align: center;
  color: #888; /* Adjust color as needed */
`;

const CreateImage = styled.img`
  display: block;
  margin: auto;
  max-width: 100%;
  height: auto;
`;

const apiConstraints = {
  initial: "initial",
  loading: "loading",
  success: "success",
  failed: "failed",
};

const ListView=styled.ul`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
`

const Home = () => {
  const [apiStatus, setStatus] = useState({
    status: apiConstraints.initial,
    data: null,
    errorMsg: null,
  });

  useEffect(() => {
    const fetchBlogs = async () => {
      setStatus((prevState) => ({
        ...prevState,
        status: apiConstraints.loading,
        data: null,
        errorMsg: null,
      }));
      const url = "https://667bb1df3c30891b86598b46.mockapi.io/blogs";
      const options = {
        method: "GET",
      };
      try {
        const result = await fetch(url, options);
        const data = await result.json();
        setStatus((prevState) => ({
          ...prevState,
          status: apiConstraints.success,
          data: data,
          errorMsg: null,
        }));
      } catch (error) {
        setStatus((prevState) => ({
          ...prevState,
          status: apiConstraints.failed,
          data: null,
          errorMsg: error,
        }));
      }
    };
    fetchBlogs();
  }, []);

  const renderSuccess = () => {
    const { data } = apiStatus;

    if (!data || data.length === 0) {
      return (
        <>
          <EmptyMessage>
            No blogs found. Go ahead and <Link to='/create-blog'>create</Link>{" "}
            some blogs!
          </EmptyMessage>
          <CreateImage
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTollJikgL3xQOI88BeDcBGd5uGyJ2aTHFI6g&s'
            alt='create'
          />
        </>
      );
    }

    return (
      <ListView>
        {data.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </ListView>
    );
  };

  const renderFailed = () => (
    <div>
      <h1>Failed to load blogs</h1>
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

  const renderBlogs = () => {
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
      <BlogsHeader>Your Blogs</BlogsHeader>
      {renderBlogs()}
    </>
  );
};

export default Home;
