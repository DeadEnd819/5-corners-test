export const BACKEND_URL = 'https://run.mocky.io/v3/59f47e8e-2a09-48c3-8a1d-0af8e5817f7c';
export const GOOGLE_URL = 'https://maps.googleapis.com/maps/api/geocode';
export const REQUEST_TIMEOUT = 5000;
export const KEY = 'AIzaSyAHZ5949QgmBK94SOpqeBZPQ3YU8pJ643E';
export const PHONE_REG_EXP = '^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}$';
export const PHONE_MASK = ['+', '7', ' ', '(', /\d/, /\d/, /\d/, ')', '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];

export const ActionType = {
  LOAD_DATA: 'LOAD_DATA',
  LOAD_COORDS: 'LOAD_COORDS',
  CHANGE_DATA: 'CHANGE_DATA',
  CHANGE_MARKER_FLAG: 'CHANGE_MARKER_FLAG',
  CHANGE_FORM_DATA: 'CHANGE_FORM_DATA',
  CLEAR_FORM_DATA: 'CLEAR_FORM_DATA',
  DELETE_ITEM: 'DELETE_ITEM',
};

export const AmountUpdateType = {
  INC: 'INC',
  DEC: 'DEC',
  ADD: 'ADD'
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

export const markerStyle = {
  position: 'absolute',
  left: '-16px',
  top: '-16px',
  borderRadius: '50%',
  width: '32px',
  height: '32px',
  backgroundColor: 'red',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid blue',
  color: 'yellow',
};

export const userListMobile = [
  {
    name: 'menu',
    href: '#',
    label: 'Открыть меню',
    icon: {
      name: 'menu',
      width: 25,
      height: 25,
    },
  },
  {
    name: 'search',
    href: '#',
    label: 'Открыть поиск',
    icon: {
      name: 'search',
      width: 25,
      height: 25,
    },
  },
];

export const userList = [
  {
    name: 'account',
    href: '#',
    label: 'Кабинет',
    icon: {
      name: 'profile',
      width: 25,
      height: 25,
    },
  },
  {
    name: 'favorites',
    href: '#',
    label: 'Избранное',
    icon: {
      name: 'heart',
      width: 25,
      height: 25,
    },
  },
  {
    name: 'basket',
    href: '#',
    label: 'basket',
    icon: {
      name: 'basket',
      width: 25,
      height: 25,
    },
  },
];

export const navList = [
  {
    href: '#',
    name: 'Страница 1',
  },
  {
    href: '#',
    name: 'Страница 2',
  },
  {
    href: '#',
    name: 'Страница 3',
  },
  {
    href: '#',
    name: 'Страница 4',
  },
  {
    href: '#',
    name: 'Страница 5',
  },
  {
    href: '#',
    name: 'Страница 6',
  },
];
