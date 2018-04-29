import React from 'react';
import GitHubRefComponent from '../Components/GitHubRefComponent'

class HeaderContainer extends React.Component {


  render() {
    return(
      <div className="header-wrapper">
        <GitHubRefComponent />
      </div>
    );
  }
}

export default HeaderContainer;
