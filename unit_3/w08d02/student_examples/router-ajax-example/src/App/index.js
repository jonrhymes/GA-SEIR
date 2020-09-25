import React, { Component } from "react";
import "./style.scss";
import MainNav from "../MainNav";

class App extends Component {
  render() {
    return (
      <div className="main-app">
          <MainNav></MainNav>
        <main>
          Home
        </main>
        <aside>

        </aside>
      </div>
    )
  }
}

export default App;
