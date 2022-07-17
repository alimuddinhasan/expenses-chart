import Content from "@/components/Content/Content";
import Header from "@/components/Header/Header";
import type { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";

import data from "data/data.json";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Expenses Chart</title>
        <meta name='description' content='The expenses chart' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='px-5 flex justify-center'>
        <div className='md:max-w-sm flex flex-col gap-5 justify-center h-screen'>
          <Header />
          <Content
            data={data.map((item) => ({ label: item.day, value: item.amount }))}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
