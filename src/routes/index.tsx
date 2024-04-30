import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "../components/Menu";
import styled from "styled-components";

import { CMYKProvider } from "../contexts/CMYKContext";
import { RGBProvider } from "../contexts/RGBContext";
import { HSLAProvider } from "../contexts/HSLAContext";
import RGBColor from "../components/RGBColor";
import HSLAColor from "../components/HSLAColor";
import CMYKColor from "../components/CMYKColor";

export default function Rotas() {
  return (
    <PageSld>
      <CMYKProvider>
        <RGBProvider>
          <HSLAProvider>
          <BrowserRouter>
              <Menu />
              <BodySld>
                <Routes>
                  <Route path="/RGB" element={<RGBColor/>}></Route>
                  <Route path="/HSLA" element={<HSLAColor/>}></Route>
                  <Route path="/CMYK" element={<CMYKColor />}></Route>
                </Routes>
              </BodySld>
          </BrowserRouter>
          </HSLAProvider>
        </RGBProvider>
      </CMYKProvider>
    </PageSld>
  );
}

const PageSld = styled.div`
  display: flex;
`;

const BodySld = styled.div`
  position: absolute; /* Alterado para position: absolute */
  top: calc(
    50% + 60px
  ); /* Posiciona o elemento no meio verticalmente e Ajusta o valor para compensar a altura do menu */
  left: 50%; /* Posiciona o elemento no meio horizontalmente */
  transform: translate(
    -50%,
    -50%
  ); /* Move o elemento de volta metade de sua própria largura e altura */
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;
