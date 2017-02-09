/**
 * Sidebar.js
 *
 * (C) 2017 mobile.de GmbH
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 09 Feb 2017
 */
import React from 'react';

const style = {
    padding: '16px',
    backgroundColor: '#eee',
    width: '300px',
    height: '100vh',
    overflow: 'scroll'
};

export default ({ children }) => (<aside style={style}>{children}</aside>);
