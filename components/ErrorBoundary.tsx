import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // FIX: Replaced optional chaining (?.) with a ternary operator to prevent potential parsing errors with older toolchains, which could cause misleading errors later in the file.
      const errorMessage = this.state.error ? this.state.error.message.toLowerCase() : '';
      const isRateLimitError =
        errorMessage.includes('rate exceeded') ||
        errorMessage.includes('429') ||
        errorMessage.includes('too many requests');

      if (isRateLimitError) {
        return (
          <div className="flex items-center justify-center h-screen bg-brand-bg font-sans">
            <div className="text-center p-8 bg-brand-surface rounded-lg shadow-md max-w-md mx-4">
              <h1 className="text-2xl font-bold text-orange-600 mb-4">Rate Limit Exceeded</h1>
              <p className="text-brand-secondary mb-4">
                We're currently experiencing high traffic. Please wait a moment before trying again.
              </p>
              <p className="text-xs text-gray-400 mb-6">Error code: 429 Too Many Requests</p>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-brand-primary text-white rounded-md hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-opacity-50"
              >
                Try Again
              </button>
            </div>
          </div>
        );
      }

      return (
        <div className="flex items-center justify-center h-screen bg-brand-bg font-sans">
          <div className="text-center p-8 bg-brand-surface rounded-lg shadow-md max-w-md mx-4">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Oops! Something went wrong.</h1>
            <p className="text-brand-secondary mb-4">We've encountered an unexpected issue. Please try refreshing the page.</p>
             <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-brand-primary text-white rounded-md hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-opacity-50"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
