//Import generic libs
import React, { Component, ReactNodeArray } from 'react';
import { Collapse, Nav, Navbar, NavbarToggler } from 'reactstrap';

//Import Episerver Libs
import { IEpiserverSpaContext } from 'Episerver/Spa';
import CmsComponent from 'Episerver/Components/CmsComponent';
import ContentArea from 'Episerver/Components/ContentArea';
import Property from 'Episerver/Components/Property';
import Link from 'Episerver/Components/Link';

//Import App
import CmsHomePageData from 'app/Models/Content/CmsHomePageData';

interface HeaderProps {
    startPage: CmsHomePageData
    context: IEpiserverSpaContext
    path: string
}
interface HeaderState {
    isOpen: boolean
}

export default class Header extends Component<HeaderProps, HeaderState>
{
    public constructor(props: HeaderProps)
    {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    public render(): ReactNodeArray | null
    {
        return [<header key="MoseyHeader">
            <div className="header-top bg-secondary text-white">
                <div className="container">
                    <div className="row">
                        <div className="col text-center pt-3"><Property iContent={this.props.startPage} property="bannerText" context={this.props.context} /></div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col"></div>
                    <div className="col py-4 d-flex justify-content-center">
                        <Link href={this.props.startPage.contentLink}>
                            <Property iContent={this.props.startPage} property="siteLogo" context={this.props.context} />
                        </Link>
                    </div>
                    <div className="col py-4 d-flex">
                    </div>
                </div>
            </div>
        </header>,
        <Navbar expand="lg" key="NewMoseyHeaderNav" dark color="primary" className="sticky-top">
            <div className="container">
                <NavbarToggler onClick={ () => this.setState({isOpen: !this.state.isOpen})} />
                <Collapse isOpen={ this.state.isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <ContentArea context={ this.props.context } data={ this.props.startPage.mainMenu } noWrap={ true } />
                    </Nav>
                </Collapse>
            </div>
        </Navbar>
        ]
    }
}