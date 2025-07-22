import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ThemeProvider} from "styled-components";
import {theme} from "./theme";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";
import {HelmetProvider} from "react-helmet-async";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <HelmetProvider>
                    <App />
                </HelmetProvider>
            </ThemeProvider>
        </QueryClientProvider>
    </React.StrictMode>
);