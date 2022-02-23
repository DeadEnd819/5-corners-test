const breadcrumbsList = [
  {
    href: '#',
    title: 'Главная',
    ariaLabel: 'Перейти на главную страницу',
  },
  {
    href: '#',
    title: 'Корзина',
    ariaLabel: 'Перейти на страницу корзины',
  },
];

function BreadcrumbsItem({link, hasLast}) {
  return (
    <li className="breadcrumbs__item">
      {hasLast ?
        <span className="breadcrumbs__link" aria-label={link.ariaLabel}>{link.title}</span> :
        <a className="breadcrumbs__link" href={link.href} aria-label={link.ariaLabel}>{link.title}</a>}
    </li>
  );
}

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
