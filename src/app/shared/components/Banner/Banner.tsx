import { Component, ReactElement } from "react";
import { BannerInterface } from "../../interfaces/banner/banner.interface";
import Button from "../../utils/Button";
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


    constructor(props: BannerInterface) {
        super(props)
        this.state = {}
    }


    public render(): ReactElement<any> {
        return (
            <section className="banner" style={this.backgroundImage}>
                <div className="container">
                    <div className="text-div">
                        <h4>O aparelho</h4>
                        <h1 className="big-title">iphone 14 & <br />
                            iphone 14 plus </h1>
                        <ul>
                            {this.list.map(element => <li>
                                <p>{element}</p>
                            </li>)}
                        </ul>
                        <div className="buttons-div">
                            <Button text="Comprar agora" expClass="blue-button" />
                            <Button text="Ler mais >>>" expClass="arrow-button" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }

}