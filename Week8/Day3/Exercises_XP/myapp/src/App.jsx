
import BuggyCounter from './components/BuggyCounter'
import ErrorBoundary from './components/ErrorBoundary'
import './App.css'
import Color from './components/Color'
function App() {

  return (
    <>
      <div>
      <ErrorBoundary>
        <BuggyCounter/>
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter/>
      </ErrorBoundary>

      <Color/>
      </div>
      
    </>
  )
}

export default App
