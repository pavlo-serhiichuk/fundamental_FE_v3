import {
  Component, type ErrorInfo, type ReactNode, Suspense,
} from 'react'
import {PageError} from '@/widgets/PageError/PageError'

interface Props {
  children?: ReactNode
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  }

  public static getDerivedStateFromError(_: Error): State {
    return {hasError: true}
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    // eslint-disable-next-line react/destructuring-assignment
    if (this.state.hasError) {
      return (
        <Suspense fallback="">
          <PageError />
        </Suspense>
      )
    }

    return this.props.children
  }
}
