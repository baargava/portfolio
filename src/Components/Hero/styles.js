import styled from "styled-components";

export const Container = styled.section`
  padding-top: 12%;
  display: flex;
  justify-content:start;
  background: rgba(0,0,0,0);
  .hero-text{
    & > p{
      font-size: 2.2rem;
    }
    h1{
      font-size: 5.5rem;
    }

    h3{
      color:var(--green);
      margin: 1rem 0;
    }


    p.small-resume {
      margin-bottom: 0rem;
    }
  }
${'' /* // New added
  .social-media{
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding-top:1.5rem;
    padding-left:0rem;

    img,span{
      font-size: 3rem;
      width: 3.5rem;
    }
  } */}




  .hero-image{
    img{
      max-width: 500px;
    }
  }


  @media(max-width: 960px){
    display: block;
    margin-top: 15%;
    .hero-text{

      h1{
        font-size: 5rem;
      }
    }

    .hero-image{
      display: none;
    }
  }

  @media(max-width: 600px){
    margin-top: 15%;
  }
  @media(max-width: 480px){
    margin-top: 25%;
  }
`