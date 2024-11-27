import React from "react"

class ErrorBoundary extends React.Component {
  constructor(props: any) {
    super(props)

    // Define a state variable to track whether is an error or not
    this.state = { hasError: false }
  }
  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI

    return { hasError: true }
  }
  componentDidCatch(error: any, errorInfo: any) {
    // You can use your own error logging service here like sentry
    console.log({ error, errorInfo })
  }
  render() {
    // Check if the error is thrown

    if (this.state.hasError) {
      return (
        <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full bg-white">
          <h1 className="font-bold text-gray-400 text-9xl animate__animated animate__bounce">
            404
          </h1>
          <h2 className="text-3xl font-semibold">
            Sorry, something wrong happened.
          </h2>
            <button
              className="mt-5 default-button"
              type="button"
              onClick={() => this.setState({ hasError: false })}
            >
              Try again?
            </button>
        </div>
      )
    }

    // Return children components in case of no error

    return this.props.children
  }
}

export default ErrorBoundary
