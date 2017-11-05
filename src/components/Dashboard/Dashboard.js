import React from 'react';
import UsersContainer from '../UsersContainer/UsersContainer';
import AddUser from '../AddUser/AddUser';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <main className="Dashboard">
      <section className="Dashboard-header">
        <h1 className="Dashboard-title">Welcome to Tictail Dashboard</h1>
      </section>
      <AddUser />
      <UsersContainer />
    </main>
  );
}

export default Dashboard;
