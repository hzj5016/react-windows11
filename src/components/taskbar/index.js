import React from 'react'
import Icon from '../icon'
import useStore from '../../store'

import './taskbar.scss'

const Taskbar = () => {
  const taskbar = useStore(state => state.taskbar)

  const dateOptions = { year: 'numeric', month: 'numeric', day: 'numeric' }
  const timeOptions = { hour: 'numeric', minute: 'numeric' }

  return (
    <div className='taskbar'>
      <div className='taskcontent'>
        <div className='taskCenter' data-side={taskbar.align}>
          <div className='tsbar'>
            {taskbar.apps.map(app => (
              <Icon className='tsIcon' key={app.idx} width={22} src={app.icon} />
            ))}
          </div>
        </div>
        <div className='taskRight'>
          <Icon className='taskIcon' width={10} fafa='faChevronUp' />
          <Icon className='taskIcon' width={14} src='wifi' ui />
          <Icon className='taskIcon' width={16} src='battery' ui />
          <Icon className="taskIcon" width={22} src='audio' ui />
          <div className='taskDate'>
            <div>{new Date().toLocaleTimeString(undefined, timeOptions)}</div>
            <div>{new Date().toLocaleDateString(undefined, dateOptions)}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Taskbar