import React from 'react';
import './App.css';
import Button from './button';
import CornerBox from './corner-box';

const App: React.FC = () => {

  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <div className="corner-box">
        <CornerBox open={open} setOpen={setOpen} />
      </div>
      <div className="corner-box">
          <Button setOpen={setOpen} open={open} />
      </div>
    </React.Fragment>
  );
}

export default App;
