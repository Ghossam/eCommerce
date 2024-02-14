import {BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import NewsLetter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context"

function App  () {
    return (
    <>
        <Router>
            <AppContext>
        <Header/>
        
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/categories/:id" element={< Category />} />
                <Route path="/product/:id" element={<SingleProduct />} />
                {/* <Route path="/about" element ={<NewsLetter/>}/> */}
            </Routes>
        <NewsLetter />
        <Footer />
        </AppContext>
        </Router>
        </> 
        );
};

export default App;
