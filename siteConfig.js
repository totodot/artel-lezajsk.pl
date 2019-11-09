const artel = {
  name: 'Sklep Elektryczny Artel - Leżajsk',
  shortName: 'Artel',
  shortDescription: 'artykuły elektryczne',
  description:
    'Sklep elektryczny Artel Leżajsk. Znajdziesz u nas materiały elektryczne, żarówki LED i oświetlnie.',
  color: '#1b4fd2',
  icon: 'src/images/artel-fav.png',
  street: 'Żwirki i Wigury 9',
  postCode: '37-300',
  city: 'Leżajsk',
  phone: '17 242 70 45',
  email: 'artel.lezajsk@gmail.com',
  workingHoursMondayFriday: {
    open: [8, 0],
    close: [17, 0],
  },
  workingHoursSaturday: {
    open: [8, 0],
    close: [13, 0],
  },
  sassVariables: {
    '$color-main': '#1b4fd2',
    '$color-main-400': '#537eed',
    '$color-main-100': '#e8edf9',
  },
  keywords: ['Artel', 'artykuły elektryczne'],
  googleMapsIframe:
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2550.98897196123!2d22.41987610898439!3d50.25479025753151!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc67800d51f8cac32!2sSklep+Elektryczny+ARTEL+Aleksander+Le%C5%84czyk!5e0!3m2!1spl!2spl!4v1563364405359!5m2!1spl!2spl',
};

const ada = {
  name: 'Elektro-Ada Hurtownia elektryczna - Łańcut',
  shortName: 'Elektro-Ada',
  shortDescription: 'artykuły elektryczne',
  description:
    'Elektro-Ada Hurtownia elektryczna Łańcut. Znajdziesz u nas materiały elektryczne, żarówki LED i oświetlnie.',
  color: '#c43838',
  icon: 'src/images/ada-fav.png',
  street: 'Kasprowicza 2',
  postCode: '37-100',
  city: 'Łańcut',
  phone: '17 225 64 36',
  email: 'elektroada@data.pl',
  workingHoursMondayFriday: {
    open: [7, 0],
    close: [17, 0],
  },
  workingHoursSaturday: {
    open: [7, 0],
    close: [13, 0],
  },
  sassVariables: {
    '$color-main': '#c43838',
    '$color-main-400': '#537eed',
    '$color-main-100': '#f5d4d7',
  },
  keywords: ['ElektroAda', 'artykuły elektryczne'],
  googleAnalyticsTrackingId: 'UA-151949465-1',
  googleMapsIframe:
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10241.196312293123!2d22.2360935!3d50.0806871!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfe6e83db9fee5e8e!2sElektro-Ada+sc+Hurtownia+elektryczna%2C+instalacje+elektryczne%2C+%C5%BCar%C3%B3wki+LED+ta%C5%9Bmy%2C+oprawy+o%C5%9Bwietlenie!5e0!3m2!1spl!2spl!4v1563365133648!5m2!1spl!2spl',
};

const project = process.env.GATSBY_PROJECT || 'artel';

module.exports = {
  config: project === 'artel' ? artel : ada,
  project,
};
