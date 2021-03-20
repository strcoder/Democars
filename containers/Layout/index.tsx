import Head from "next/head";
import Footer from "../Footer"
import Header from "../Header"
import BotomNavigationBar from '../BotomNavigationBar';

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <BotomNavigationBar />
    </>
  );
}

export default Layout;