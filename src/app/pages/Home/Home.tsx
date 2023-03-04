import { Component, Fragment, ReactElement } from "react";
import Banner from "../../shared/components/home/Banner";
import ImageSection from "../../shared/components/home/ImageSection";
import { ImageSectionInterface } from "../../shared/interfaces/image-section/image-section.interface";
import CenteredTitles from "../../shared/utils/CenteredTitles";
import ListOfCards from "../../shared/utils/ListOfCards";
import { cards } from "../../shared/utils/variables/cards/cards";
import { CardsInterface } from "../../shared/utils/variables/cards/interface/cards.interface";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Home.css"
import Divider from "../../shared/utils/Divider";

export class Home extends Component {

    private readonly title: string = "Apple apresenta iphone 14 e iphone 14 plus ";

    private readonly subTitle: string = "A cara do iPhone vai ficar a sua cara com a nova Tela Bloqueada do iOS 16.";

    private readonly imageSection1: ImageSectionInterface = {
        title: "iphone e meio ambiente",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        src: "/images/background1.svg"
    }

    private readonly imageSection2: ImageSectionInterface = {
        title: "iphone 14 &\niphone 14 plus",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        src: "/images/background2.svg",
        direction: "row-reverse",
        color: "#000000",
        height: "620px"
    }

    private readonly imageSection3: ImageSectionInterface = {
        title: "Disponível em 5\nincriveis cores",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        src: "/images/background3.svg",
        color: "#000000",
        height: "570px"
    }

    private readonly imageSection4: ImageSectionInterface = {
        title: "iphone 14 &\niphone 14 plus",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        src: "/images/background4.svg",
        direction: "row-reverse",
        color: "#000000",
        height: "400px",
        button: false
    }

    private readonly cards: Array<CardsInterface> = cards


    constructor(props: any) {
        super(props)
        this.state = {}
    }


    public componentDidMount(): void {
        window.onbeforeunload = () => {
            window.scrollTo(0, 0)
        }
        Aos.init({
            duration: 2000
        })
    }


    public render(): ReactElement<any> {
        return (
            <Fragment>
                <Banner />
                <section className="container">
                    <div>
                        <CenteredTitles title={this.title} subTitle={this.subTitle} />
                        <Divider color="#dcdcdc" />
                        <ListOfCards cards={this.cards} />
                    </div>
                </section>
                <div data-aos="fade-up" data-aos-once="true">
                    <ImageSection data-aos="fade-up" src={this.imageSection1.src} title={this.imageSection1.title} text={this.imageSection1.text} />
                </div>
                <div data-aos="fade-right" data-aos-once="true">
                    <ImageSection src={this.imageSection2.src} title={this.imageSection2.title} text={this.imageSection2.text} direction={this.imageSection2.direction} color={this.imageSection2.color} height={this.imageSection2.height} />
                </div>
                <div data-aos="fade-left" data-aos-once="true">
                    <ImageSection src={this.imageSection3.src} title={this.imageSection3.title} text={this.imageSection3.text} color={this.imageSection3.color} height={this.imageSection3.height} />
                </div>
                <section className="container" data-aos="flip-left" data-aos-once="true">
                    <div className="holder">
                        <ImageSection src={this.imageSection4.src} title={this.imageSection4.title} text={this.imageSection4.text} direction={this.imageSection4.direction} height={this.imageSection4.height} button={this.imageSection4.button} />
                    </div>
                </section>
            </Fragment>
        );
    }

}