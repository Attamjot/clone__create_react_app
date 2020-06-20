import React from 'react';
import image from '../../public/assets/history.svg';

class App extends React.Component {
    render() {
        return (
          <div class="App">
            <h1 className="main-header">My React Component</h1>
            <div>
              <img src={image} alt="react logo" />
            </div>
          </div>
        );
    }
}

export default App;