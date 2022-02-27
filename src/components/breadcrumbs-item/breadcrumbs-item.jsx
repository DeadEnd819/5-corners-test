import React from 'react';
import PropTypes from 'prop-types';

function BreadcrumbsItem({link, hasLast}) {
  return (
    <li className="breadcrumbs__item">
      {hasLast ?
        <span className="breadcrumbs__link" aria-label={link.ariaLabel}>{link.title}</span> :
        <a className="breadcrumbs__link" href={link.href} aria-label={link.ariaLabel}>{link.title}</a>}
    </li>
  );
}

BreadcrumbsItem.propTypes = {
  link: PropTypes.shape({
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    ariaLabel: PropTypes.string.isRequired,
  }).isRequired,
  hasLast: PropTypes.bool.isRequired,
};

export default BreadcrumbsItem;
