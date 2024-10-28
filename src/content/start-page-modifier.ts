import $ from 'cash-dom'
import { getGoogleMapsUrl } from './utils'

export function insertGmapsTopNavItem() {
  // Find or create gmaps list item
  let gmapsTopNavItem = $('#gmaps-topnav-link').first()
  if (!gmapsTopNavItem.length) {
    const list = $('div#gb').first()
    if (!list) return

    const lastNavItem = list.find('div:last-child > a[target="_top"]').parent()
    if (!lastNavItem.length) return

    console.log('[Google Maps Link Extension] 🔗 Inserting Google Maps topbar navigation item…')
    gmapsTopNavItem = lastNavItem.clone().attr('id', 'gmaps-topnav-link').insertAfter(lastNavItem)
    gmapsTopNavItem.find('a').text('Maps')
  }

  // Create and set a Google Maps URL with the same query
  gmapsTopNavItem.find('a').attr('href', getGoogleMapsUrl())
}
