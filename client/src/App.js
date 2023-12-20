import { Routes, Route} from 'react-router-dom'
import { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { AuthCheckAction } from './redux/actions/auth.action'
import RegLog from './components/reg';
import Profile from './components/profile';
import People from './components/people';

function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    if (localStorage.getItem('tokenX')) {
      dispatch(AuthCheckAction())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return <>
    <Routes>
      <Route path='/' element={<RegLog />}/>
      <Route path='/account' element={<Profile/>}/>
      <Route path='/people' element={<People/>}/>
      <Route path='/*' element={<>404 Page not found</>}/>
    </Routes>
  </>

}

export default App;
