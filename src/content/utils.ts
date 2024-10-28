export function getGoogleMapsUrl() {
  const query = new URLSearchParams(window.location.search).get('q') || ''
  const mapsUrl = `https://maps.google.com/maps?output=search&q=${encodeURIComponent(query)}`
  return mapsUrl
}
