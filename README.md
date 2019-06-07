## Calculator - A simple calculator

### Coded using
- React 16
- Typescript 3.5.1
- Jest & Enzyme
- Development server provided by `create-react-app` running on node 10.15.1

### Known issues
- Length of characters allowed is not restricted and longer values break the UI.
- I have tested most functionality but not to the depth I would usually like.
    - No E2E tests
    - Unit tests are simple
    - Acceptance tests are simple
    
### If I had longer I would...
- Limit screen length to 9 characters
- Add further functionality (Square roots, powers etc.)
- Expand tests to include some more complex calculations
- Expand on the logic to use a functional composition model to build up a calculation.

### Project structure
All project related files are in the `./src` directory. The project structure is simple with the `App` component containing the high level logic and composes the calculator view.

#### Styled components
- Button - All calculator buttons use this
- Layout - The calculator layout
- Row - A row of buttons
- Screen - The calculator screen

## Available Scripts

### `npm start`

Runs the app, open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

