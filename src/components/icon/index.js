import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as FaIcons from '@fortawesome/free-solid-svg-icons'

// className width height src fafa
const Icon = (props) => {
  return (
    <>
      {props.fafa == null ? (
        (<div className={`uicon ${props.className || ''}`}>
          <img
            width={props.width}
            height={props.height || props.width}
            src={`/img/icon/${props.ui ? 'ui/' : ''}${props.src}.png`}
            alt=''
          />
        </div>)
      ) : (
        <div className={`uicon ${props.className || ''}`}>
          <FontAwesomeIcon
            style={{
              width: props.width,
              height: props.height || props.width
            }}
            icon={FaIcons[props.fafa]}
          />
        </div>
      )}
    </>
  )
}

export default Icon