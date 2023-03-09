import { Component, ReactElement } from "react";
import styled from "styled-components";
import { Container } from "../../../../assets/css/GlobalStyles";
import Navs from "../../components/home/navbar/Navs";
import { HeaderInterface } from "../../interfaces/header/header.interface";
import IconButton from "../IconButton";

const StyledHeader: any = styled.header`
    width: 100%;
    height: 70px;
    position: absolute;
`;

const Icons: any = styled.div`
    display: flex;
    justify-content: space-between;
`;

const StyledContainer: any = styled(Container)`
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
    height: 100%;
`;

const StyledNavs: any = styled.div`
    width: 40%;
`;

const Logo: any = styled.img`
    width: 41px;
    cursor: pointer;
`;

export class Header extends Component<HeaderInterface> {

    constructor(props: HeaderInterface) {
        super(props)
        this.state = {}
    }

    public render(): ReactElement<any> {
        return (
            <StyledHeader>
                <StyledContainer>
                    <Logo src="/images/logo.svg" alt="apple logo" />
                    <StyledNavs>
                        <Navs navs={this.props.navs} />
                    </StyledNavs>
                    <Icons>
                        {this.props.icons ? this.props.icons.map((element: string) => <IconButton key={element} icon={element} />) : ''}
                    </Icons>
                </StyledContainer>
            </StyledHeader>
        );
    }

}