import Content from "@/components/Content/Content";
import Header from "@/components/Header/Header";
import type { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Expenses Chart</title>
        <meta name='description' content='The expenses chart' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className="px-5 flex flex-col gap-5 justify-center h-screen">
        <Header />
        <Content />
      </div>
    </Fragment>
  );
};

export default Home;
