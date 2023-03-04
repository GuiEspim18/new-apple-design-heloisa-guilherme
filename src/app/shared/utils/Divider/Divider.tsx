import { Component, CSSProperties, ReactElement } from "react";
import { DividerIterface } from "../../interfaces/divider/divider.interface";
import "./Divider.css";

export class Divider extends Component<DividerIterface> {

    private readonly backgroundColor: CSSProperties = {
        'background': this.props.color && this.props.color.length > 0 ? this.props.color : '#000'
    }

    constructor(props: DividerIterface) {
        super(props)
        this.state = {}
    }

    public render(): ReactElement<any> {
        return (
            <div className="divider" style={this.backgroundColor}></div>
        );
    }

} 