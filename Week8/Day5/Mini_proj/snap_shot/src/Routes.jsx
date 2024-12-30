import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import Gallery from './components/Gallery';

const Routes = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/search" element={<Search />} />
                <Route path="/gallery/mountain" element={<Gallery />} />
                <Route path="/gallery/beaches" element={<Gallery />} />
                <Route path="/gallery/birds" element={<Gallery />} />
                <Route path="/gallery/food" element={<Gallery />} />
            </Routes>
        </Router>
    )
}

export default Routes;