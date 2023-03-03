import { Component, CSSProperties, ReactElement } from "react";
import { TextAndButtonInterface } from "../../interfaces/text-and-button/text-and-button.interface";
import Button from "../Button";
import Link from "../Link";
import "./TextAndButtons.css"

export class TextAndButtons extends Component<TextAndButtonInterface> {

    private readonly color: CSSProperties = {
        color: this.props.color && this.props.color.length > 0 ? this.props.color : "#fff"
    }


    constructor(props: any) {
        super(props)
        this.state = {}
    }

    public render(): ReactElement<any> {
        return (
            <div className="text-div">
                <h4 style={this.color}>{this.props.littleTitle}</h4>
                <h1 style={this.color} className="big-title">{this.props.title}</h1>
                {(this.props.list && this.props.list.length > 0) && <ul>
                    {this.props.list.map((element: any) =>
                        <li key={element}>
                            <p style={this.color}>{element}</p>
                        </li>
                    )}
                </ul>}
                {(this.props.text && this.props.text.length > 0) && <p style={this.color}>{this.props.text}</p>}
                <div className="buttons-div">
                    <Button text="Comprar agora" expClass="blue-button" />
                    <Link color={this.props.color} text="Ler mais >>>" />
                </div>
            </div>
        );
    }

}