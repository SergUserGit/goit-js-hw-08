import throttle from 'lodash.throttle';

const CURRENT_TIME_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player.on('timeupdate', throttle(onSetCurrentTime, 1000));

function onSetCurrentTime(data) {
  localStorage.setItem(CURRENT_TIME_KEY, data.seconds);
}

player
  .setCurrentTime(localStorage.getItem(CURRENT_TIME_KEY))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
