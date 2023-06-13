export const TIMECODE_MINUTE = 60 * 1000;
export const TIMECODE_HOUR = TIMECODE_MINUTE * 60;
export const TIMECODE_DAY = TIMECODE_HOUR * 24;
export const TIMECODE_WEEK = TIMECODE_DAY * 7;
export const TIMECODE_MONTH = TIMECODE_DAY * 30;
export const TIMECODE_YEAR = TIMECODE_DAY * 365;

export function getTimecodeNow() {
	const dateNow = new Date();
	const timecodeNow = dateNow.getTime();
	return timecodeNow;
}

export const getYearFromAge = (year: number): number => {
	const date = new Date();
	const yearNow = date.getFullYear();
	return yearNow - year;
};

export function getTimedateNow(): string {
	const dateNow = new Date();
	const timecodeNow = `${dateNow.toLocaleDateString()} ${dateNow.toLocaleTimeString()}`;
	return timecodeNow;
}
