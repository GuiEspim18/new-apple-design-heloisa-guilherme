import { Component, ReactElement } from "react";
import SimpleCard from "../SimpleCard";
import { cards } from "../variables/cards/cards";
import { CardsInterface } from "../variables/cards/interface/cards.interface";
import "./ListOfCards.css";

export class ListOfCards extends Component<any> {

    private readonly cards: Array<CardsInterface> = cards

    constructor (props: any) {
        super(props)
        this.state = {}
    }

    public render(): ReactElement<any> {
        return (
            <div className="list-of-cards">
                {this.cards.map((element: CardsInterface) => <SimpleCard src={element.src} text={element.text} />)}
            </div>
        );
    }

}