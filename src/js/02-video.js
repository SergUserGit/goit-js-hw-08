import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

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
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
