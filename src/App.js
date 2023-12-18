import "./App.css";
import Navbar from "./component/Navbar";
import Banner from "./component/Banner";
import Movies from "./component/Movies";
import Watchlist from "./component/Watchlist";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies />
              </>
            }
          />
          <Route path="/Watchlist" element={<Watchlist/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
