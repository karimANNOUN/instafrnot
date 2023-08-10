
import { Box } from '@mui/material';
import './App.css';
import { Header } from './components';
import { AllRoutes } from './pages';
import { useSelector } from 'react-redux';


function App() {
  const user = useSelector(state=>state.app.authUser)
  return (
    <div className="App" >
      <Box sx={{display:'flex' , flexDirection:{ xs:'column' ,md:'row'}}} >
      { user.id === undefined ? "" : <Box sx={{height:{ xs:'4%' ,md:'100%'} ,width:{ xs:'100%' ,md:'17%'} }}>
       <Header/>
      </Box>}
      <Box sx={{height:{ xs:'90%',md:'100%'} ,width:{ xs:'100%',md:'83%'}}}>
     <AllRoutes/>
     </Box>
     </Box>
    </div>
  );
}

export default App;
