import styled from "styled-components";
import Rotas from "./routes";
// import RGB from "./pages/RGB";
// import HSLA from "./pages/HSLA";
// import CMYK from "./pages/CMYK";

export default function App() {
  return (
    <WrapperSld>
      <Rotas/>
    </WrapperSld>
  );
}

const WrapperSld = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
