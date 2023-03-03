import { Component, ReactElement } from "react";
import Navs from "../../components/home/navbar/Navs";
import { HeaderInterface } from "../../interfaces/header/header.interface";
import IconButton from "../IconButton";
import "./Header.css";

export class Header extends Component<HeaderInterface> {

    constructor(props: HeaderInterface) {
        super(props)
        this.state = {}
    }

    public render(): ReactElement<any> {
        return (
            <header>
                <div className="container">
                    <img src="/images/logo.svg" className="logo" alt="apple logo" />
                    <div className="navs">
                        <Navs navs={this.props.navs} />
                    </div>
                    <div className="icons">
                        {this.props.icons ? this.props.icons.map((element: string) => <IconButton key={element} icon={element} />) : ''}
                    </div>
                </div>
            </header>
        );
    }

}