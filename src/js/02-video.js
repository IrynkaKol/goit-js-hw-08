import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('timeupdate', throttle( e => {
        localStorage.setItem('videoplayer-current-time', e.seconds);
        }, 1000)
        );

    
        player
.setCurrentTime(Number(localStorage.getItem('videoplayer-current-time')))
.catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            console.log('the time was less than 0 or greater than the video’s duration: '+cueTime);
            break;

        default:
            console.log('some other error occurred: '+cueTime);
            break;
    }
});
    