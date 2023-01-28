import logo from './logo.svg';
import './App.css';
import Todo from './Components/Todo';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <Box className="App"  backgroundImage={
      'url(https://png.vector.me/files/images/1/1/111945/sticky_note_pad_clip_art.jpg)'
      }
      backgroundSize={'cover'}
    backgroundPosition={'center center'}  >
      <Todo/>
    </Box>
  );
}

export default App;
