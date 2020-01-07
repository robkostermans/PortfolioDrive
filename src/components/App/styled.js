import styled from "styled-components";

const S = {};

S.App = styled.div`
  position: relative;
  font-size: 16px;
  margin: 0;
  font-family: ${({ theme }) => theme.font};
  height: 100%;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.canvas};
`;

S.Loader = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default S;
