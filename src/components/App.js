import React from 'react';
import image from '../../public/assets/history.svg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React Application',
    };
  }

  render() {
    const { name } = this.state;
    return (
      <div className="App">
        <h1 className="main-header">
          My
          {name}
        </h1>

        <div>
          <img src={image} alt="react logo" />
        </div>
      </div>
    );
  }
}

export default App;
