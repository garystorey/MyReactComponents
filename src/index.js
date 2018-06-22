import React from 'react';
import { render } from 'react-dom';

import Show from './components/utils/Show';
import List from './components/utils/List';
import ListAsChildren from './components/utils/ListAsChildren';
import Grid, { Row } from './components/utils/Grid';

import Button from './components/presentational/Button';
import Media from './components/presentational/Media';

// This one is just for showing that components
// can be children to Media. Dont use it!!!
import Text from './components/presentational/Text';

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
    let rowStyle = {
      justifyContent: 'flex-end'
    };

    return (
      <React.Fragment>
        <Grid.Row>
          <Grid.Column />
          <Grid.Column className="col50">
            <Media
              direction="standard"
              src="https://loremflickr.com/100/100/person"
            >
              <Text size="2.2rem" bgColor="var(--primary)">
                <strong style={styleForName}>Anonymous User</strong>
              </Text>
              <Text size="1.8rem" color="#333">
                <em style={styleForName}>A stupid tagline</em>
              </Text>
              <Row style={rowStyle}>
                <nav className={styles.menu}>
                  <List
                    onClick={this.sayMyName}
                    className={this.state.btnClassName}
                    items={this.state.buttons}
                    renderAs={Button}
                  />
                </nav>
              </Row>
            </Media>
          </Grid.Column>
          <Grid.Column />
        </Grid.Row>
        <Row>
          <Show when={this.state.debug}>
            <ListAsChildren items={this.state.buttons}>
              {item => (
                <span
                  className={this.state.btnClassName}
                  key={item.key}
                  onClick={() => alert('I aint a button beotch!')}
                >
                  <strong>{item.children}</strong> is a <em>{item.type}</em>{' '}
                  button.
                </span>
              )}
            </ListAsChildren>
          </Show>
        </Row>
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById('root'));
