import React from "react"
import useStore from '../../store'

import './base.css'

const Background = () => {
  const wallpaper = useStore(state => state.wallpaper)

  return (
    <div className="background" style={{
      backgroundImage: `url(/img/wallpaper/${wallpaper.theme}/${wallpaper.src})`
    }}>
    </div>
  )
}

export default Background