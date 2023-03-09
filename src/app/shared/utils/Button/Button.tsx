import { Component, Fragment, ReactElement } from "react"
import Ripples from "react-ripples";
import { ButtonInterface } from "../../interfaces/button/button.interface";
import { StyledButton, BlueButton, noCopy } from "../../../../assets/css/GlobalStyles";
import styled, { createGlobalStyle } from "styled-components";

const SyledNoCopyButton = styled(StyledButton)`
    ${noCopy}
`
const Local: any = createGlobalStyle`
    .react-ripples{
        border-radius: 5px !important;
    }
`;

export class Button extends Component<ButtonInterface> {

    constructor(props: ButtonInterface) {
        super(props)
        this.state = {}
    }

    public render(): ReactElement<any> {
        return (
            <Fragment>
                <Local />
                <Ripples>
                    {(this.props.blueButton === undefined || this.props.blueButton === false) &&
                        <SyledNoCopyButton>
                            <p>{this.props.text}</p>
                        </SyledNoCopyButton>
                    }
                    {(this.props.blueButton !== undefined || this.props.blueButton === true) &&
                        <BlueButton>
                            <p>{this.props.text}</p>
                        </BlueButton>
                    }
                </Ripples>
            </Fragment>
        );
    }

}