// import axios from 'axios';

const API_URL = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=6ebd558e3a13442d8242c33bb2fd6b68';

export const fetchApiData = async () => {
  try {
    const response = await fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=6ebd558e3a13442d8242c33bb2fd6b68");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
