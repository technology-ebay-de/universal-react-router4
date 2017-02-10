/**
 * index.js
 *
 * (C) 2017 mobile.de GmbH
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 09 Feb 2017
 */
/* eslint-disable no-console */

import express from 'express';
import React from 'react';
import App from '../shared/App';
import NoMatch from '../shared/NoMatch';
import Error from '../shared/Error';
import { StaticRouter as Router, matchPath } from 'react-router';
import sourceMapSupport from 'source-map-support';
import render from './render';
import fetch from 'node-fetch';

const routes = [
    '/',
    '/g/:gistId'
];

sourceMapSupport.install();

const app = express();
app.use('/static', express.static('./dist'));

app.get('*', (req, res) => {
    const match = routes.reduce((acc, route) => matchPath(req.url, route, { exact: true }) || acc, null);
    if (!match) {
        res.status(404).send(render(<NoMatch />));
        return;
    }
    fetch('https://api.github.com/gists')
        .then(r => r.json())
        .then(gists => {
            res.status(200).send(render(
                (
                    <Router context={{}} location={req.url}>
                        <App gists={gists} />
                    </Router>
                ), gists
            ));
        }).catch(err => {
            console.error(err);
            res.status(500).send(render(<Error />));
        });
});

app.listen(3000, () => console.log('Demo app listening on port 3000'));
