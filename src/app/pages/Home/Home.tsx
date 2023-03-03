import { Component, Fragment, ReactElement } from "react";
import Banner from "../../shared/components/home/Banner";
import ImageSection from "../../shared/components/home/ImageSection";
import { ImageSectionInterface } from "../../shared/interfaces/image-section/image-section.interface";
import CenteredTitles from "../../shared/utils/CenteredTitles";
import ListOfCards from "../../shared/utils/ListOfCards";
import { cards } from "../../shared/utils/variables/cards/cards";
import { CardsInterface } from "../../shared/utils/variables/cards/interface/cards.interface";
import "./Home.css";

export class Home extends Component {

    private readonly title: string = "Apple apresenta iphone 14 e iphone 14 plus ";

    private readonly subTitle: string = "A cara do iPhone vai ficar a sua cara com a nova Tela Bloqueada do iOS 16.";

    private readonly imageSection1: ImageSectionInterface =  {
        title: "iphone e meio ambiente",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        src: "/images/background1.svg"
    }

    private readonly imageSection2: ImageSectionInterface =  {
        title: "iphone 14 &\niphone 14 plus",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        src: "/images/background2.svg",
        direction: "row-reverse",
        color: "#000000",
        height: "620px"
    }

    private readonly imageSection3: ImageSectionInterface =  {
        title: "Disponível em 5\nincriveis cores",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        src: "/images/background3.svg",
        color: "#000000",
        height: "570px"
    }

    private readonly cards: Array<CardsInterface> = cards

    constructor(props: any) {
        super(props)
        this.state = {}
    }


    public render(): ReactElement<any> {
        return (
            <Fragment>
                <Banner />
                <section className="container">
                    <div>
                        <CenteredTitles title={this.title} subTitle={this.subTitle} />
                        <ListOfCards cards={this.cards} />
                    </div>
                </section>
                <ImageSection src={this.imageSection1.src} title={this.imageSection1.title} text={this.imageSection1.text} />
                <ImageSection src={this.imageSection2.src} title={this.imageSection2.title} text={this.imageSection2.text} direction={this.imageSection2.direction} color={this.imageSection2.color} height={this.imageSection2.height} />
                <ImageSection src={this.imageSection3.src} title={this.imageSection3.title} text={this.imageSection3.text} color={this.imageSection3.color} height={this.imageSection3.height} />
            </Fragment>
        );
    }

}