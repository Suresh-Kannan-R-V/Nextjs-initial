import dayjs from 'dayjs';
import isToday from 'dayjs/plugin/isToday';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';

dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);
dayjs.extend(utc);
dayjs.extend(isToday);

// Function to get the current UTC date string with only the date portion
export const getUTCString = (format = 'YYYY-MM-DD') => {
	const currentDate = dayjs();
	return currentDate.utc().format(format);
};
export const getFormattedDate = (timestamp: number, format = 'LLL') => {
	return dayjs.unix(timestamp).format(format);
};
export const getRelativeTime = (timestamp: number) => {
	return dayjs.unix(timestamp).fromNow();
};
export const getUTCStringZ = () => {
	const currentDate = dayjs();
	return currentDate.utc(true).format();
};
export const isSameTimestamp = (timestamp1: number, timestamp2: number) => {
	return dayjs.unix(timestamp1).isSame(dayjs.unix(timestamp2));
};

export const getUTCTime = () => {
	return dayjs().utc();
};
export const getUnixTime = () => {
	return dayjs().unix();
};

export { dayjs };
