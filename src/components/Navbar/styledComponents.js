import styled from "styled-components";
import { Link } from "react-router-dom";

export const LINK = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const NavbarDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: linear-gradient(90deg, #2d8cf0 0%, #6c5ce7 100%);
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const CreateDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const Logo = styled.div`
  margin: 10px;

  h1 {
    margin: 0;
    font-size: 1.5em;
    color: #ffd700;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    margin: 20px 0;
  }
`;

export const CreateButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  background-color: #fff;
  color: #6c5ce7;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  svg {
    margin-right: 10px;
    font-size: 1.2em;
    color: #6c5ce7;
  }

  h1 {
    margin: 0;
    font-size: 1em;
    font-family: "Pacifico", cursive;
  }

  &:hover {
    background-color: #f1c40f;
    color: #fff;
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.1);

    svg {
      color: #fff;
    }
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;
