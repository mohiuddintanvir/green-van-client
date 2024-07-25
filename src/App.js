import { BrowserRouter as Router, Route, RouterProvider } from 'react-router-dom';


// import './App.css';
import router from "./component/routers/Routes";
import { ToastContainer } from 'react-toastify';


function App() {

  return (
    <div className="  bg-[#2A303C]">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </div>
    
  );
}

export default App;
