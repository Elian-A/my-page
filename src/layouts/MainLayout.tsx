import Head from "next/head";
import type { NextPage } from "next";
import type { ReactElement } from "react";
import Header from "~/components/Header";

const MainLayout: NextPage<{
  children: ReactElement | ReactElement[];
  title: string;
}> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="min-h-main bg-grid">{children}</main>
    </>
  );
};

export default MainLayout;
