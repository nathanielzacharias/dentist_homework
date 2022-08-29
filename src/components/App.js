import React from "react";
import Home from "./Home";
import Contact from "./Contact"
import Procedures from "./Procedures"
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

const App = () => {

    return (
        <div>
          <nav>
            {/* <a href="/">Go to Home Page</a>
            <a href="/procedures">See Our Procedures</a>
            <a href="/contact">Contact Us!</a> */}
            
            <Link to="/">Go to Home Page</Link>
            <Link to="/procedures">See Our Procedures</Link>
            <Link to="/contact">Contact Us!</Link>

          </nav>

          <div>
            {/* <Home /> */}

            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/procedures" element={<Procedures/>} />
              <Route path="/contact" element={<Contact/>} />
            </Routes>

          </div>
        </div>
    );
}

export default App;
