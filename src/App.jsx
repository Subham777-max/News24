import './App.css'
import AppErrorBoundary from './Components/ErrorBoundary/ErrorBoundary'
import Router from './Router/Router'

function App() {


  return (
    <>
      <AppErrorBoundary>
        <Router />
      </AppErrorBoundary>
    </>
  )
}

export default App;
