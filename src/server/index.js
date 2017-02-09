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
import { renderToStaticMarkup } from 'react-dom/server';
import App from '../shared/App';
import { StaticRouter as Router } from 'react-router';
import sourceMapSupport from 'source-map-support';

sourceMapSupport.install();

const app = express();
app.use(express.static('./dist'));

app.get('/', (req, res) => res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Universal React Router 4 Demo</title>
    <style>
        body {
            font-family: Helvetica Neue, Arial, sans-serif;
            margin: 0;
        }
        html { box-sizing: border-box; }
        *, *:before, *:after { box-sizing: inherit; }
    </style>
</head>
<body>
    <div id="app">
        ${renderToStaticMarkup(
            <Router context={{}} location={req.url}>
                <App />
            </Router>
        )}
    </div>
    <script src="client.js"></script>
</body>
</html>
`));

app.listen(3000, () => console.log('Demo app listening on port 3000'));
