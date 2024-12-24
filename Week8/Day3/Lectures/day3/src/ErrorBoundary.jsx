import React from "react";

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError = (error) => {
    return { hasError: true };
  };

  componentDidCatch = (error, errorInfo) => {
    console.log(error, errorInfo);
    // this.setState({ hasError: true });
  };

  render() {
    if (this.state.error) {
      return(
        <div>
          <h1>Sonething went wrong!!!</h1>
          <p>Error: {this.state.error.message}</p>
        </div>
      )
    }
  }
}
export default ErrorBoundary;
