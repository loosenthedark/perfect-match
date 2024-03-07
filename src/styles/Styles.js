import styled from "styled-components";

export const Button = styled.div`
  position: fixed;
  width: 100%;
  left: calc(97vw - 3rem);
  bottom: 3.5vw;
  height: 3rem;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  color: #ffb3d0;
  @media (min-width: 768px) {
    left: 91%;
  }
  @media (min-width: 992px) {
    left: 93%;
  }
  @media (min-width: 1200px) {
    left: 94.65%;
  }
`;