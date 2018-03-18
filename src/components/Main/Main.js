import React from 'react';
import './Main.css';
import Button from '../Button/Button';

const Main = () => {
  return (
    <main className="main">
      <div className="main__btnGroup">
        <Button btnText="people" />
        <Button btnText="planets" />
        <Button btnText="vehicles" />
      </div>
    </main>
  );
};

export default Main;