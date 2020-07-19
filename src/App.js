import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './route';
import Layout from './components/Layout';
import styles from './App.css';

const App = () => {
  return (
    <div className={styles.App}>
        <BrowserRouter>
          <Layout>
            <Routes />
          </Layout>
        </BrowserRouter>
    </div>
  );
}

export default App;
