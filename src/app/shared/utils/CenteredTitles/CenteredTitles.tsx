import { Component, ReactElement } from "react";
import styled from "styled-components";
import { darkColor } from "../../../../assets/main/main";
import { CenteredTitlesInteface } from "../../interfaces/centered-titles/cetered-titles.interface";

const CenteredDiv: any = styled.div`
    padding: 30px 0px;
`;

const BigTitle: any = styled.h1`
    text-align: center;
    font-size: 3rem;
    color: ${darkColor};
`;

const SubTitle: any = styled.h4`
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    color: ${darkColor};
`;

export class CenteredTitles extends Component<CenteredTitlesInteface> {

    constructor (props: any) {
        super(props)
        this.state = {}
    }

    public render(): ReactElement<any> {
        return (
            <CenteredDiv>
                {(this.props.title && this.props.title.length > 0) && <BigTitle>{this.props.title}</BigTitle>}
                {(this.props.subTitle && this.props.subTitle.length > 0) && <SubTitle>{this.props.subTitle}</SubTitle>}
            </CenteredDiv>
        );
    }

}