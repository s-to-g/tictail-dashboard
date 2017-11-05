# Tictail Recruiting Assignment - my thoughts

## The application
I wrote the application in [React.js](https://facebook.github.io/react/) and I used [Redux](http://redux.js.org/) to manage the state of the application.
I have used [Sass](http://sass-lang.com/) as css preprocessor.
I also used the HTTP client library (axios)[https://www.npmjs.com/package/axios] for simple HTTP requests to the REST API.
I used (prop-types)[https://www.npmjs.com/package/prop-types] to document and typecheck the props sent to the different components.

## Create react app
I chose to use bootstrap the tictail dashboard with [Create React App](https://github.com/facebookincubator/create-react-app) . I made this decision so I could focus, the time spent on this assignment, on coding rather then setting up the build configuration with Webpack, Babel, ESLint, Autoprefixer etc.

## CORS
Due to the API server not having CORS headers implemented, I needed to enable Cross-Origin Resource Sharing in some way. Implementing a server side proxy that I would make requests to and that would have made requests to the API server could have been an option, but i chose to use the chrome plugin [Allow-Control-Allow-Origin](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/reviews?hl=en) https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/reviews?hl=en since I thought it was more within the scope of this assignment.
