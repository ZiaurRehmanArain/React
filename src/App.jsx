import logo from './logo.svg';
import './App.css';
import Login from './component/Login';
import Profile from './component/Profile';
import UserContextProvider from './context/UsercontextProvider';

function App() {
  return (

    <>
    <UserContextProvider>

    <h1>React video for context</h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
    </>
  );
}

export default App;
