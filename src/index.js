import React from 'react';
import { render } from 'react-dom';

import Show from './components/Show';
import List from './components/List';
import Button from './components/Button';
import './index.css';

class App extends React.PureComponent {
  state = {
    debug: false,
    buttons: [
      { children: 'Cancel', type: 'ghost' },
      { children: 'Discard', type: 'standard' },
      { children: 'Save Item', type: 'primary' }
    ],
    btnClassName: 'menu-item'
  };

  sayMyName = e => alert(e.target.innerText);

  render() {
    return (
      <React.Fragment>
        <nav className="menu">
          <List
            onClick={this.sayMyName}
            className={this.state.btnClassName}
            items={this.state.buttons}
            renderAs={Button}
          />
        </nav>
        <Show when={this.state.debug}>
          {JSON.stringify(this.state.buttons)}
        </Show>
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById('root'));
