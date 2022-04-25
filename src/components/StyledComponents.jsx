import styled from "styled-components";
export const StyledComponents = () => {
  return (
    <StyledContainer>
      <StyledTitle>- Styled Components -</StyledTitle>
      <StyledButton>FIGHT!!</StyledButton>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledTitle = styled.p`
  margin: 0;
  color: blue;
`;

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
