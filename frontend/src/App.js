import React from 'react';
import './App.css';
import { postRoutes } from './routes/routes'

function App() {

  return(
    <React.Fragment>
      {postRoutes}
    </React.Fragment>
  );
}

export default App;
