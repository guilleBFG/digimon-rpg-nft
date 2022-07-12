import Head from "next/head";
import React from "react";

type MainLayoutProps = {
  children: React.ReactNode;
  pageTitle: string,
  pageDescription: string,
};

function Layout(
  { children, pageTitle, pageDescription}: MainLayoutProps
) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
    </>
  );
}

export default Layout;
