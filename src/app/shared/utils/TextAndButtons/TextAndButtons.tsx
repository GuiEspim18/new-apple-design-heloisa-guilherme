import { Component, CSSProperties, ReactElement } from "react";
import styled from "styled-components";
import { primaryColor } from "../../../../assets/main/main";
import { TextAndButtonInterface } from "../../interfaces/text-and-button/text-and-button.interface";
import Button from "../Button";
import Link from "../Link";

const ButtonsDiv: any = styled.div`
    margin-top: 30px;
    display: flex;
    width: 60%;
    justify-content: space-between;
    align-items: center;
`;


const TextDiv: any = styled.div`
    max-width: 47% !important;
`;

const H1: any =  styled.h1`
    white-space: break-spaces;
`;

const BigTitle: any = styled(H1)`
    color: ${primaryColor};
    font-size: 3rem;
    margin: 3px 0;
`;

const H4: any = styled.h4`
    color: ${primaryColor};
    margin: 0;
`;

export class TextAndButtons extends Component<TextAndButtonInterface> {

    private readonly color: CSSProperties = {
        color: this.props.color && this.props.color.length > 0 ? this.props.color : "#fff"
    }


    constructor(props: any) {
        super(props)
        this.state = {}
    }

    public render(): ReactElement<any> {
        return (
            <TextDiv>
                <H4 style={this.color}>{this.props.littleTitle}</H4>
                <BigTitle style={this.color} className="big-title">{this.props.title}</BigTitle>
                {(this.props.list && this.props.list.length > 0) && <ul>
                    {this.props.list.map((element: any) =>
                        <li key={element}>
                            <p style={this.color}>{element}</p>
                        </li>
                    )}
                </ul>}
                {(this.props.text && this.props.text.length > 0) && <p style={this.color}>{this.props.text}</p>}
                <ButtonsDiv>
                    {(this.props.button === undefined || this.props.button === true ) && <Button text="Comprar agora" blueButton={true} />}
                    {(this.props.link === undefined  || this.props.link === true) && <Link color={this.props.color} text="Ler mais >>>" />}
                </ButtonsDiv>
            </TextDiv>
        );
    }

}