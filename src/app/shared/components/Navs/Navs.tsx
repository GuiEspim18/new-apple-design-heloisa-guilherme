import { Component, ReactElement } from "react";
import { NavsInterface } from "../../interfaces/navs/navs.interface";
import Button from "../../utils/Button";
import "./Navs.css";

export class Navs extends Component<NavsInterface> {

    constructor(props: NavsInterface) {
        super(props)
        this.state = {}
    }

    public render(): ReactElement<any> {
        return(
            <ul className="nav-list">
                {this.props.navs ? this.props.navs.map(element => <li key={element.name}><Button text={element.name} /></li>):''}
            </ul>
        );
    }

}