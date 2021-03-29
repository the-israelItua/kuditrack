import React, {forwardRef, memo, useImperativeHandle, useState} from "react"
import ClickAwayListener from 'react-click-away-listener'
import {useTransition, animated} from 'react-spring'
import CloseIcon from '@material-ui/icons/Close'

const SideModal = forwardRef(({children, title}, ref) => {
  const [showOverlay, setShowOverlay] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const [showSideModal, setShowSideModal] = useState(false)

  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

  useImperativeHandle(ref, () => ({
    async open() {
      setShowSideModal(true)
      await sleep(200)
      setShowOverlay(true)
      await sleep(100)
      setShowContent(true)
    },
    async close() {
      setShowContent(false)
      await sleep(100)
      setShowOverlay(false)
      await sleep(200)
      setShowSideModal(false)
    }
  }))

  const close = async () => {
    setShowContent(false)
    await sleep(100)
    setShowOverlay(false)
    await sleep(200)
    setShowSideModal(false)
  }

  const overlayTransition = useTransition(showOverlay, null, {
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0}
  })

  const contentTransition = useTransition(showContent, null, {
    from: {right: -1000},
    enter: {right: 0},
    leave: {right: -1000}
  })

  return (
    <section className={`side-modal ${!showSideModal && 'd-none'}`}>
      {overlayTransition.map(({item, key, props}) => item && <animated.div key={key} style={props} className="side-modal__overlay" />)}

      <ClickAwayListener onClickAway={() => (showSideModal ? close() : null)}>
        {contentTransition.map(
          ({item, key, props}) =>
            item && (
              <animated.div key={key} style={props} className="side-modal__content">
                <div className="side-modal__header">
                  <h1>{title}</h1>
                  <CloseIcon onClick={() => close()} />
                </div>
                <div className="side-modal__content__body">{children}</div>
              </animated.div>
            )
        )}
      </ClickAwayListener>
    </section>
  )
})

export default memo(SideModal)
