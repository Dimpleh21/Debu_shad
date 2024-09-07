import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { CardList } from "./components/cardList";
import { Builder } from "./pages/builder";
import { Navbar } from "./components/NavBar";
import { Listing } from "./pages/listing";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Listing />} />
          <Route path="/builder" element={<Builder />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
