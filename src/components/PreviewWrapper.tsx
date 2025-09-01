
'use client'

import { Component, ErrorInfo, ReactNode } from 'react'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-red-50 border border-red-200 rounded-md">
          <h2 className="text-lg font-semibold text-red-600">Something went wrong</h2>
          <p className="text-red-500">The component failed to render. Please try again later.</p>
        </div>
      )
    }

    return this.props.children
  }
}

interface PreviewWrapperProps {
  children: ReactNode
}

export default function PreviewWrapper({ children }: PreviewWrapperProps) {
  return (
    <ErrorBoundary>
      <div className="preview-container">
        {children}
      </div>
    </ErrorBoundary>
  )
}

