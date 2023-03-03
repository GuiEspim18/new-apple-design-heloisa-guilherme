import { Component, ReactElement } from "react";
import { CenteredTitlesInteface } from "../../interfaces/centered-titles/cetered-titles.interface";
import "./CenteredTitles.css";

export class CenteredTitles extends Component<CenteredTitlesInteface> {

    constructor (props: any) {
        super(props)
        this.state = {}
    }

    public render(): ReactElement<any> {
        return (
            <div className="centered-div">
                {(this.props.title && this.props.title.length > 0) && <h1 className="big-centered-title">{this.props.title}</h1>}
                {(this.props.subTitle && this.props.subTitle.length > 0) && <h4 className="sub-centered-title">{this.props.subTitle}</h4>}
            </div>
        );
    }

}