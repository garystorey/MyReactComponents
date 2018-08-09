import React from 'react';
import PropTypes from 'prop-types';

import './article.css';

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

const HR = props => <hr data-article-seperator />;

const Quote = props => (
  <blockquote data-article-quote>
    <div data-article-quote-body>{props.body}</div>
    <cite data-article-quote-author>{props.author}</cite>
  </blockquote>
);

const Image = ({ src, alt, align, caption, ...props }) => {
  const styleObj =
    align === 'right'
      ? { float: 'right' }
      : align === 'left'
        ? { float: 'left' }
        : { margin: 'auto' };
  return (
    <figure data-article-image>
      <img src={src} alt={alt} {...props} style={styleObj} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
};
Image.propTypes = {
  src: PropTypes.string,
  align: PropTypes.string,
  alt: PropTypes.string
};
const HeroImage = ({ src, alt, ...props }) => (
  <img data-article-hero-image src={src} alt={alt} {...props} />
);
HeroImage.propTypes = {
  src: PropTypes.string,
  align: PropTypes.string,
  alt: PropTypes.string
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
    <br />
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
  static HeroImage = HeroImage;
  static P = P;
  static Heading = Heading;
  static SubHeading = SubHeading;
  static Author = Author;
  static HR = HR;
  static Quote = Quote;
  state = this.initialState;

  //componentDidMount() {}
  //componentWillUnmoun() {}
  render() {
    return <div data-article>{this.props.children}</div>;
  }
}

export default Article;
