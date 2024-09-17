import styled from "styled-components";


export const Container = styled.main`
  position: relative;
  z-index: 10;
  padding: 0 10rem;
  overflow-x: hidden;
  backgroundColor: 'linear-gradient(#e66465, #9198e5)';
  #tsparticles{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color:'red'
  }

  @media (max-width: 740px){
    padding: 0 4rem;
  }

  @media(max-width: 360px){
    padding: 0 2rem;
  }
`