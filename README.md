## Calculator - A simple calculator

version number: `627d7be039e0085025a51d47e42bdd970409ec1c`

### Installation
`yarn` or `npm install`

#### `npm start`

Runs the app, open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### `npm test`

Launches the test runner in the interactive watch mode.<br>

### Coded using
- React 16
- Typescript 3.5.1
- Jest & Enzyme
- Development server provided by `create-react-app` running on node 10.15.1

### Why I used TypeScript
Some people see the inclusion or use of TS as unnecessary. I use typescript in most projects I work with for the following reasons:
- Strongly typed code is less error prone, for me this reduces mental overhead when coding.
- In React, the ability to apply readonly and DeepReadOnly types to state (especially with redux stores) has a huge benefit ensuring that state is never mutated accidentally.
- When using TS correctly and ensuring type inference is the standard typing method the code is extremely expressive, especially so in IDE's that compile TS.
- Last but not least, I am proficient with it and it does not add any time overhead to projects I use with it.

### Test coverage
- library: 100% coverage
- styled: 100% coverage
- App.tsx: 91% coverage

### Known issues
- Length of characters allowed is not restricted and longer values break the UI.
- I have tested most functionality but not to the depth I would usually like.
    - No E2E tests
    - Unit tests are simple
    - Acceptance tests are simple
    
### If I had longer I would...
- No clear screen on click of operator, the operator symbol would display instead, on input of another integer / value the screen would clear.
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

