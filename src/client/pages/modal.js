import React, { useContext } from "react";

import styled from "styled-components";

const Overlay = styled.div`
  display: grid;
  grid: 1fr / 1fr;
  place-items: center center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: ${props => props.theme.modal.overlayColor};
`;

const ModalContainer = styled.div`
  background: ${props => props.theme.modal.backgroundColor};
  width: ${props => props.width || props.theme.modal.width};
  height: ${props => props.height || props.theme.modal.height};
  padding: ${props => props.padding || props.theme.modal.padding};
  box-sizing: border-box;
`;
const ModalContent = styled.div`
  text-align: center;
  h1 {
    font-size: 2rem;
  }
  p {
    font-size: 1.6rem;
    margin-top: 1.4rem;
  }
`;

export default () => {
  return (
    <div>
      <Overlay>
        <ModalContainer>
          <ModalContent>
            <h1>Modal Header</h1>
            <p>Modal Content</p>
          </ModalContent>
        </ModalContainer>
      </Overlay>
    </div>
  );
};
