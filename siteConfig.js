const artel = {
  name: 'Sklep Elektryczny Artel - Leżajsk',
  shortName: 'Artel',
  shortDescription: 'artykuły elektryczne',
  description:
    'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
  color: '#1b4fd2',
  icon: 'src/images/logo-mark.svg',
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
};

const ada = {
  name: 'Elektro-Ada Hurtownia elektryczna - Łańcut',
  shortName: 'Elektro-Ada',
  shortDescription: 'artykuły elektryczne',
  description:
    'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
  color: '#c43838',
  icon: 'src/images/logo-mark.svg',
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
    close: [13, 12],
  },
};

module.exports = {
  artel,
  ada,
};
