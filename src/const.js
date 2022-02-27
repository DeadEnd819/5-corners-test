export const BACKEND_URL = 'https://run.mocky.io/v3/59f47e8e-2a09-48c3-8a1d-0af8e5817f7c';
export const GOOGLE_URL = 'https://maps.googleapis.com/maps/api/geocode';
export const REQUEST_TIMEOUT = 5000;
export const KEY = 'AIzaSyAHZ5949QgmBK94SOpqeBZPQ3YU8pJ643E';
export const ActionType = {
  LOAD_DATA: 'LOAD_DATA',
  LOAD_COORDS: 'LOAD_COORDS',
  CHANGE_DATA: 'CHANGE_DATA',
  CHANGE_MARKER_FLAG: 'CHANGE_MARKER_FLAG',
  CHANGE_FORM_DATA: 'CHANGE_FORM_DATA',
  CLEAR_FORM_DATA: 'CLEAR_FORM_DATA',
};

export const formInputs = [
  {
    type: 'text',
    id: 'address',
    label: 'Адрес',
    name: 'address',
    modifier: '',
  },
  {
    type: 'text',
    id: 'name',
    label: 'Ваше Имя',
    name: 'name',
    modifier: 'input--size-small',
  },
  {
    type: 'text',
    id: 'phone',
    label: 'Ваш Телефон',
    name: 'phone',
    modifier: 'input--size-small',
  },
  {
    type: 'email',
    id: 'email',
    label: 'Ваш Email',
    name: 'email',
    modifier: '',
  },
  {
    type: 'select',
    id: 'package',
    label: 'Тип упаковки',
    name: 'package',
    modifier: '',
    options: [
      {value: 'no', label: 'без упаковки'},
      {value: 'standard', label: 'стандартная'},
      {value: 'gift', label: 'подарочная'},
    ],
  },
  {
    type: 'text',
    id: 'comment',
    label: 'Введите комментарий',
    name: 'comment',
    modifier: '',
  },
];

export const defaultMapOption = {
  center: {
    lat: 59.95,
    lng: 30.33
  },
  zoom: 13,
};

export const breadcrumbsList = [
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
