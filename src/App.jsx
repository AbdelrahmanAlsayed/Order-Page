import Header from './components/Header';
import Home from './components/Home';
import AppProvider from './context/AppContext';

function App() {
    return (
        <AppProvider>
            <Header />
            <Home />
        </AppProvider>
    )
}

export default App
