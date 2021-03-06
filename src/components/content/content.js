import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export const HTMLContent = ({ content, className }) => (
  <div className={cx(className, 'html-content')} dangerouslySetInnerHTML={{ __html: content }} />
);

const Content = ({ content, className }) => <div className={className}>{content}</div>;

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
};

HTMLContent.propTypes = Content.propTypes;

export default Content;
