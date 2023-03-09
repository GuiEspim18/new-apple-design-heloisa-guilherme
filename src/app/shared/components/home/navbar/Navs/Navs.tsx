import { Component, ReactElement } from "react";
import styled from "styled-components";
import { NavsInterface } from "../../../../interfaces/navs/navs.interface";
import Link from "../../../../utils/Link";

const NavList: any = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-around;
    margin: 0;
    padding: 0;
`;

export class Navs extends Component<NavsInterface> {

    constructor(props: NavsInterface) {
        super(props)
        this.state = {}
    }

    public render(): ReactElement<any> {
        return(
            <NavList>
                {this.props.navs ? this.props.navs.map(element => <li key={element.name}><Link text={element.name} /></li>):''}
            </NavList>
        );
    }

}