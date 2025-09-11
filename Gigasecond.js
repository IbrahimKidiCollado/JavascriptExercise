/* Instructions
Your task is to determine the date and time one gigasecond after a certain date.

A gigasecond is one thousand million seconds. That is a one with nine zeros after it.

If you were born on January 24th, 2015 at 22:00 (10:00:00pm), then you would be a gigasecond old on October 2nd, 2046 at 23:46:40 (11:46:40pm).

Notes
The input and output of the gigasecond function is of type Date.

It is possible to return a correct value for this exercise by mutating the solution function argument. 
Although there are legitimate use cases for mutating function arguments, this is usually undesirable, and in the case of this exercise, clearly unexpected. 
For this reason, the test suite has a test that fails in case the argument has been modified after the function execution. */

export const gigasecond = (date1) => {
	const giga = (10 ** 9) * 1000;
	const result = date1.getTime() + giga;
	return new Date(result);
};
