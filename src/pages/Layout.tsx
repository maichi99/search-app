import React from "react";
import Header from "../component/header";
import SideBar from "../component/sidebar";
import Search from "../component/search";
import Footer from "../component/footer";
import "./Layout.scss";

const Layout: React.FC = () => (
  <>
    <Header />
    <SideBar />
    <Search />
    <Footer />
  </>
);

export default Layout;
