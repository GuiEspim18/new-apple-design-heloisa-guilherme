import { Component, ReactElement } from "react";
import { SimpleCardInterface } from "../../interfaces/simple-card/simple-card.interface";
import "./SimpleCard.css";

export class SimpleCard extends Component<SimpleCardInterface> {

    constructor(props: SimpleCardInterface) {
        super(props)
        this.state = {}
    }

    public render(): ReactElement<any> {
        return (
            <div className="simple-card">
                <div className="img-div">
                    <img src={this.props.src} alt="" />
                </div>
                <p>{this.props.text}</p>
            </div>
        );
    }

}