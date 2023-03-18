import logo from './logo.svg';
import './App.css';
import s from './App.module.sass'
import {Header} from "./Components/Header/Header";
import {Search} from "./Components/Search/Search";
import {Catalog} from "./Components/Catalog/Catalog";
import {Menu} from "./Components/Menu/Menu";

function App() {

    return (
        <>
            <div className={s.main}>
                <div>
                    <Header/>
                    <Search/>
                    <Catalog/>
                </div>
                <Menu/>
            </div>
        </>

    );
}

export default App;
