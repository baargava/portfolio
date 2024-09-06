import styled from "styled-components";

export const Container = styled.footer`
  background-color: #2b2b2baa;
  padding: 1rem 15rem;
  margin-top: auto; /* Ensures the footer pushes to the bottom */
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  margin-top:10px;
  width: 100%;
  box-sizing: border-box; /* Includes padding in width calculation */

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

  @keyframes spinning {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 800px) {
    padding: 4rem 10rem;
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }

  @media (max-width: 600px) {
    padding: 4rem 1rem;
    p {
      font-size: 1.2rem;
    }
  }
`;
