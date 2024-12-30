import {Routes,Route} from 'react-router-dom';
import Header from './Header'
import Button from './Button'
import News from './News'
import Sports from './Sports'
import Gaming from './Gaming'
import Movies from './Movies'
import Shorts from './Shorts';

function App() {
    
    return (
            <Routes>
                {/* <Route path='/Header' element={<Store/>}/> */}
                <Route path="/" element={<Header/>}/>
                <Route path='/Button' element={<Button/>}/>
                <Route path='/News' element={<News/>}/>
                <Route path='/Sports' element={<Sports/>}/>
                <Route path='/Gaming' element={<Gaming/>}/>
                <Route path='/Movies' element={<Movies/>}/>
                <Route path='/Shorts' element={<Shorts/>}/>
            </Routes>
    )
}

export default App;
