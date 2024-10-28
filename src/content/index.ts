import $ from 'cash-dom'
import { insertGmapsNavItem, makeInlineMapsClickable } from './search-page-modifier'
import { insertGmapsTopNavItem } from './start-page-modifier'

let resizeObserver: ResizeObserver | undefined

function initialize() {
  // Modify the page based on the current URL
  function modifyPage() {
    // console.log('[Google Maps Link Extension] 🔍 Scanning page…')

    const url = window.location.href
    if (url.includes('google.com/search')) {
      insertGmapsNavItem()
      makeInlineMapsClickable()
    } else if (url.endsWith('google.com') || url.endsWith('google.com/')) {
      insertGmapsTopNavItem()
    }
  }

  // Modify the page immediately
  modifyPage()

  // Setup resize observer
  if (resizeObserver) {
    resizeObserver.disconnect()
    resizeObserver = undefined
  }
  resizeObserver = new ResizeObserver(modifyPage)
  resizeObserver.observe(document.body)
}

$(() => {
  initialize()
})
