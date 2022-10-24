import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Nav } from "../components/Nav";
import { Navigation } from "../components/Navigation";
import { Introduction } from "../modules/Introduction";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      {/* <Navigation /> */}
      <Nav />
      <div className="min-h-screen flex bg-slate-800/90">
      <div className="item w-32 h-screen">1</div>
        <div className="item w-auto h-screen flex-auto">
          {/* <Introduction /> */}
        </div>
      <div className="item w-32 h-screen">3</div>
      </div>
    </>
  );
};

export default Home;
