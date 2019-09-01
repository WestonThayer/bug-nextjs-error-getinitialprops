import React from "react"

class Error extends React.Component {
    static getInitialProps() {
        console.log("This will not log, because it was not run");

        return {};
    }

    render() {
        return <p>Error page. I'd like to log the Error, but I cannot</p>
    }
}

export default Error;