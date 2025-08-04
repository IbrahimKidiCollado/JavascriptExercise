/// <reference path="./global.d.ts" />
// @ts-nocheck

/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Visitor} the visitor that was created
 */
export function createVisitor(name, age, ticketId) {
	const visitor = {
		name: name,
		age: age,
		ticketId: ticketId
	};
	return visitor;
}

/**
 * Revokes a ticket for a visitor.
 *
 * @param {Visitor} visitor the visitor with an active ticket
 * @returns {Visitor} the visitor without a ticket
 */
export function revokeTicket(visitor) {
	visitor.ticketId = null;
	return visitor;
}

/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function ticketStatus(tickets, ticketId) {
	if (!tickets.hasOwnProperty(ticketId)) {
		return 'unknown ticket id';
	}

	// Verifica el estado del ticket específico
	const ticket = tickets[ticketId];

	if (ticket === null) {
		return 'not sold';
	}

	if (ticket === undefined) {
		return 'unknown ticket id';
	}

	return `sold to ${ticket}`;
}

/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function simpleTicketStatus(tickets, ticketId) {
	if (!tickets.hasOwnProperty(ticketId)) return 'invalid ticket !!!';

	const ticket = tickets[ticketId];

	if (ticket === null || ticket === undefined) return 'invalid ticket !!!';

	return ticket;
}

/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {VisitorWithGtc} visitor
 * @returns {string | undefined} version
 */
export function gtcVersion(visitor) {
	if (visitor.hasOwnProperty('gtc')) return visitor.gtc.version;
	else return;
}
