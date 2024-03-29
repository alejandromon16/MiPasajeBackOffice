import { writable } from 'svelte/store';

export const isDark = writable(false)
export const isSideMenuOpen = writable(false)
export const isNotificationsMenuOpen = writable(false)
export const isProfileMenuOpen = writable(false)
export const pageMenus = writable([])
export const showModal = writable(false)
export const showModalLocations = writable(false)
export const destinoSelect = writable([])
export const isOptionsOpen = writable(false)
export const valid = writable(false)

export const togglePageMenu = (name:any) => {
  pageMenus.update((pages) => {
    if (typeof pages[name] === 'undefined') {
      pages[name] = true
    } else {
      pages[name] = !pages[name]
    }

    return pages
  })
}

export const toggleTheme = () => {
  window.document.getElementById('body').classList.toggle('dark')
  isDark.update((v) => !v)
}

export const toggleSideMenu = () => {
  isSideMenuOpen.update((v) => !v)
}

export const toggleModal = () => {
  showModal.update((v) => !v)
}

export const toggleModalLocations = () => {
  showModalLocations.update((v) => !v)
}

export const closeSideMenu = () => {
  isSideMenuOpen.set(false)
}

export const toggleNotificationsMenu = () => {
  isNotificationsMenuOpen.update((v) => !v)
}

export const toggleOptions = () => {
  isOptionsOpen.update((v) => !v)
}

export const closeNotificationsMenu = () => {
  isNotificationsMenuOpen.set(false)
}

export const toggleProfileMenu = () => {
  isProfileMenuOpen.update((v) => !v)
}

export const closeProfileMenu = () => {
  isProfileMenuOpen.set(false)
}

