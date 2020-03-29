import React, { useContext } from "react";

import styled from "styled-components";
const Container = styled.div`
  /* styles to center the media, can remove */
  margin: 0;
  height: 100%;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Media = styled.div`
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 10px;
  padding: 15px;
  background: ${props =>
    props.backgroundColor || props.theme.media.backgroundColor};
  color: ${props => props.color || props.theme.media.color};
  width: 100%;
  max-width: ${props => props.maxWidth || props.theme.media.maxWidth};
  img {
    border-radius: 100%;
    width: ${props => props.imageWidth || props.theme.media.imageWidth};
  }
  h2 {
    font-size: 1.3rem;
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: ${props => props.h2Color || props.theme.media.h2.color};
  }
  p {
    margin: 0;
  }
`;

const Comment = styled.div`
  display: grid;
  grid-template-columns: 32px 1fr;
  grid-column-gap: 8px;
  background: ${props =>
    props.backgroundColor || props.theme.media.comment.backgroundColor};
  padding: 7px;
  margin-top: 15px;
  margin-bottom: 15px;
  color: ${props => props.color || props.theme.media.comment.color};
  img {
    width: 32px;
    height: 32px;
  }
  h3 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    margin-top: 0;
    color: "#113";
  }
  p {
    margin: 0;
  }
`;
const MainMedia = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 48px 1fr;
  padding: 7px;
`;

export default () => {
  return (
    <Container>
      <Media>
        <img
          src="https://randomuser.me/api/portraits/men/51.jpg"
          alt="profile"
        />
        <div>
          <div>
            <h2>Media Item</h2>
            <p>
              This is a media item. Isn't it great? This is a media item. Isn't
              it great? This is a media item. Isn't it great?
            </p>
          </div>
          <Comment>
            <img
              src="https://randomuser.me/api/portraits/men/50.jpg"
              alt="profile"
            />
            <div>
              <h3>Comment 1</h3>
              <p>
                This is a really cool comment. This is a media item. Isn't it
                great? This is a media item. Isn't it great? This is a media
                item. Isn't it great?
              </p>
            </div>
          </Comment>
          <Comment>
            <img
              src="https://randomuser.me/api/portraits/men/49.jpg"
              alt="profile"
            />
            <div>
              <h3>Comment 2</h3>
              <p>This is a really cool comment.</p>
            </div>
          </Comment>
        </div>
      </Media>
    </Container>
  );
};
