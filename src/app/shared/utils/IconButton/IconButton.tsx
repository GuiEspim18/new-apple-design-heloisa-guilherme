import { Component } from "react";
import Ripples from "react-ripples";
import { IconButtonInterface } from "../../interfaces/icon-button/icon-button.interface";
import "./IconButton.css";

export class IconButton extends Component<IconButtonInterface> {

    // private readonly bc

    constructor(props: IconButtonInterface) {
        super(props)
        this.state = {}
    }

    public render(): any {
        return (
            <Ripples>
                <button className="icon-button no-copy">
                    <img className="no-copy" src={this.props.icon} alt="icon" />
                </button>
            </Ripples>
        );
    }

}