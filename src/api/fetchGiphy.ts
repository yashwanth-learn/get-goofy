const apiKey = "KwSwx9Gr7nd60wH0I6s8aq6m0afzJWHN";
let baseUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=50&offset=`;
const fetchGiphy = async (offSet:number) => {
  let response = await fetch(baseUrl+offSet);
  let giphys = await response.json();
  return giphys;
};

export default fetchGiphy;
