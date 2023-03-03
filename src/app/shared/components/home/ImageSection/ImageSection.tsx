import { Component, ReactElement,CSSProperties } from "react";
import { ImageSectionInterface } from "../../../interfaces/image-section/image-section.interface";
import TextAndButtons from "../../../utils/TextAndButtons";
import "./ImageSection.css";

export class ImageSection extends Component<ImageSectionInterface> {

    private readonly backgroundImage: CSSProperties = {
        'backgroundImage': `url(${this.props.src})`,
        'flexDirection': this.props.direction && this.props.direction.length > 0 ? this.props.direction : ('start' as any)
    } 


    constructor(props: ImageSectionInterface) {
        super(props)
        this.state = {}
    }


    public render(): ReactElement<any> {
        return (
            <section className="image-section" style={this.backgroundImage}>
                <div className="container">
                    <TextAndButtons title={this.props.title} text={this.props.text} list={this.props.list} littleTitle={this.props.littleTitle} />
                </div>
            </section>
        );
    }

}