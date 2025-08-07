// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
export function removeDuplicates(playlist) {
	const playList = new Set(playlist);
	const playList2 = Array.from(playList);
	return playList2;
}

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */
export function hasTrack(playlist, track) {
	if (playlist.indexOf(track) === -1) return false;
	else return true;
}

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function addTrack(playlist, track) {
	if (playlist.indexOf(track) === -1) playlist.push(track);
	else return playlist;
	return playlist;
}

/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function deleteTrack(playlist, track) {
	if (playlist.indexOf(track) === -1) return playlist
	else playlist.splice(playlist.indexOf(track), 1);
	return playlist
}

/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} list of artists
 */
export function listArtists(playlist) {
	if (playlist.length !== 0) {
		playlist = playlist.map(x => {
			x = x.slice(x.indexOf("-") + 2, x.length).trim()
			return x;
		})
	} else return playlist

	const obj = new Set(playlist);
	const Playlist = Array.from(obj);
	const finalPlaylist = Playlist.filter(x => x !== undefined);
	return finalPlaylist;
}
