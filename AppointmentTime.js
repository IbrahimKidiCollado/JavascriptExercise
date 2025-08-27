/**
Instructions
In this exercise you will work on some functions in order to manage appointments. The system stores everything in ISO 8601 formatted strings, but that's not how people use the calendar. Various functions are necessary to convert between the various formats.

Create an appointment n days from now at current time. The function takes n days and return the appointment time of n days from now.

createAppointment(4, now);
// Given now is Sun Oct 05 2022 23:28:43 GMT+0600 (Bangladesh Standard Time)
// => Sun Oct 09 2022 23:28:43 GMT+0600 (Bangladesh Standard Time)
If the second parameter now is unused, the current time should be used instead.


Stuck? Reveal Hints
Opens in a modal
Various tools only work with the internationally standardized ISO 8601 format. Write the function getAppointmentTimestamp to take a date and return a string in that format.

const appointment = new Date(Date.UTC(2010, 6, 16, 12, 42, 0, 0));

getAppointmentTimestamp(appointment);
// => '2010-07-16T12:42:00.000Z'

Stuck? Reveal Hints
Opens in a modal
Timestamps are hard to read; a function to get the appointment details should help with that. The function getAppointmentDetails takes a timestamp in the ISO 8601 format, and returns the year, month, date, hour, and minute.

getAppointmentDetails('2022-04-24T08:15:00.000');
// => { year: 2022, month: 3, date: 24, hour: 8, minute: 15 }

Stuck? Reveal Hints
Opens in a modal
The function will receive first argument as appointment time and second argument of object of some options. You have to update the appointment according to the options in the object and return the new appointment date. The options object could have multiple options.

updateAppointment('2022-02-09T09:20:00.000', { month: 6 });
// => { year: 2022, month: 6, date: 9, hour: 10, minute: 20 }

Stuck? Reveal Hints
Opens in a modal
The function will receive two appointments (timestamps) as arguments. You have to return the difference between those two times in seconds.

Because half a second is almost meaningless, round the number before returning it.

timeBetween('2022-12-12T09:20:00.000', '2022-12-18T08:30:00.000');
// => 515400

Stuck? Reveal Hints
Opens in a modal
Finally, when the appointment is made, the system needs to check if it's valid. In other words, the appointment must be in the future, and not the past.

Write the function isValid which takes two arguments, an appointment timestamp (string), and the current time as a timestamp (string) and returns true if the appointment is in the future, given the current time.

isValid('2022-02-11T23:00:00.000', '2022-02-08T23:00:00.000');
// => true
 */

// @ts-nocheck

/**
 * Create an appointment
 *
 * @param {number} days
 * @param {number} [now] (ms since the epoch, or undefined)
 *
 * @returns {Date} the appointment
 */
export function createAppointment(days, now = undefined) {
	let date = new Date()
	if (now !== undefined) date = new Date(now);

	let change = date.getTime() + (days * 86400000);

	const result = new Date(date);
	return result;
}

/**
 * Generate the appointment timestamp
 *
 * @param {Date} appointmentDate
 *
 * @returns {string} timestamp
 */
export function getAppointmentTimestamp(appointmentDate) {
	return appointmentDate.toISOString();
}

/**
 * Get details of an appointment
 *
 * @param {string} d (ISO 8601)
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function getAppointmentDetails(timestamp) {
	const d = new Date(timestamp);
	const result = {
		year: d.getFullYear(),
		month: d.getMonth(),
		date: d.getDate(),
		hour: d.getHours(),
		minute: d.getMinutes()
	}
	return result;
}

/**
 * Update an appointment with given options
 *
 * @param {string} timestamp (ISO 8601)
 * @param {Partial<Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>>} options
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function updateAppointment(timestamp, options) {
	const d = new Date(timestamp);
	if (options.date !== undefined) d.setDate(options.date);
	if (options.hour !== undefined) d.setHours(options.hour);
	if (options.minute !== undefined) d.setMinutes(options.minute);
	if (options.month !== undefined) d.setMonth(options.month);
	if (options.year !== undefined) d.setFullYear(options.year);
	const result = {
		year: d.getFullYear(),
		month: d.getMonth(),
		date: d.getDate(),
		hour: d.getHours(),
		minute: d.getMinutes()
	}
	return result;
}

/**
 * Get available time in seconds (rounded) between two appointments
 *
 * @param {string} timestampA (ISO 8601)
 * @param {string} timestampB (ISO 8601)
 *
 * @returns {number} amount of seconds (rounded)
 */
export function timeBetween(timestampA, timestampB) {
	const d1 = new Date(timestampA);
	const d2 = new Date(timestampB);
	let result;
	if (d1 > d2) result = (d1.getTime() - d2.getTime()) / 1000;
	if (d1 < d2) result = (d2.getTime() - d1.getTime()) / 1000;
	// @ts-ignore
	return Math.ceil(result);
}

/**
 * Get available times between two appointment
 *
 * @param {string} appointmentTimestamp (ISO 8601)
 * @param {string} currentTimestamp (ISO 8601)
 */
export function isValid(appointmentTimestamp, currentTimestamp) {
	const cite = new Date(appointmentTimestamp);
	const now = new Date(currentTimestamp);

	if (cite.getTime() > now.getTime()) return true;
	else return false
}
