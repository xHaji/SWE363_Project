import React,{ useState } from "react";
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import Search from "./Search.js"
import "./App.css";



const App = () => (
  <div className="app">
    <Sidebar />
    <main>
      <Header />
      <div className="content">
        <div className="banner" ><img src="\front.jpg" alt="front" className="front" /></div>
        <Search />
      </div>
    </main>
  </div>
);
export default App;
