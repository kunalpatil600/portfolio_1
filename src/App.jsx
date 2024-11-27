import './App.css';
import AllRoutes from './Component/AllRoutes';

import CustomCursor from './Component/CustomCursor';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (

    <div className="App text-white" style={{backgroundColor:"#0E090D"}}>
       <AllRoutes/>
      <CustomCursor/>
    </div>
  );
}

export default App;
