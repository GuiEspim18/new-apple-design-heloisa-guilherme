import { Component, CSSProperties, ReactElement } from "react";
import Ripples from "react-ripples";
import { LinkInterface } from "../../interfaces/link/link.interface";
import "./Link.css";

export class Link extends Component<LinkInterface> {

    private readonly color: CSSProperties = {
        color: this.props.color && this.props.color.length > 0 ? this.props.color : "#fff"
    }


    constructor(props: LinkInterface) {
        super(props)
        this.state = {}
    }


    public clickLink(event: any): void {
        event.preventDefault()
    }


    public render(): ReactElement<any> {
        return (
            <Ripples>
                <a  style={this.color} className="link no-copy" href={this.props.route ? this.props.route : ""} onClick={event => this.clickLink(event)}>{this.props.text}</a>
            </Ripples>
        );
    }

}