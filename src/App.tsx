import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

import './App.css';

import { Dashboard, Detail, Home, ContactUs } from './pages';

class App extends React.Component {
  state = {
    guests: [],
  }

  render() {
    return (
      <Router>
        <div style={{ padding: 30 }}>
          <Menu secondary>
            <Menu.Item name="home">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item name="contact-us">
              <Link to="/contact-us">Contact Us</Link>
            </Menu.Item>
            <Menu.Item name="dashboard">
              <Link to="/dashboard">Dashboard</Link>
            </Menu.Item>
          </Menu>

          <Route path="/" exact component={Home} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/detail/:city" component={Detail} />
          <Route path="/dashboard" component={Dashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
