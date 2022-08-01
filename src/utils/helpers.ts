import { ISong } from '../typescript/types';

export const countLength = (songs: ISong[]) => {
  let totalMinutes: number = 0;
  let totalSeconds: number = 0;

  songs.forEach(song => {
    totalMinutes = totalMinutes + song.minutes;
    totalSeconds = totalSeconds + song.seconds;
    if (totalSeconds >= 60) {
      totalSeconds = totalSeconds - 60;
      totalMinutes = totalMinutes + 1;
    }
  });

  return { totalMinutes, totalSeconds };
};
