import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";
import {RecoilRoot} from "recoil";
import {HelmetProvider} from "react-helmet-async";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <HelmetProvider>
            <RecoilRoot>
                <QueryClientProvider client={queryClient}>
                    <App />
                </QueryClientProvider>
            </RecoilRoot>
        </HelmetProvider>
    </React.StrictMode>
);