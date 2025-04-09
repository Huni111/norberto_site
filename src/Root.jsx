import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import "./styles/Root.css";


const RootFile = () => {

    return (
        <div className="site-container">
            <div className="header-section">
                <Header />
            </div>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default RootFile;
