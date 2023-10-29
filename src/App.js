import React from "react";
import styled, { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    background: linear-gradient(to right, #11998e, #38ef7d); 
    height: 100%;
    margin: 0;
    color: #555;
  }
`;

const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
`;

const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles}
`;
const StyledButton = styled.button`
  display: block;
  background-color: #3ec67e;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledFormWrapper>
        <StyledForm>
          <h2>Login Page</h2>
          <label>Username</label>
          <StyledInput type="text" name="name" placeholder="username" />
          <label >Password</label>
          <StyledInput type="password" name="password" placeholder="Password" />
          <StyledButton type="submit">Login</StyledButton>
          <br />
          <div>
            <span>DON`T HAVE AN ACCOUNT? </span>
            <a href="">
              REGISTER NOW
            </a>
          </div>
        </StyledForm>
      </StyledFormWrapper>
    </>
  );
}

export default App;
