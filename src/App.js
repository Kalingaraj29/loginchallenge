import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Signuppage from './Pages/SignupPage/Signuppage';
import Loginpage from './Pages/LoginPage/Loginpage';
import Welcomepage from './Pages/WelcomePage/Welcomepage';


function App() {
  const router = createBrowserRouter([
    {
      path:"/",element:<Loginpage/>
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
