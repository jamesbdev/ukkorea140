

// Set up the API key and channel ID
const apiKey = 'AIzaSyBwKz5pUkbTmBtergyDYc8ZD2WhXje3MUk';
const channelId = 'UCHkbsSjTg-ykvto-GDEgOZQ';
const names = [""];

// Set up the request URL
const requestUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=10`;

// Make the request
fetch(requestUrl)
  .then(response => response.json())
  .then(data => {
    // handle the response data here
    const videos = data.items;
    // do something with the videos, e.g. display them on the page
      
    // Get the HTML element where you want to display the videos
    const videoList = document.getElementById('youtube-videos-container');
       // Loop through the videos and create an HTML element for each one
    for (let i = 0; i < videos.length; i++) {
      const video = videos[i];
      const videoId = video.id.videoId;
      const videoTitle = video.snippet.title;
      const videoThumbnail = video.snippet.thumbnails.medium.url;
      const channelTitle = video.snippet.channelTitle;
      const videoDescription = video.snippet.description;
  
      // Create an HTML element for the video
      const videoElement = document.createElement('div');
      videoElement.innerHTML = `
        <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank">
        <iframe width="560" height="315" src="http://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p>${videoTitle}</p>
     

        </a>
        `;
  
        // Add the video element to the list of videos on the page
        videoList.appendChild(videoElement);
      }
   
    console.log(videos);
  })
  .catch(error => {
    // handle any errors here
    console.error(error);
  });
