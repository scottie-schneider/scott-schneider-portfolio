import React, { useContext } from "react";

import styled from "styled-components";

const Header = styled.header``;
const StickyFooter = styled.footer`
  background: ${props =>
    props.backgroundColor || props.theme.footer.backgroundColor};
  color: ${props => props.color || props.theme.footer.color};
`;
const Body = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 90px 1fr ${props =>
      props.height || props.theme.footer.height};
`;

export default () => {
  return (
    <Body>
      <Header>
        <h1>Header</h1>
      </Header>
      <section>
        <h2> Main Section </h2>
      </section>
      <StickyFooter>
        <h2>Footer</h2>
      </StickyFooter>
    </Body>
  );
};
