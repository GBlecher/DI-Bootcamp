import React from "react";


class ErrorBoundary extends React.Component{
constructor(props){
    super(props)
    this.state = {
        hasError:false,
        error: null,
        errorInfo: null,
      }
}

    static getDerivedStateFromError = (error) => {
        return { hasError: true,    };
    };
    componentDidCatch = (error, errorInfo) => {
        
        this.setState({ 
      error: error,
      errorInfo: errorInfo,
     });
        console.error("Error caught in ErrorBoundary: ", error, errorInfo)
    };
    render() {
        if (this.state.error) {
        
        return (
            <div>
            <h1>Something went wrong.</h1>
            <details style={{ whiteSpace: 'pre-wrap' }}>
                {this.state.error && this.state.error.toString()}
                <br />
                {this.state.errorInfo.componentStack}
            </details>
            </div>
        );
        }
        return this.props.children
    }
}
export default ErrorBoundary