/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
export const Emotion = () => {
  const containerStyle = css`
    border: solid 2px #392eff;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;
  const titleStyle = css({ margin: "0", color: "blue" });
  return (
    <div css={containerStyle}>
      <p css={titleStyle}>- Emotion - </p>
      <StyledButton>FIGHT!!</StyledButton>
    </div>
  );
};

const StyledButton = styled.button`
  border: none;
  background-color: pink;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #46cdcf;
    color: #fff;
    cursor: pointer;
  }
`;
