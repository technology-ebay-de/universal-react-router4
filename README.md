# universal-react-router4

A Demo app showing how to use react-router v4 for server- and client-side rendering.

Similar to the demo app [Ryan Florence](https://github.com/ryanflorence) shows in his 
[introductory video for react-router 4](https://www.youtube.com/watch?v=a4kqMQorcnE), this app fetches data
about Gists from the GitHub API and displays them. The difference is that in this demo, the markup of the page 
is initially rendered on the server side, and when the user clicks on one of the links, the Gist data is rendered
on the client side without another request to the server, using the same React components and react-router link
elements that the backend is using (hence “universal”).

## How to Run

You should have a current version of [Node.js](https://nodejs.org/) installed. Version 6.9 is recommended.

Install the node modules used by the application:

    npm install
    
Build JavaScript bundles for the server- and client-side code using webpack:

    npm run build
    
Run the application:

    npm start
    
You can then go to [localhost:3000](http://localhost:3000/) in your favorite browser to see the Gists.

## Local Development

To speed up local development when working on the source code, you can start the application in watch mode.

You need to run each of the following commands in a separate terminal.

To automatically rebuild the client JavaScript bundle when client source code changes:

    npm run dev:client
    
To automatically rebuild the server JavaScript bundle when client source code changes:

    npm run dev:server
    
To run the server and automatically restart it when the server bundle changes:

    npm run dev:start
    
## License

Published under the [MIT License](LICENSE.md).

Copyright &#xa9; 2017 mobile.de GmbH

