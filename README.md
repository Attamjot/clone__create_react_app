I am creating a clone of create-react-app with most of the features.

### `Babel Plugins & Presets`

* **@babel/cli:** Babel comes with a built-in CLI which can be used to compile files from the command line.
* **@babel/core:** Core file contains most of the plugings to help transpile.
* **@babel/node:** babel-node is a CLI that works exactly the same as the Node.js CLI, with the added benefit of compiling with Babel presets and plugins before running it.
* **@babel/preset-env:** @babel/preset-env is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms
* @babel/runtime
* core-js
* babel-loader
* @babel/preset-react
* @babel/plugin-proposal-class-perperties

### `Loaders To support sass and css`
1. style-loader
2. css-loader
3. sass-loader

- Plugin to extract the css from the javascript`
    4. mini-css-extract-plugin
 
### `Loaders To support Images`
5. html-loader
6. file-loader

### `Plugin to clean the dist folder before build`
7. clean-webpack-plugin

### `Eslint Dependencies and integration with react & prettier`
8. eslint
9. eslint-config-airbnb
10. eslint-config-prettier
11. eslint-plugin-html
12. eslint-plugin-import
13. eslint-plugin-jsx-a11y
14. eslint-plugin-prettier
15. eslint-plugin-react
16. eslint-plugin-react-hooks
17. prettier

### `Pre-commit tools`
18. husky -- updated
19. lint-staged -- updated configuration

### `webpack dependencies`

20. webpack
21. webpack-cli
22. webpack-dev-server

### `React Dependencies`

23. react
24. react-dom

