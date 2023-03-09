import { Component, CSSProperties, Fragment } from "react";
import Ripples from "react-ripples";
import styled, { createGlobalStyle } from "styled-components";
import { noCopy, StyledIconButton } from "../../../../assets/css/GlobalStyles";
import { IconButtonInterface } from "../../interfaces/icon-button/icon-button.interface";

const NoCopyIconButton: any = styled(StyledIconButton)`
    ${noCopy}
`;

const Global: any = createGlobalStyle`
    .react-ripples {
        border-radius: 40px;
    }
`;

export class IconButton extends Component<IconButtonInterface> {

    private readonly invert: CSSProperties = {
        "filter": `invert(${this.props.invert === undefined || this.props.invert === true ? '100%' : '0%'})`
    }

    constructor(props: IconButtonInterface) {
        super(props)
        this.state = {}
    }

    public render(): any {
        return (
            <Fragment>
                <Global />
                <Ripples>
                    <NoCopyIconButton>
                        <img style={this.invert} src={this.props.icon} alt="icon" />
                    </NoCopyIconButton>
                </Ripples>
            </Fragment>
        );
    }

}