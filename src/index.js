import React, { Fragment, PureComponent } from 'react';
import { render } from 'react-dom';

import { Row, Column } from './components/utils/Grid';
import Show from './components/utils/Show';
import Lister from './components/utils/List';
import Mickey from './components/utils/Mouse';

// These are just for showing the components
import Button from './components/presentational/Button';
import Media from './components/presentational/Media';
import Card from './components/presentational/Card';
import Article from './components/presentational/Article';
// Never use this one!
import Text from './components/presentational/Text';

import * as styles from './index.css';

class App extends PureComponent {
  state = {
    debug: true,
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
                  <Lister
                    onClick={this.sayMyName}
                    className={this.state.btnClassName}
                    items={this.state.buttons}
                    render={Button}
                  />
                </nav>
              </Row>
            </Media>
          </Column>
        </Row>
        <Row
          style={{
            height: '2.5rem'
          }}
        />
        <Row>
          <Column>
            <Lister items={this.state.buttons}>
              {({ key, children, type }) => (
                <span className={this.state.listClassName} key={key}>
                  <strong>{children}</strong> is a <em>{type}</em> button.
                </span>
              )}
            </Lister>
            <Show when={this.state.showMouse}>
              <Mickey>
                {({ x, y, getXY }) => {
                  return (
                    <div className={this.state.listClassName}>
                      X:{('00' + x).slice(-3)} Y:{('00' + y).slice(-3)}
                      <br />
                      <button
                        type="button"
                        onClick={() => alert(JSON.stringify(getXY()))}
                      >
                        Show Current
                      </button>
                    </div>
                  );
                }}
              </Mickey>
            </Show>
          </Column>
        </Row>
        <Row
          style={{
            height: '2.5rem'
          }}
        />
        <Row>
          <Card
            imgSrc="http://loremflickr.com/400/250"
            title="My Title"
            description="This is my description"
            url="https://google.com"
            author="Gary Storey"
          />
          <Card
            imgSrc="http://loremflickr.com/400/200"
            title="My Another Longer Title for Wrapping"
            description="This is my other description of this other Card thats is a little bit longer than the other one."
            url="https://google.com"
            author="Gary Storey"
          />
        </Row>
        <Article>
          <Article.Image src="http://loremflickr.com/800/300/" />
          <br clear="all" />
          <Article.Heading>This is the Article Title</Article.Heading>
          <Article.SubHeading>or Why write React components</Article.SubHeading>
          <Article.Author
            src="http://loremflickr.com/100/100/person"
            name="Gary Storey"
            url="http://garystorey.com"
          />
          <Article.P>
            This is a paragraph of text. This is a another very interesting
            sentence. You know the kind that make you want to keep reading. See?
            I told you so....
          </Article.P>
          <Article.P>
            This is a paragraph of text. This is a another very interesting
            sentence. You know the kind that make you want to keep reading. See?
            I told you so....
          </Article.P>
        </Article>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('root'));
