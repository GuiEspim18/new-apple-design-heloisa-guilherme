import { Component, CSSProperties, ReactElement } from "react";
import Ripples from "react-ripples";
import styled from "styled-components";
import { noCopy, StyledLink } from "../../../../assets/css/GlobalStyles";
import { LinkInterface } from "../../interfaces/link/link.interface";

const NoCopyLink = styled(StyledLink)`
    ${noCopy}
`;

export class Link extends Component<LinkInterface> {

    private readonly color: CSSProperties = {
        color: this.props.color && this.props.color.length > 0 ? this.props.color : "#fff"
    }


    constructor(props: LinkInterface) {
        super(props)
        this.state = {}
    }


    public clickLink(event: any): void {
        event.preventDefault()
    }


    public render(): ReactElement<any> {
        return (
            <Ripples>
                <NoCopyLink  style={this.color} href={this.props.route ? this.props.route : ""} onClick={event => this.clickLink(event)}>{this.props.text}</NoCopyLink>
            </Ripples>
        );
    }

}