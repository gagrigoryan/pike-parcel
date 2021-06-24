import React from "react";
import "../styles/global.scss";
import type { AppProps } from "next/app";
import { PageLayout } from "../components/page-layout/PageLayout";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { StateMachineProvider, createStore } from "little-state-machine";
import { AttachmentStoreProvider } from "../utils/AttachmentStore";

createStore({});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <StateMachineProvider>
            <AttachmentStoreProvider>
                <PageLayout header={<Header />} footer={<Footer />}>
                    <Component {...pageProps} />
                </PageLayout>
            </AttachmentStoreProvider>
        </StateMachineProvider>
    );
}
export default MyApp;
