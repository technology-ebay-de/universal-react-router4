/**
 * App.js
 *
 * (C) 2017 mobile.de GmbH
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 09 Feb 2017
 */
import React, { Component } from 'react';
import 'whatwg-fetch';
import Sidebar from './Sidebar';
import SidebarItem from './SidebarItem';
import Main from './Main';
import Gist from './Gist';
import Home from './Home';
import { Link, Route } from 'react-router-dom';

const style = {
    display: 'flex',
    alignItems: 'stretch'
};

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gists: null
        };
    }

    componentDidMount() {
        fetch('https://api.github.com/gists')
            .then(res => res.json())
            .then(gists => this.setState({ gists }));
    }

    render() {
        const { gists } = this.state;
        return (
            <div style={style}>
                <Sidebar>
                    {
                        gists ? gists.map(gist => (
                                <SidebarItem key={gist.id}>
                                    <Link to={`/g/${gist.id}`}>
                                        {gist.description || '[no description]'}
                                    </Link>
                                </SidebarItem>
                            )) : (<div>Loading…</div>)
                    }
                </Sidebar>
                <Main>
                    <Route path="/" exact component={Home} />
                    {
                        gists && (
                            <Route path="/g/:gistId" render={
                                ({ match }) => (
                                    <Gist gist={gists.find(g => g.id === match.params.gistId)} />
                                )
                            } />
                        )
                    }
                </Main>
            </div>
        );
    }
}
