import { Component, ReactElement } from "react";

export class Divider extends Component<any> {

    constructor(props: any) {
        super(props)
        this.state = {}
    }

    public render(): ReactElement<any> {
        return (
            <div className="divider"></div>
        );
    }

} 