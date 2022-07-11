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
      <div className="px-5">
        <Header />
        <div>
          <h1>Spending - Last 7 days</h1>
          <div>Chart</div>
          <p>Total</p>
          <span>$478.33</span>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
