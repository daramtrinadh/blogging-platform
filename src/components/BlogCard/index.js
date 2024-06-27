import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin: 20px;
  padding: 20px;
  max-width: 450px;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.2);
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Title = styled.h2`
  font-size: 1.5em;
  color: #2d8cf0;
  margin-bottom: 10px;
  transition: color 0.2s;

  ${Card}:hover & {
    color: #1765c0;
  }
`;

const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  transition: color 0.2s;

  ${Card}:hover & {
    color: #5b4fc4;
  }
`;

const ProfileIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 1.2em;
  margin-right: 10px;
  color: #ffffff;
  transition: background-color 0.2s;

  ${Card}:hover & {
    opacity: 0.8;
  }
`;

const AuthorName = styled.p`
  font-size: 1.1em;
  margin: 0;
`;

const Date = styled.p`
  font-size: 0.9em;
  color: #ffa726;
  transition: color 0.2s;

  ${Card}:hover & {
    color: #e08e25;
  }
`;

const ReadMoreButton = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background-color: #2d8cf0;
  color: #ffffff;
  border-radius: 5px;
  text-align: center;
  margin-top: 10px;
  text-decoration: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1765c0;
  }
`;

const getColorForLetter = (letter) => {
  const colors = {
    A: "#ff6b6b",
    B: "#6bffb6",
    C: "#6bb6ff",
    D: "#ffb66b",
    E: "#b66bff",
  };
  return colors[letter.toUpperCase()] || "#6c5ce7"; // default color
};

const BlogCard = ({ blog }) => {
  const formatDate = (timestamp) => {
    const date = new window.Date(timestamp * 1000);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const firstLetter = blog.author.charAt(0).toUpperCase();
  const avatarColor = getColorForLetter(firstLetter);

  return (
    <Card>
      <Link to={`/blog/${blog.id}`}>
        <AuthorContainer>
          <ProfileIcon style={{ backgroundColor: avatarColor }}>
            {firstLetter}
          </ProfileIcon>
          <AuthorName>{blog.author}</AuthorName>
        </AuthorContainer>
        <Title>{blog.title}</Title>
        <Date>Published on {formatDate(blog.publicationDate)}</Date>
        <ReadMoreButton to={`/blog/${blog.id}`}>Read More</ReadMoreButton>
      </Link>
    </Card>
  );
};

export default BlogCard;
