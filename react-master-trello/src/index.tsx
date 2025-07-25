import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {RecoilRoot} from "recoil";
import {HelmetProvider} from "react-helmet-async";
import {ThemeProvider} from "styled-components";
import {darkTheme} from "./theme/theme";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <HelmetProvider>
            <RecoilRoot>
                <ThemeProvider theme={darkTheme} >
                    <App />
                </ThemeProvider>
            </RecoilRoot>
        </HelmetProvider>
    </React.StrictMode>
);
