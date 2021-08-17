import { DATE_LOCAL_OPTIONS_KR } from './constants';

export const dateLocalFunc = (date, type) =>
  type === 'KR'
    ? date.toLocaleString('ko-KR', DATE_LOCAL_OPTIONS_KR)
    : date.toLocaleString('en-US', DATE_LOCAL_OPTIONS_KR);
