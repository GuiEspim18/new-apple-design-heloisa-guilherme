import { Component, ReactElement } from "react";
import styled from "styled-components";
import { darkColor, shadow1, shadow2 } from "../../../../assets/main/main";
import { SimpleCardInterface } from "../../interfaces/simple-card/simple-card.interface";

const StyledSimpleCard: any = styled.div`
    padding: 30px;
    background: #dcdcdc;
    border-radius: 5px;
    display: flex;
    align-items: center;
    max-width: 450px;
    justify-content: space-between;
    margin: 10px;
    box-shadow: 2px 4px 12px ${shadow1};
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        transform: scale(1.03);
        box-shadow: 4px 8px 12px ${shadow2};
    }

    p {
        font-size: 1rem;
        color: ${darkColor};
        margin-left: 2rem;
        font-weight: 500;
    }
`;

const ImgDiv: any = styled.div`
    background: ${darkColor};
    width: 40px;
    height: 40px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;

    img {
        filter: invert(100%);
        width: 40px !important;
    }
`;

export class SimpleCard extends Component<SimpleCardInterface> {

    constructor(props: SimpleCardInterface) {
        super(props)
        this.state = {}
    }

    public render(): ReactElement<any> {
        return (
            <StyledSimpleCard>
                <ImgDiv>
                    <img src={this.props.src} alt="" />
                </ImgDiv>
                <p>{this.props.text}</p>
            </StyledSimpleCard>
        );
    }

}