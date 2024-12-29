import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorBoundary from "./components/ErrorBoundary";

const HomeScreen = () => <h2>Home Screen</h2>;
const ProfileScreen = () => <h2>Profile Screen</h2>;
const ShopScreen = () => <h2>Shop Screen</h2>;

function App() {
  return (
    <>
      
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <NavLink  to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink  to="/profile">
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink  to="/shop">
                  Shop
                </NavLink>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<ErrorBoundary><HomeScreen /></ErrorBoundary>} />
            <Route path="/profile" element={<ErrorBoundary><ProfileScreen /></ErrorBoundary>} />
            <Route path="/shop" element={<ErrorBoundary><ShopScreen /></ErrorBoundary>} />
          </Routes>
        </BrowserRouter>
      
    </>
  );
}

export default App;
