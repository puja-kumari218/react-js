import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'
import './index.css'

function App() {

  return (
    <UserContextProvider>
    <h1>Context Learn</h1>
    <Login/>
    <Profile/>
    
    </UserContextProvider>
  )
}

export default App
