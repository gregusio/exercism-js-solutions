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
  const set = new Set();
  for (const item of playlist)
    set.add(item);
  return Array.from(set);
}

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */
export function hasTrack(playlist, track) {
  const set = new Set();
  for (const item of playlist)
    set.add(item);
  let size = set.size;
  set.add(track);
  return size === set.size;
}

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function addTrack(playlist, track) {
  const set = new Set();
  for (const item of playlist)
    set.add(item);
  set.add(track);
  return Array.from(set);
}

/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function deleteTrack(playlist, track) {
  const set = new Set();
  for (const item of playlist)
    set.add(item);
  set.delete(track);
  return Array.from(set);
}

/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} list of artists
 */
export function listArtists(playlist) {
  const set = new Set();
  for (const item of playlist) {
    let foo = item.split(/\s-\s/);
    set.add(foo[1]);
  }
  return Array.from(set);
}
