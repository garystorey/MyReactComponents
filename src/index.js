import React, { Fragment, PureComponent } from 'react';
import { render } from 'react-dom';

import { Row, Column } from './components/utils/Grid';
import Show from './components/utils/Show';
import List from './components/utils/List';
import Mickey from './components/utils/Mouse';

// These are just for showing the components
import Button from './components/presentational/Button';
import Card from './components/presentational/Card';
import Article from './components/presentational/Article';

import * as styles from './index.css';

class App extends PureComponent {
  state = {
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
      'justify-Content': 'flex-end'
    };

    return (
      <Fragment>
        <Row>
          <Column>
            <Row>
              <Column>
                <nav className={styles.menu}>
                  <List
                    onClick={this.sayMyName}
                    className={this.state.btnClassName}
                    items={this.state.buttons}
                    render={Button}
                  />
                </nav>
              </Column>
            </Row>
          </Column>
        </Row>
        <Row>
          <br />
          <br />
        </Row>
        <Row>
          <Column>
            <List items={this.state.buttons}>
              {({ key, children, type }) => (
                <span className={this.state.listClassName} key={key}>
                  <strong>{children}</strong> is a <em>{type}</em> button.
                </span>
              )}
            </List>
            <Show when={this.state.showMouse}>
              <Mickey>
                {({ x, y, getXY }) => {
                  return (
                    <div
                      className={this.state.listClassName}
                      onClick={() => alert(JSON.stringify(getXY()))}
                    >
                      X:{('00' + x).slice(-3)} Y:{('00' + y).slice(-3)}
                      <br />
                    </div>
                  );
                }}
              </Mickey>
            </Show>
          </Column>
        </Row>
        <Row>
          <br />
          <br />
        </Row>
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

        <Row>
          <br />
          <br />
          <br />
        </Row>
        <Row>
          <Column>
            <Article published="2/1/2018">
              <Article.HeroImage src="http://loremflickr.com/800/300/" />
              <br clear="all" />
              <Article.Heading>This is the Article Title</Article.Heading>
              <Article.SubHeading>
                or how to make simple render components
              </Article.SubHeading>
              <Article.Author
                src="http://loremflickr.com/100/100/person"
                name="Gary Storey"
                url="http://garystorey.com"
              />
              <Article.HR />
              <Article.P>
                I feel like a jigsaw puzzle missing a piece. And I'm not even
                sure what the picture should be. Oh I beg to differ, I think we
                have a lot to discuss. After all, you are a client. I'm real
                proud of you for coming, bro. I know you hate funerals.
              </Article.P>
              <Article.Image
                align="left"
                src="http://loremflickr.com/250/100"
              />
              <Article.P>
                Get me a vodka rocks. And a piece of toast. There's so many
                poorly chosen words in that sentence. I'm half machine. I'm a
                monster. I don't understand the question, and I won't respond to
                it. What's Spanish for "I know you speak English?"
              </Article.P>
              <Article.Quote
                body="This is the end, my only friend, the end"
                author="Jim Morrison"
              />
              <Article.P>
                Whoa, this guy's straight? I don't criticize you! And if you're
                worried about criticism, sometimes a diet is the best defense.
                Did you enjoy your meal, Mom? You drank it fast enough. No, I
                did not kill Kitty. However, I am going to oblige and answer the
                nice officer's questions because I am an honest man with no
                secrets to hide. Oh, you're gonna be in a coma, all right. It's
                called 'taking advantage.' It's what gets you ahead in life.
              </Article.P>
              <Article.P>
                Now, when you do this without getting punched in the chest,
                you'll have more fun. I don't criticize you! And if you're
                worried about criticism, sometimes a diet is the best defense.
              </Article.P>
              <Article.P>
                In 1972 a crack commando unit was sent to prison by a military
                court for a crime they didn't commit. These men promptly escaped
                from a maximum security stockade to the Los Angeles underground.
              </Article.P>
            </Article>
          </Column>
        </Row>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('root'));
