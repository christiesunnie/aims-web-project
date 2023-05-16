# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### React Best Practices

•	Keep your components small and reusable. This will make your code more modular and easier to maintain.
•	Use functional components instead of class components whenever possible. Functional components are simpler and easier to read.
•	Use hooks (such as useState and useEffect) to manage state and side effects.
•	Use PropTypes or TypeScript to type check your props and state.
•	Avoid using inline styles.
•	Follow the "one responsibility per file" rule. Each file preferebaly should contain only one component or module.
•	Use meaningful names for your components and variables.
•	Write tests for your components and functionality.

### Naming Conventions

•	Component names should start with a capital letter. This makes it easy to distinguish between components and regular HTML elements when reading the code. For example, MyComponent instead of myComponent.
•	Use descriptive, meaningful names for components. This helps to make your code more readable and maintainable. For example, LoginForm instead of Login.
•	Use camelCase for prop names. This is consistent with JavaScript naming conventions. For example, userName instead of username.
•	Use kebab-case for CSS class names. This is a common convention in CSS. For example, button-primary instead of buttonPrimary.
•	Use a consistent naming convention for files. For example, you might choose to use PascalCase for component files (MyComponent.js) and kebab-case for other files (app.css).
•	Use prefixes or suffixes to indicate the type of file. For example, you might use ComponentName.js for component files, index.js for index files, and styles.css for CSS files.



## State management

A list of useful documentation about conventions in state management.

## Preface

We are using [Redux](https://redux.js.org/api) a state management tool to centralize the state in amis-web application. The state of the application is updated unidirectional by actions. Actions must be descriptive and should included all the needed information to make debugging easier. The view layer uses actions to request an update to the state and they get informed if there is any updates in any part of the sta

### Actions

Actions are plain object (for serialization purposes). Actions must have at least `type` property that must be unique per application. Keep in mind that any data type that is not serializable (including classes and functions) should NOT be part of actions and their payloads.

If you want to know more about actions in Redux library you should read [this docs](https://redux.js.org/basics/actions).

### Action creators

Action creators are plain functions that accept some arguments, structure the body of action and return plain objects that comply to Redux model. Action creators are not necessary but make the job easier to create standard actions.

If you want to know more about action creators in Redux library you should read [this docs](https://redux.js.org/basics/actions#action-creators).

#### Naming convention

Action creators usually have a simple name to describe their use-case. Look at the below list to examples:

-   Simple interactions:
    It would have only one action that takes an object as its argument and update the model accordingly. Usually prefixed with `update` for example `updateMyForm({ myFirstField: 'my-name' })`
-   Interaction with API and BE resources:
    Fetching/Adding/Updating/Deleting backend resources via API is never 100% guaranteed that is why actions for such these interactions are scenario-like that have multiple steps.
    First action is a normal and then it follows up with others to complete the scenario. We suffix the following ones with appropriate terms (such as `success` or `fail` to emphasize the result.)