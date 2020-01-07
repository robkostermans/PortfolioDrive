import React from "react";

import { ThemeProvider } from "styled-components";

import { Theme, GlobalStyle, useStateContext } from "../../helpers";

import { Car } from "../";

import S from "./styled";

export const App = () => {
  const [{ colorMode }] = useStateContext();

  return (
    <ThemeProvider theme={Theme[colorMode]}>
      <GlobalStyle />
      <S.App>
        <Car />
      </S.App>
    </ThemeProvider>
  );
};
