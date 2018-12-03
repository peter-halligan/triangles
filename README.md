This project contains an api, a react front end and a cli. each can be run independently.
The project has been set up to run all unit tests before a push and will run linters prior to a commit.

Jest has been used as a test runner and storybook was used to develop the frontend components.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner and will output the coverage for both the api and the client.<br>

### ` npm client`

will launch the client

### `npm server`

will launch the api

### `npm start`

will run both the server and client

### `npm install`

npm install at this level will install all dependencies for api, client and tools, it will also install dependencies
which are used for linting and testing in git hooks.