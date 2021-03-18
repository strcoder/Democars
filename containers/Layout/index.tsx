import Head from "next/head";
import Footer from "../Footer"
import Header from "../Header"
import BotomNavigationBar from '../BotomNavigationBar';

const Layout = ({ children }: any) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Raleway&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      {children}
      <Footer />
      <BotomNavigationBar />
    </>
  );
}

export default Layout;