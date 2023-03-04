import { Component, ReactElement } from "react";
import Divider from "../Divider";
import IconButton from "../IconButton";
import Link from "../Link";
import { footerList } from "../variables/footer-list/footerlist";
import { SocialMediaInterface } from "../variables/social-media/interface/social-media.interface";
import { socialMedia } from "../variables/social-media/social-media";
import "./Footer.css";

export class Footer extends Component<any> {

    private readonly socialMedia: Array<SocialMediaInterface> = socialMedia;

    private readonly footerList: Array<string> = footerList

    constructor(props: any) {
        super(props)
        this.state = {}
    }

    public render(): ReactElement<any> {
        return (
            <footer>
                <div className="container">
                    <div className="image-and-text">
                        <img src="/images/logo.svg" alt="" />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        <div className="social-media">
                            {this.socialMedia.map((element: SocialMediaInterface) => <IconButton key={element.name} invert={false} icon={element.src as string} />)}
                        </div>
                    </div>
                    <div className="footer-list">
                        <ul>
                            {this.footerList.map((element: string) => <li>
                                <Link text={element} color="#000" />
                            </li>)}
                        </ul>
                    </div>
                    <div className="divider-div">
                        <Divider />
                    </div>
                </div>
            </footer>
        );
    }

}
