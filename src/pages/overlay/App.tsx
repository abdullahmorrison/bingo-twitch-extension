import React from 'react'
import Overlay from './components/overlay'

import styles from './app.module.css'

export default function App(){
  const [isOverlayVisible, setIsOverlayVisible] = React.useState(false)
  const sleepTimer = React.useRef<NodeJS.Timeout | undefined>(undefined)

  const hideOverlay = () => {
    sleepTimer.current = setTimeout(() => {
      setIsOverlayVisible(false)
    }, 1000)
  }
  const showOverlay = () => {
    if (sleepTimer.current) {
      clearTimeout(sleepTimer.current)
    }
    setIsOverlayVisible(true)
  }

  return (
    <div
      className={styles.app}
      onMouseMove={showOverlay}
      onMouseLeave={hideOverlay}
    >
      <Overlay
        isOverlayVisible={isOverlayVisible}
      />
    </div>
  )
}
