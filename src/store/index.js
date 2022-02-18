import create from 'zustand'

const useStore = create(set => ({
  // wallpaper
  wallpaper: {
    theme: 'default',
    src: 'img0.jpg'
  }
}))

export default useStore