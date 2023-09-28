import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    

    html,body {
        font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
        -webkit-font-smoothing: antialised;
        background-color: white; 
        color:black;
        font-size: 16px;

        @media (max-width: 1000px) {
            
            
            
        }
    }

    ::-webkit-scrollbar{
    width: 0.5em;
    }

    ::-webkit-scrollbar-track{
    background:inherit;
    }

    ::-webkit-scrollbar-thumb{
    background:#c9d1d9;
    border-radius: 100vw;
    }
`;