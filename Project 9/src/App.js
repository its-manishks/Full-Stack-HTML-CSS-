import React from 'react';
import Header from './Header';
import Button from './Button';
import UserForm from './UserForm';
import EventDemo from './EventDemo';

function App() {
  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial' }}>
      <Header />
      <h2>React Project 9 — Core, Events & Forms</h2>
      <Button text="Login" color="skyblue" />
      <Button text="Logout" color="salmon" />
      <Button text="Register" />
      <hr />
      <UserForm />
      <EventDemo />
    </div>
  );
}

export default App;
