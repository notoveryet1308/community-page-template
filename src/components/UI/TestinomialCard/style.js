import styled, { keyframes } from "styled-components";

export const StyledTestimonialCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 100%;
  background: rgba(255, 255, 255, 0.3);
  padding: 0 40px;

  .testimonial-picture {
    background-image: url(${({ imgUrl }) => imgUrl});
    background-size: cover;
    background-position: center;
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
  .testimonial-name {
    margin: 20px 0;
  }

  .testimonial-value {
    text-align: center;
    font-weight: 400;
  }
`;
