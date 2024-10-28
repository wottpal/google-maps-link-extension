import $ from 'cash-dom'
import { getGoogleMapsUrl } from './utils'

/**
 * Adds the Google Maps link to the navigation list
 */
export function insertGmapsNavItem() {
  // Find or create gmaps list item
  let gmapsNavItem = $('#gmaps-nav-link').first()
  if (!gmapsNavItem.length) {
    const list = $('div[role="navigation"] div[role="list"]').first()
    if (!list) return

    const otherNavItem = list.find('& > div[role="listitem"]:nth-child(2)')
    if (otherNavItem.children().length !== 1) return
    if (otherNavItem.children().first().children().length !== 1) return

    console.log('[Google Maps Link Extension] 🔗 Inserting Google Maps navigation item…')
    gmapsNavItem = otherNavItem.clone().attr('id', 'gmaps-nav-link').insertBefore(otherNavItem)
    gmapsNavItem.find('a > div').text('Maps')
  }

  // Create and set a Google Maps URL with the same query
  gmapsNavItem.find('a').attr('href', getGoogleMapsUrl())
}

/**
 * Makes inline maps clickable
 */
export function makeInlineMapsClickable() {
  const mapImgs = $('img[src*="maps"]')
  for (const mapImg of mapImgs) {
    // Transform button wrapper into an anchor
    const wrapper = $(mapImg).closest('*[jsaction]').first()
    if (!wrapper.length) continue
    if (wrapper.attr('id') === 'gmaps-img-link') continue

    const wrapperAttrs = wrapper.get(0)?.attributes
    if (!wrapperAttrs?.length) continue

    console.log('[Google Maps Link Extension] 🔗 Wrapping map image in Google Maps link…')
    wrapper.replaceWith(
      `<a id="gmaps-img-link" href="${getGoogleMapsUrl()}" jsaction>${wrapper.html()}</a>`,
    )
    for (let idx = 0; idx < wrapperAttrs.length; idx++) {
      const attr = wrapperAttrs[idx]
      if (!attr) continue
      if (['jsname', 'jsaction', 'role'].includes(attr.name)) continue
      wrapper.attr(attr.name, attr.value)
    }
  }
}
