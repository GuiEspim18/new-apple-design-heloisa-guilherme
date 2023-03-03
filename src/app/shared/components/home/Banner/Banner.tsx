import { Component, ReactElement } from "react";
import { BannerInterface } from "../../../interfaces/banner/banner.interface";
import TextAndButtons from "../../../utils/TextAndButtons";
import "./Banner.css";

export class Banner extends Component<BannerInterface> {

    private readonly backgroundImage: any = {
        backgroundImage: "url(/images/banner.svg)"
    }


    private readonly list: Array<string> = [
        "Tela Super Retina XDR de 6,1 polegadas¹ nítida, vibrante e brilhante",
        "Bateria para o dia todo: até 20 horas de reprodução de video ",
        "Nova câmera grande-angular e processaento de imagem aprimorado para fotos."
    ]

    private readonly title: string = "iphone 14 &\niphone 14 plus ";

    private readonly littleTitle: string = "O aparelho";


    constructor(props: BannerInterface) {
        super(props)
        this.state = {}
    }


    public render(): ReactElement<any> {
        return (
            <section className="banner" style={this.backgroundImage}>
                <div className="container">
                    <TextAndButtons littleTitle={this.littleTitle} title={this.title} list={this.list} />
                </div>
            </section>
        );
    }

}