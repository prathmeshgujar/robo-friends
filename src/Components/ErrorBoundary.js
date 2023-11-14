import React from "react";

class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(){
        this.setState({hasError: true});
    }

    render(){
        if(this.state.hasError){
            return <h1>Oops....that is not good</h1>;
        }
        return this.props.children; //will return anything between error boundry component
    }
}

export default ErrorBoundary;