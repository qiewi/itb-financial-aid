import menuEn from '~/data/menu-en.js'
import menuId from '~/data/menu-id.js'

export default function useFetchMenus() {
  // Return menu data in the expected format
  return {
    data: {
      'en-US': menuEn,
      'id-ID': menuId,
    },
  }
}
