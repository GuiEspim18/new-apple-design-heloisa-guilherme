import { Component, ReactElement } from "react";
import { ListOfCardsInterface } from "../../interfaces/list-od-cards/list-of-cards.interface";
import SimpleCard from "../SimpleCard";
import { CardsInterface } from "../variables/cards/interface/cards.interface";
import "./ListOfCards.css";

export class ListOfCards extends Component<ListOfCardsInterface> {


    constructor (props: ListOfCardsInterface) {
        super(props)
        this.state = {}
    }

    public render(): ReactElement<any> {
        return (
            <div className="list-of-cards">
                {this.props.cards.map((element: CardsInterface) => <SimpleCard key={element.src} src={element.src} text={element.text} />)}
            </div>
        );
    }

}