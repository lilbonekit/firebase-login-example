import './App.css';
import { Routes, Route } from 'react-router-dom'

import Homepage from './pages/Homepage/Homepage'
import Loginpage from './pages/Loginpage/Loginpage'
import Registerpage from './pages/Registerpage/Registerpage'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Homepage/>}/>
			<Route path='/login' element={<Loginpage/>}/>
			<Route path='/register' element={<Registerpage/>}/>
		</Routes>
	);
}

export default App;
