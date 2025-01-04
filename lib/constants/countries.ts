export const COUNTRY_CITY_MAP: { [key: string]: string } = {
  USD: "New York",
  EUR: "Paris",
  GBP: "London",
  JPY: "Tokyo",
  AUD: "Sydney",
  CAD: "Toronto",
  CHF: "Zurich",
  CNY: "Beijing",
  INR: "Mumbai",
};

export const COUNTRY_MAP: { [key: string]: string } = {
  USD: "USA",
  EUR: "France",
  GBP: "UK",
  JPY: "Japan",
  AUD: "Australia",
  CAD: "Canada",
  CHF: "Switzerland",
  CNY: "China",
  INR: "India",
};

export const COUNTRY_DATA = {
  USA: {
    places: [
      {
        name: "New York City",
        description: "The city that never sleeps",
        image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9",
        link: "https://www.nycgo.com/",
      },
      {
        name: "Grand Canyon",
        description: "Natural wonder of the world",
        image: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722",
        link: "https://www.nps.gov/grca/",
      },
    ],
    foods: [
      {
        name: "Hamburger",
        description: "Classic American comfort food",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      },
      {
        name: "Apple Pie",
        description: "Traditional American dessert",
        image: "https://images.unsplash.com/photo-1621743478914-cc8a86d7e7b5",
      },
    ],
  },
  France: {
    places: [
      {
        name: "Eiffel Tower",
        description: "Iconic symbol of Paris",
        image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f",
        link: "https://www.toureiffel.paris/",
      },
      {
        name: "Palace of Versailles",
        description: "Royal château of Versailles",
        image: "https://images.unsplash.com/photo-1591289009723-aef0a1a8a211",
        link: "https://www.chateauversailles.fr/",
      },
    ],
    foods: [
      {
        name: "Croissant",
        description: "Buttery, flaky pastry",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a",
      },
      {
        name: "Coq au Vin",
        description: "Traditional French chicken dish",
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e",
      },
    ],
  },
  // Add more countries with their respective places and foods...
};

export const CURRENCIES = [
  "USD",
  "EUR",
  "GBP",
  "JPY",
  "AUD",
  "CAD",
  "CHF",
  "CNY",
  "INR",
];
