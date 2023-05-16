import Nav from './Components/Nav';
import AuthButton from './Components/AuthButtons';
import Header from './Components/Header';
import Trending from './Components/Trending';
import './App.css';

function App() {
    return (
        <div className="grid md:grid-cols-5">
            <Nav />
            <main className="px-12 py-6 md:col-span-4 bg-cyan-50">
                <AuthButton />
                <Header />
                <Trending />
            </main>
        </div>
    );
}

export default App;
