let optionsKR = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

let optionsUS = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'Asia/seoul',
};

export const dateLocalFunc = (date, type) =>
  type === 'KR' ? date.toLocaleString('ko-KR', optionsKR) : date.toLocaleString('en-US', optionsUS);
