import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Layout from './components/Layout';
import "bootstrap/dist/css/bootstrap.min.css"
import Login from './components/pages/login';
import Register from './components/pages/Register';

const App = ()=>{
 return <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<Login/>}/>
      <Route path='/signup' element={<Register/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
  </>
}
export default App;
