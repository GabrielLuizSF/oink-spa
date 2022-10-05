import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { GlobalStyle } from "../globalStyles";
import Details from "./Details/Details";
import Home from "./Home/Home";
import Singin from "./Singin/Singin";
import Singup from "./Singup/Singup";
import RefreshProvider from "../Contexts/RefreshContext";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <RefreshProvider>
        <Wrapper>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/singup" element={<Singup />} />
              <Route path="/singin" element={<Singin />} />
              <Route path="/details/:id" element={<Details />} />
            </Routes>
          </BrowserRouter>
        </Wrapper>
      </RefreshProvider>
    </>
  );
}

const Wrapper = styled.div`
  /* margin-top: 67px; */
`;
