import React from 'react';
import { render } from 'react-dom';

import Show from './components/Show';
import List from './components/List';
import Button from './components/Button';
import Media from './components/Media';
import Storage from './components/Storage';

// This one is just for showing that components
// can be children to Media. Dont use it!!!
import Text from './components/Text';

import * as styles from './index.css';

class App extends React.PureComponent {
  state = {
    debug: true,
    buttons: [
      { children: 'Cancel', type: 'ghost' },
      { children: 'Discard', type: 'standard' },
      { children: 'Save Item', type: 'primary' }
    ],
    btnClassName: 'menu-item'
  };

  sayMyName = e => alert(e.target.innerText);

  render() {
    let styleForName = {
      padding: '5px',
      margin: 0
    };
    return (
      <React.Fragment>
        <nav className={styles.menu}>
          <List
            onClick={this.sayMyName}
            className={this.state.btnClassName}
            items={this.state.buttons}
            renderAs={Button}
          />
        </nav>
        <Media direction="reverse" src="https://loremflickr.com/100/100/person">
          <Text size="18px" bgColor="#bada55">
            <strong style={styleForName}>Anonymous User</strong>
          </Text>
          <Text size="12px" color="#ddd">
            <em>A stupid tagline</em>
          </Text>
        </Media>
        <Show when={this.state.debug}>{JSON.stringify(this.state)}</Show>
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById('root'));
