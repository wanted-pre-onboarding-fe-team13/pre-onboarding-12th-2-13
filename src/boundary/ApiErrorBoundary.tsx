import { Component, ErrorInfo, ReactNode } from 'react';

type FallbackProps<ErrorType extends Error = Error> = {
  error: ErrorType;
  reset: (...args: unknown[]) => void;
};

type FallbackType = <ErrorType extends Error>(props: FallbackProps<ErrorType>) => ReactNode;

interface Props {
  children?: ReactNode;
  fallback: FallbackType;
}

interface State {
  shouldHandleError: boolean;
  shouldRethrow: boolean;
  error: Error | null;
}

const initialState: State = {
  shouldHandleError: false,
  shouldRethrow: false,
  error: null,
};

class ApiErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = initialState;
  }

  public static getDerivedStateFromError(error: Error): State {
    // 토큰 오류 - rethrow (해결불가)
    if ([401, 403, 404].includes(error.code)) {
      return {
        shouldHandleError: false,
        shouldRethrow: true,
        error,
      };
    }
    return {
      shouldHandleError: true,
      shouldRethrow: false,
      error,
    };
  }

  public static componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  resetErrorBoundary = () => {
    this.setState(initialState);
  };

  render() {
    const { error, shouldRethrow, shouldHandleError } = this.state;
    const { fallback, children } = this.props;

    if (shouldRethrow) {
      throw error;
    }

    // retry 할 수 있는 에러
    if (shouldHandleError && error) {
      return fallback({ error, reset: this.resetErrorBoundary });
    }

    if (!shouldHandleError) {
      return children;
    }
  }
}

export default ApiErrorBoundary;
