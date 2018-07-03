import React from 'react';
import PropTypes from 'prop-types';

/* Sub Components */

const P = props => (
  <p data-article-paragraph {...props}>
    {props.children}
  </p>
);
const Heading = props => (
  <h1 data-article-heading {...props}>
    {props.children}
  </h1>
);
const SubHeading = props => (
  <h3 data-article-subheading {...props}>
    {props.children}
  </h3>
);
const Image = ({ src, ...props }) => (
  <img data-article-image src={src} alt="Article Image" {...props} />
);
Image.propTypes = {
  src: PropTypes.string
};

const Author = ({ src, name, url, ...props }) => (
  <div data-article-author>
    <Image
      data-article-author-image
      src={src}
      alt="The authors picture"
      {...props}
      width={100}
    />
    <a data-article-author-name href={url}>
      {name}
    </a>
  </div>
);

class Article extends React.Component {
  static propTypes = {
    author: PropTypes.oneOfType([PropTypes.func, PropTypes.instanceOf(Author)]),
    published: PropTypes.datetime
  };
  static initialState = {
    isOpen: false
  };
  static Image = Image;
  static P = P;
  static Heading = Heading;
  static SubHeading = SubHeading;
  static Author = Author;

  state = this.initialState;

  //componentDidMount() {}
  //componentWillUnmoun() {}
  render() {
    return this.props.children;
  }
}

export default Article;
