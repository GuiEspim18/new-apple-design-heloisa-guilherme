import { Component } from "react"
import { BrowserRouter, Routes as Switch, Navigate, Route } from "react-router-dom";
import Home from "../pages/Home";

export class Routes extends Component {

    constructor(props: any) {
        super(props)
        this.state = {}
    }

    public render(): any {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="*" element={<Navigate to="/home" />} />
                    <Route path="/home" element={<Home />} />
                </Switch>
            </BrowserRouter>
        );
    }

}