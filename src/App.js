import styled from "styled-components";
import { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    transform: rotate(360deg);
    border-radius: 100px;
  }
  100% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  animation: ${rotationAnimation} 2s linear infinite;
  justify-content: center;
  align-items: center;
  span {
    font-size: 36px;
    &:hover {
      font-size: 45px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <span>😊</span>
      </Box>
    </Wrapper>
  );
}

export default App;
