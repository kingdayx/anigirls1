import App from "next/app";
import Head from "next/head";

export default class Root extends App {
  render() {
    const { Component } = this.props;

    return (
      <>
        <Head>
          <title>AniGirls Wallet Connector</title>
        </Head>

        <Component />
      </>
    );
  }
}
