import {

  RouterProvider,

} from "react-router-dom";

import './App.css';
import router from "./component/routers/Routes";

function App() {

  return (
    <div className="max-w-[1800px] justify-center">
      <RouterProvider router={router}></RouterProvider>
    </div>
    
  );
}

export default App;
