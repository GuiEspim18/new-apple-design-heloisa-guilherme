import { Component, ReactElement } from "react";
import Ripples from "react-ripples";
import { LinkInterface } from "../../interfaces/link/link.interface";
import "./Link.css";

export class Link extends Component<LinkInterface> {

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
                <a className="link no-copy" href={this.props.route ? this.props.route : ""} onClick={event => this.clickLink(event)}>{this.props.text}</a>
            </Ripples>
        );
    }

}