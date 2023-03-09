import { Component, CSSProperties, ReactElement } from "react";
import styled from "styled-components";
import { DividerIterface } from "../../interfaces/divider/divider.interface";

const StyledDivider = styled.div`
    width: 100%;
    height: 1px;
    margin: 32px 0px;
    display: block;
`;
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
            <StyledDivider style={this.backgroundColor}></StyledDivider>
        );
    }

} 