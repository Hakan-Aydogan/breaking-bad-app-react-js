import React, { useState } from "react";
import Characters from "./components/Characters";
import Episodes from "./components/Episodes";
import Navbar from "./components/Navbar";
import "../src/index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

function App() {
  const [currentPage, setCurrentPage] = useState("characters");

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Breaking Bad</h1>
        <Navbar changePage={setCurrentPage}></Navbar>
        <div className="content">
          {currentPage === "characters" ? (
            <Characters></Characters>
          ) : (
            <Episodes></Episodes>
          )}
        </div>
        <Footer></Footer>
      </div>
    </QueryClientProvider>
  );
}

export default App;
