import React, { useState, useEffect } from 'react'
import Overlay from './components/overlay'
import useChatCommand from './chatCommand'

import styles from './app.module.css'

export default function App(){
  const [isOverlayVisible, setIsOverlayVisible] = useState(false)
  const [isExtensionOpen, setIsExtensionOpen] = useState(false)
    const [isCursorVisible, setIsCursorVisible] = useState(true) // hiding the cursor when the mouse is idle on the screen
  const sleepTimer = React.useRef<NodeJS.Timeout | undefined>(undefined)

  const [command, setCommand] = useChatCommand()
  useEffect(() => {
    if (command === 'bingo') {
      showOverlay(2)
      setCommand('')
    }
  }, [command])

  const showOverlay = (seconds: number) => {
    setIsCursorVisible(true)
    setIsOverlayVisible(true)
    if(sleepTimer.current) clearTimeout(sleepTimer.current)

    sleepTimer.current = setTimeout(() => {
      setIsCursorVisible(false)
      setIsOverlayVisible(false)
      setIsExtensionOpen(false)
    }, seconds*1000)
  }

  return (
    <div
      className={`${styles.app} ${isCursorVisible? undefined : styles.cursorHidden}`}
      onMouseMove={()=>showOverlay(5)}
      onMouseLeave={()=>setIsOverlayVisible(false)}
      onClick={(event)=>isExtensionOpen && event.target == event.currentTarget? setIsExtensionOpen(false) : null}
    >
      <Overlay
        isOverlayVisible={isOverlayVisible}
        isExtensionOpen={isExtensionOpen}
        setIsExtensionOpen={setIsExtensionOpen}
      />
    </div>
  )
}
