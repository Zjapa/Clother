import { Routes, Route } from 'react-router-dom';
import Home from './components/routes/home/Home';
import Navigation from './components/routes/Navigation/Navigation';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={Navigation}>
                <Route path="/home" index element={Home} />
            </Route>
        </Routes>
    );
};

export default App;
