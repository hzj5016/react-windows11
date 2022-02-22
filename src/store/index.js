import create from 'zustand'
import { taskApps } from '../components/icon/icons'

const useStore = create(set => ({
  // wallpaper
  wallpaper: {
    theme: 'default',
    src: 'img1.jpg'
  },

  // taskbar
  taskbar: {
    apps: taskApps,
    align: 'center'
  }
}))

export default useStore