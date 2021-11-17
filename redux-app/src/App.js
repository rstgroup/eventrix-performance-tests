import React from "react";
import {Provider} from "react-redux";
import store from "./redux";
import Logo from "./components/Logo";
import ItemsList from "./components/ItemsList";
import "./styles/styles.css";
import mockedItems from "./mockedItems";
import Header from "./components/Header";
import Toolbar from "./components/Toolbar";
import Info from "./components/Info";

export default function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Logo/>
                <Info/>
                <Header />
                <Toolbar/>
                <div className="list-container">
                    {mockedItems.map((item, index) => <ItemsList key={`list-${index}`} listNumber={index}/>)}
                </div>
            </div>
        </Provider>
    );
}
