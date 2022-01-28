import Create from './Tasks/Create';
import './App.css';
import React from 'react';
import Helper from './UI/Helper';

export type Dto = Record<string, string | number | boolean>[];

function App() {
  const [data, setData] = React.useState<Dto>();

  return (
    <div className='wrapper'>
      <Create setDto={setData} />
      <Helper Dto={data} />
    </div>
  );
}

export default App;
