import { Component, ReactElement } from "react";
import { TextAndButtonInterface } from "../../interfaces/text-and-button/text-and-button.interface";
import Button from "../Button";
import Link from "../Link";
import "./TextAndButtons.css"

export class TextAndButtons extends Component<TextAndButtonInterface> {

    constructor(props: any) {
        super(props)
        this.state = {}
    }

    public render(): ReactElement<any> {
        return (
            <div className="text-div">
                <h4>{this.props.littleTitle}</h4>
                <h1 className="big-title">{this.props.title}</h1>
                {(this.props.list && this.props.list.length > 0) && <ul>
                    {this.props.list.map((element: any) =>
                        <li key={element}>
                            <p>{element}</p>
                        </li>
                    )}
                </ul>}
                {(this.props.text && this.props.text.length > 0) && <p>{this.props.text}</p>}
                <div className="buttons-div">
                    <Button text="Comprar agora" expClass="blue-button" />
                    <Link text="Ler mais >>>" />
                </div>
            </div>
        );
    }

}