import React, {forwardRef, memo, useImperativeHandle, useState} from 'react'
import ClickAwayListener from 'react-click-away-listener'
import {useTransition, animated} from 'react-spring'
import CloseIcon from '@material-ui/icons/Close'

const Modal = forwardRef(({children, title, onClose = () => {}}, ref) => {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

  const [showOverlay, setShowOverlay] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const [showModal, setShowModal] = useState(false)

  useImperativeHandle(ref, () => ({
    async open() {
      setShowModal(true)
      await sleep(200)
      setShowOverlay(true)
      await sleep(100)
      setShowContent(true)
    },
    close() {
      closeAction()
    }
  }))

  const closeAction = async () => {
    setShowContent(false)
    await sleep(100)
    setShowOverlay(false)
    await sleep(200)
    setShowModal(false)
    onClose()
  }

  const overlayTransition = useTransition(showOverlay, null, {
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0}
  })

  const contentTransition = useTransition(showContent, null, {
    from: {bottom: -300, opacity: 0},
    enter: {bottom: 0, opacity: 1},
    leave: {bottom: -300, opacity: 0}
  })

  return (
    <section className={`modal ${!showModal && 'd-none'}`}>
      {overlayTransition.map(({item, key, props}) => item && <animated.div key={key} style={props} className="modal__overlay" />)}

      <ClickAwayListener style={{width: '100%'}} onClickAway={() => (showModal ? closeAction() : null)}>
        {contentTransition.map(
          ({item, key, props}) =>
            item && (
              <animated.div key={key} style={props} className="modal__content">
                <div className="modal__header">
                  <h1>{title}</h1>
                  <CloseIcon onClick={() => closeAction()} className="modal__header__close" />
                </div>
                <div className="modal__content__body">{children}</div>
              </animated.div>
            )
        )}
      </ClickAwayListener>
    </section>
  )
})

export default memo(Modal)
