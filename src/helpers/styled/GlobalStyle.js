import { createGlobalStyle } from "styled-components";

/**
 * A helper function to generate a special StyledComponent that handles global styles.
 * Normally, styled components are automatically scoped to a local CSS class and therefore
 * isolated from other components. In the case of createGlobalStyle, this limitation is
 * removed and things like CSS resets or base stylesheets can be applied.
 *
 * ie. not scoped!!!
 *
 * https://www.styled-components.com/docs/api#createglobalstyle
 *
 */

export const GlobalStyle = createGlobalStyle`
    body{
      position:relative;
      margin:0;
      padding:0;
      background:${({ theme }) => theme.canvas};
      color:${({ theme }) => theme.text};
      overflow-y:hidden;
      height:100%;
   
      scrollbar-width: none;  /* Firefox */
    
      
  }

    #root{
      scrollbar-width: none;
      min-height:100vh;
      overflow-y:scroll;
      -ms-overflow-style: none;  /* Internet Explorer 10+ */
      -webkit-overflow-scrolling: touch;
      &::-webkit-scrollbar { 
        display: none;  /* Safari and Chrome */
        width: 0;
        height: 0;
      }
    }

    h1,h2,h3,h4{
      margin:0;
    }
`;
