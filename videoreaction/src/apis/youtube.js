import axios from 'axios';

const KEY = 'AIzaSyCr2fvBDVqdVtQ76UMIo9powOIszH4XfuU';

export default axios.create({ 
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params : {
   key: KEY, 
   part: 'id, snippet',
   maxResults: 5
   
  }
});