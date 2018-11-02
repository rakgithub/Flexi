import React, { Component } from "react";
import "./App.css";
import Flexi from "./components/flexi/Flexi";
const flexiConfig = {
    items: [
        {
            name: "Person1",
            label: "Person Label",
            type: "TextField"
        },
        {
            name: "states",
            label: "State",
            type: "DropDown",
            values: ["Maharashtra", "Karnataka", "Uttrakhand", "Kerela"]
        }
    ]
};
class App extends Component {
    state = {};

    onFexiSubmit = userData => {
        console.dir(userData);
    };
    render() {
        return (
            <div className="App">
                <Flexi config={flexiConfig} onSubmit={this.onFexiSubmit} />
            </div>
        );
    }
}

export default App;
