import React, { Fragment, PureComponent } from 'react';
import { render } from 'react-dom';

import { Row, Column } from './components/utils/Grid';
import Show from './components/utils/Show';
import List from './components/utils/List';
import ListAsChildren from './components/utils/ListAsChildren';

import Mickey from './components/utils/Mouse';

// These are just for showing the components
import Button from './components/presentational/Button';
import Media from './components/presentational/Media';
// Never use this one!
import Text from './components/presentational/Text';

import * as styles from './index.css';

class App extends PureComponent {
  state = {
    debug: false,
    showMouse: true,
    buttons: [
      { children: 'Cancel', type: 'ghost' },
      { children: 'Discard', type: 'standard' },
      { children: 'Save Item', type: 'primary' }
    ],
    btnClassName: 'menu-item',
    listClassName: 'list-item'
  };

  sayMyName = e => alert(e.target.innerText);

  render() {
    let styleForText = {
      padding: '5px',
      margin: 0
    };
    let rowStyle = {
      justifyContent: 'flex-end'
    };

    return (
      <Fragment>
        <Row>
          <Column>
            <Media
              direction="standard"
              src="http://loremflickr.com/150/150/person"
            >
              <Text size="2.2rem" color="#fff" bgColor="var(--primary)">
                <strong style={styleForText}>Anonymous User</strong>
              </Text>
              <Text size="1.8rem" color="#333">
                <em style={styleForText}>A stupid tagline</em>
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
          </Column>
        </Row>
        <Row
          style={{
            height: '1.5rem'
          }}
        />
        <Row>
          <Column>
            <Show when={this.state.debug}>
              <ListAsChildren items={this.state.buttons}>
                {({ key, children, type }) => (
                  <span className={this.state.listClassName} key={key}>
                    <strong>{children}</strong> is a <em>{type}</em> button.
                  </span>
                )}
              </ListAsChildren>
            </Show>
            <Show when={this.state.showMouse}>
              <Mickey>
                {({ x, y }) => {
                  return (
                    <div>
                      {x}:{y}
                    </div>
                  );
                }}
              </Mickey>
            </Show>
          </Column>
        </Row>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('root'));
