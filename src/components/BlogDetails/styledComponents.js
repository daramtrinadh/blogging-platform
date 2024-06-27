import styled from "styled-components";

// export const BlogDetailContainer = styled.div`
//   background-color: #fff;
//   border-radius: 8px;
//   box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
//   padding: 20px;
//   max-width: 600px;
//   margin: 20px auto;
// `;

export const BlogDetailContainer = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  padding: 20px;
  max-width: 800px;
`;

export const BlogDetailTitle = styled.h1`
  font-size: 2.5em;
  color: #2d8cf0;
  margin-bottom: 20px;
  text-align: center;
`;

export const BlogDetailAuthor = styled.p`
  font-size: 1.2em;
  color: #6c5ce7;
  margin-bottom: 20px;
  text-align: center;
`;

export const BlogDetailContent = styled.div`
  font-size: 1.1em;
  color: #333333;
  line-height: 1.6;
  margin-bottom: 20px;
  text-align:center;
`;

export const BlogDetailDate = styled.p`
  font-size: 0.9em;
  color: #ffa726;
  text-align: center;
  margin-bottom: 30px;
`;

export const BlogDetailButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const BlogDetailButton = styled.button`
   padding: 10px 20px;
   font-size: 1em;
   color: #ffffff;
   background-color: #2d8cf0;
   border: none;
   border-radius: 5px;
   cursor: pointer;
   transition: background-color 0.2s;

   &:hover {
     background-color: #1765c0;
   }
 `;



export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  margin: auto;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Label = styled.label`
  font-size: 1.1em;
  color: #333;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1em;
  margin-top: 5px;
`;

export const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1em;
  margin-top: 5px;
  resize: vertical;
`;
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px; /* Adjust height as needed */
`;