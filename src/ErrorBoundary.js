// ErrorBoundary.js

import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error here or perform other error handling actions
    console.error(error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // You can render an error message or a fallback UI here
      return <p>Something went wrong.</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
