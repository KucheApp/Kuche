import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const styles = {
  navLeft: {
    float: 'left',
    backgroundColor: 'white',
    maxwidth: '175px',
    minWidth: '176px',
    minHeight: '150px',
  },
}

class Navbar extends Component {
  render() {
      return (
        <div>
          <div className="pos-f-t w-25 mw-25">
          <div className="collapse" id="navbarToggleExternalContent">
            <div className="bg-dark p-4">
              <h4 className="text-white">Collapsed content</h4>
              <span className="text-muted">Toggleable via the navbar brand.</span>
            </div>
          </div>
          <nav className="navbar navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </nav>
          </div>
        </div>
      );
    }
  }

export default Navbar;