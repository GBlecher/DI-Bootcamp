import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  componentDidCatch = (error, errorInfo) => {
    console.log(error, errorInfo);
    this.setState({ hasError: true });
  };

  render(){
    if (this.state.error) {
    return(
      <div>
        <h1>Sonething went wrong!!!</h1>
        <p>Error: {this.state.error.message}</p>
      </div>
    )
  }
  return this.props.children;
}
}

export default ErrorBoundary
