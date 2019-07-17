const artel = {
  name: 'Sklep Elektryczny Artel - Leżajsk',
  shortName: 'Artel',
  shortDescription: 'artykuły elektryczne',
  description:
    'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
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
};

const ada = {
  name: 'Elektro-Ada Hurtownia elektryczna - Łańcut',
  shortName: 'Elektro-Ada',
  shortDescription: 'artykuły elektryczne',
  description:
    'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
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
};

module.exports = {
  artel,
  ada,
};
