import { Component, Fragment, ReactElement } from "react";
import Banner from "../../shared/components/Banner";
import "./Home.css";

export class Home extends Component {

    constructor(props: any) {
        super(props)
        this.state = {}
    }


    public render(): ReactElement<any> {
        return (
            <Fragment>
                <Banner />
            </Fragment>
        );
    }

}