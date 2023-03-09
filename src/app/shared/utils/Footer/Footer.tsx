import { Component, ReactElement } from "react";
import styled from "styled-components";
import { Container } from "../../../../assets/css/GlobalStyles";
import { secondaryColor } from "../../../../assets/main/main";
import Divider from "../Divider";
import IconButton from "../IconButton";
import Link from "../Link";
import { footerList } from "../variables/footer-list/footerlist";
import { SocialMediaInterface } from "../variables/social-media/interface/social-media.interface";
import { socialMedia } from "../variables/social-media/social-media";

const StyledFooter: any = styled.footer`
    background: ${secondaryColor};
    padding: 100px 0;
    width: 100%;
    margin-top: 50px;
`;

const StyledContainer: any = styled(Container)`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const FooterImage: any = styled.img`
    filter: invert(100%);
`;

const DividerDiv: any = styled.div`
    width: 100%;
`;

const ImageAndText: any = styled.div`
    width: 25%;

    p {
        color: #000;
    }   
`;

const SocialMedia: any = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    align-items: center;
    margin-top: 50px;

    img {
        filter: invert(0%);
    }
`;

const FooterList: any = styled.ul`
    list-style: none;
`;

export class Footer extends Component<any> {

    private readonly socialMedia: Array<SocialMediaInterface> = socialMedia;

    private readonly footerList: Array<string> = footerList

    constructor(props: any) {
        super(props)
        this.state = {}
    }

    public render(): ReactElement<any> {
        return (
            <StyledFooter>
                <StyledContainer>
                    <ImageAndText>
                        <FooterImage src="/images/logo.svg" alt="" />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        <SocialMedia>
                            {this.socialMedia.map((element: SocialMediaInterface) => <IconButton key={element.name} invert={false} icon={element.src as string} />)}
                        </SocialMedia>
                    </ImageAndText>
                    <div>
                        <FooterList>
                            {this.footerList.map((element: string) => <li key={element}>
                                <Link text={element} color="#000" />
                            </li>)}
                        </FooterList>
                    </div>
                    <DividerDiv>
                        <Divider />
                    </DividerDiv>
                </StyledContainer>
            </StyledFooter>
        );
    }

}
