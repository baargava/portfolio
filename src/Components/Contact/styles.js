import styled from "styled-components";

export const Container = styled.footer`
  background-color: #2b2b2baa;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;

  .logo {
    font-size: 2.8rem;
  }

  p {
    letter-spacing: 0.2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    img {
      width: 2.6rem;
      animation: spinning 5s infinite linear;
    }
  }

  .social-media {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    img,
    span {
      font-size: 3rem;
      width: 3rem;
    }
  }

  @media (max-width: 800px) {
    padding: 4rem 10rem;
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }

  @media (max-width: 600px) {
    padding: 0.5rem 1rem;
    p {
      font-size: 1.2rem;
    }
  }
`;
