## React-redux-template

#### This template uses:

- React
- Redux
- TypeScript
- Redux-thunk
- Scss
- Persisted store
- React-modal
- Airbnb eslint setup and basic prettier config

#### Webpack build includes:

- Aliases
- Chunk splitting
- Hot reload
- Analyzing bundle size tool

##### Template have following PageSpeed Insights test results:

_<details><summary> Show performance</summary>_

![PageSpeed Insights](/public/performance.png)

</details>

#### Installation

1. `git clone git@github.com:Revolt9k/react-redux-template.git`
2. ` cd .\react-redux-template\`
3. `yarn` / `npm install`

#### Usage

1. `yarn start` will run project on localhost:3000.

Three is already initialized store with example reducer and some basic components.

_<details><summary> Troubleshooting </summary>_

`Uncaught ReferenceError: $RefreshSig$ is not defined` on `yarn prod`

Don't forget to disable options (comment lines 61-68) in `webpack.config.js` to disable hot reload module.

Related to https://github.com/pmmmwh/react-refresh-webpack-plugin/issues/92.

</details>
