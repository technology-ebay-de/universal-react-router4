/**
 * Main.js
 *
 * (C) 2017 mobile.de GmbH
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 09 Feb 2017
 */
import React from 'react';

const style = {
    padding: '16px',
    flex: '1'
};

export default ({ children }) => (
    <main style={style}>{children}</main>
);

