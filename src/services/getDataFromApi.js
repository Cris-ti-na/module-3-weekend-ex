//GET DATA FROM API
const API_DATA = 'http://api.tvmaze.com/search/shows'

const altImage = 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV-SHOW'
const altRating = 'no rating'



const getDataFromApi = (inputName) => {
  return fetch(API_DATA + '?q=${inputName)')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    return data.map((datashow) => {
      console.log(datashow.show);

      return {
        id: datashow.data.id,
        image: datashow.show.image ? datashow.show.image.original : altImage,
        name: datashow.show.name,
        score: datashow.show.rating.average ? datashow.show.rating.average : altRating,
        status: datashow.show.status,
      };
    });
  });
};

export default getDataFromApi;