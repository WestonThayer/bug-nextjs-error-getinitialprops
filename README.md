Demonstrates a bug where an error is thrown at the top level of a page on the client side. `_error.js` is rendered, but does not have `getInitialProps` invoked, so information about the error is not availible to it as it normally would. To reproduce:

1. Clone this project and `yarn install`, `yarn build`, `yarn start` (custom `_error.js` is only used in a production build, so `yarn dev` won't work)
2. Open `localhost:3000` and check the browser console

ACTUAL: Just the error is logged to the console
EXPECTED: We should see the error then the log from `_error.js`'s `getInitialProps`: `"This will not log, because it was not run"`