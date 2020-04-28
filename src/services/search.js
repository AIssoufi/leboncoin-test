import leboncoin from 'leboncoin-api';

export const searchProperties = ({
  query = 'renove',
  department = 'cher',
  region = 'Val-de-Loire',
  minPrice = 0,
  maxPrice = 150000
}) => {
  const search = new leboncoin.Search()
    .setPage(1)
    .setQuery(query)
    .setFilter(leboncoin.FILTERS.PARTICULIER)
    .setCategory("locations")
    .setRegion(region)
    .setDepartment(department)
    .addSearchExtra("price", { min: minPrice, max: maxPrice }) // will add a range of price
    .addSearchExtra('furnished', ["1", "Non meublé"]); // will add enums for Meublé and Non meublé

  // return search.run()
    // .then(data => {
    //   return data.results;
    // })

  return new Promise(function (resolve, reject) {
    const fakeData = [
      {
        title: 'test1',
        imgUrl: 'https://www.leboncoin.fr/_next/static/vacances-64e946b5.jpg',
        propertyUrl: 'https://www.leboncoin.fr/locations_gites/offres/'
      },
      {
        title: 'test2',
        imgUrl: 'https://www.leboncoin.fr/_next/static/vacances-64e946b5.jpg',
        propertyUrl: 'https://www.leboncoin.fr/locations_gites/offres/'
      },
      {
        title: 'test3',
        imgUrl: 'https://www.leboncoin.fr/_next/static/vacances-64e946b5.jpg',
        propertyUrl: 'https://www.leboncoin.fr/locations_gites/offres/'
      },
      {
        title: 'test4',
        imgUrl: 'https://www.leboncoin.fr/_next/static/vacances-64e946b5.jpg',
        propertyUrl: 'https://www.leboncoin.fr/locations_gites/offres/'
      }
    ];

    resolve(fakeData)
  });
}