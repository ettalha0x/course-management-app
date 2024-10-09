import Head from "next/head";
import Layout from "../components/Layout";
import Dashboard from "../components/Dashboard";
import LoginOrRegister from "../components/LoginOrRegister";

export default function Home() {
  return (
    <>
      <Layout>
          <LoginOrRegister/>
      </Layout>
    </>
  );
}
