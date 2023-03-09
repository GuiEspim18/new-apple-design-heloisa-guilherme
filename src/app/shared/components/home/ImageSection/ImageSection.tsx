import { Component, ReactElement, CSSProperties, Fragment } from "react";
import styled, { createGlobalStyle, css } from "styled-components";
import { Container } from "../../../../../assets/css/GlobalStyles";
import { ImageSectionInterface } from "../../../interfaces/image-section/image-section.interface";
import TextAndButtons from "../../../utils/TextAndButtons";

const StyledContainer: any = styled(Container)`
    display: flex;
    align-items: center;
    height: 100%;
`;

const StyledImageSection: any = styled.section`
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
`;

const Local: any = createGlobalStyle`
    .image-section .container .text-div {
        max-width: 560px;
    }
`;

export class ImageSection extends Component<ImageSectionInterface> {

    private readonly backgroundImage: CSSProperties = {
        'backgroundImage': `url(${this.props.src})`,
        'height': this.props.height && this.props.height.length > 0 ? this.props.height : "500px"
    }

    private readonly flexDirection: CSSProperties = {
        'flexDirection': this.props.direction && this.props.direction.length > 0 ? this.props.direction : ('row' as any)
    }


    constructor(props: ImageSectionInterface) {
        super(props)
        this.state = {}
    }


    public render(): ReactElement<any> {
        return (
            <Fragment>
                <Local />
                <StyledImageSection style={this.backgroundImage}>
                    <StyledContainer style={this.flexDirection}>
                        <TextAndButtons title={this.props.title} text={this.props.text} list={this.props.list} littleTitle={this.props.littleTitle} color={this.props.color} button={this.props.button} link={this.props.link} />
                    </StyledContainer>
                </StyledImageSection>
            </Fragment>
        );
    }

}