import { Component, Fragment, ReactElement } from "react"
import Ripples from "react-ripples";
import { ButtonInterface } from "../../interfaces/button/button.interface";
import "./Button.css";

export class Button extends Component<ButtonInterface> {

    constructor(props: ButtonInterface) {
        super(props)
        this.state = {}
    }

    public render(): ReactElement<any> {
        return (
            <Fragment>
                <Ripples>
                    <button className={"button no-copy " + (this.props.expClass && this.props.expClass.length > 0 ? this.props.expClass : '')}>
                        <p>{this.props.text}</p>
                    </button>
                </Ripples>
            </Fragment>
        );
    }

}