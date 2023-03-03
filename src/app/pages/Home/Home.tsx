import { Component, Fragment, ReactElement } from "react";
import Banner from "../../shared/components/home/Banner";
import ImageSection from "../../shared/components/home/ImageSection";
import { ImageSectionInterface } from "../../shared/interfaces/image-section/image-section.interface";
import CenteredTitles from "../../shared/utils/CenteredTitles";
import ListOfCards from "../../shared/utils/ListOfCards";
import "./Home.css";

export class Home extends Component {

    private readonly title: string = "Apple apresenta iphone 14 e iphone 14 plus ";

    private readonly subTitle: string = "A cara do iPhone vai ficar a sua cara com a nova Tela Bloqueada do iOS 16.";

    private readonly imageSection: ImageSectionInterface =  {
        title: "iphone e meio ambiente",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        src: "/images/background1.svg"
    }

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
                        <ListOfCards />
                    </div>
                </section>
                <ImageSection src={this.imageSection.src} title={this.imageSection.title} text={this.imageSection.text} />
            </Fragment>
        );
    }

}