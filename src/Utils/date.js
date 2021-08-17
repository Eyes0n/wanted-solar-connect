let options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'Asia/seoul',
};

export const dateLocalFunc = (date, type) =>
  type === 'KR'
    ? date.toLocaleString('ko-KR', options)
    : date.toLocaleString('en-US', options);
