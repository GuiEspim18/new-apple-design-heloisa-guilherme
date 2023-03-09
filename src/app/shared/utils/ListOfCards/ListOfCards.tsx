import { Component, ReactElement } from "react";
import styled from "styled-components";
import { ListOfCardsInterface } from "../../interfaces/list-od-cards/list-of-cards.interface";
import SimpleCard from "../SimpleCard";
import { CardsInterface } from "../variables/cards/interface/cards.interface";

const StyledListOfCards: any = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 50px 0px;
`;

export class ListOfCards extends Component<ListOfCardsInterface> {


    constructor (props: ListOfCardsInterface) {
        super(props)
        this.state = {}
    }

    public render(): ReactElement<any> {
        return (
            <StyledListOfCards>
                {this.props.cards.map((element: CardsInterface) => <SimpleCard key={element.src} src={element.src} text={element.text} />)}
            </StyledListOfCards>
        );
    }

}