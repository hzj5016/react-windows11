import create from 'zustand'
import { taskApps } from '../components/icon/icons'

const useStore = create(set => ({
  // wallpaper
  wallpaper: {
    theme: 'default',
    src: 'img1.jpg'
  },

  // taskbar
  taskApps
}))

export default useStore