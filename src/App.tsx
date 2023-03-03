import { Component, Fragment } from "react";
// import Home from "./app/pages/Home";
import Routes from "./app/Routes";
import Header from "./app/shared/utils/Header";
import { icons } from "./app/shared/utils/variables/icons/icons";
import { NavLinksInterface } from "./app/shared/utils/variables/nav-links/interface/nav-links.interface";
import { nav_links } from "./app/shared/utils/variables/nav-links/nav-links";

class App extends Component {

  private readonly navLinks: Array<NavLinksInterface> = nav_links;

  private readonly icons: Array<string> = icons


  constructor(props: any) {
    super(props)
    this.state = {}
  }


  render() {
    return (
      <Fragment>
        <Header navs={this.navLinks} icons={this.icons} />
        <div className="app">
          <Routes />
        </div>
      </Fragment>
    );
  }

}

export default App;
