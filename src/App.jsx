import './App.css';
//import CreateStudent from './component/CreateStudent/CreateStudent';
import Students from './component/Students/Students';
import Teacher from './component/Teacher/Teacher';
import Staff from './component/Staff/Staff';
import CreateStudent from './component/CreateStudent/CreateStudent';
import CreateTeacher from './component/CreateTeacher/CreateTeacher';
import CreateStaff from './component/CreateStaff/CreateStaff';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Home from './component/Home/Home';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
     
     <Routes>
       <Route  exact path="/" element={<Home />}  />
       <Route path='Students' element={<Students />} />
       <Route path='Teacher' element={<Teacher />} />
       <Route path='Staff' element={<Staff />} />
       <Route path='CreateStudent' element={<CreateStudent />} />
       <Route path='CreateTeacher' element={<CreateTeacher />} />
       <Route path='CreateStaff' element={<CreateStaff />} />

     </Routes>
     
    
  </BrowserRouter>
    
    </div>
  );
}

export default App;
