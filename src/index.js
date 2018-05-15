import React from 'react';
import { render } from 'react-dom';

import Show from './components/Show';
import List from './components/List';
import Button from './components/Button';
import './index.css';

class App extends React.PureComponent {
  state = {
    buttons: [
      { children: 'Cancel', type: 'ghost' },
      { children: 'Discard', type: 'standard' },
      { children: 'Save Item', type: 'primary' }
    ],
    className: 'menu-item'
  };

  sayMyName = e => alert(e.target.innerText);

  render() {
    return (
      <Show when={this.state.buttons.length > 0}>
        <nav className="menu">
          <List
            onClick={this.sayMyName}
            className={this.state.className}
            items={this.state.buttons}
            renderAs={Button}
          />
        </nav>
      </Show>
    );
  }
}

render(<App />, document.getElementById('root'));
