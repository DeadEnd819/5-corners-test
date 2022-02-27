import React from 'react';
import BreadcrumbsItem from '../breadcrumbs-item/breadcrumbs-item';
import {breadcrumbsList} from '../../const';

function Breadcrumbs() {
  return (
    <ul className="breadcrumbs">
      {breadcrumbsList.map((link, index) => (
        <BreadcrumbsItem key={link.title} link={link} hasLast={breadcrumbsList.length - 1 === index} />
      ))}
    </ul>
  );
}

export default Breadcrumbs;
