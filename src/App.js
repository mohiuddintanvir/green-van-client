import { BrowserRouter as Router, Route, RouterProvider } from 'react-router-dom';


// import './App.css';
import router from "./component/routers/Routes";


function App() {

  return (
    <div className="  bg-[#2A303C]">
      <RouterProvider router={router}></RouterProvider>
      
    </div>
    
  );
}

export default App;
