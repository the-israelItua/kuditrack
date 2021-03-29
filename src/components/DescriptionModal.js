import React, {forwardRef, memo, useImperativeHandle, useRef} from 'react'
import {useSelector} from "react-redux"
import SideModal from './dashboard/SideModal'
import moment from "moment"

const DescriptionModal = forwardRef((props, ref) => {
    const modal = useRef(null)

    const transaction = useSelector(state => state.transactions.selected)

  useImperativeHandle(ref, () => ({
    async open() {
      modal.current.open()
    },
    async close() {
      modal.current.close()
    }
  }))

  const time = moment(transaction?.time).fromNow()

  return (
    <SideModal ref={modal} title="Transaction Details">
     <div className="description-modal">
        <div className="description-modal__section">
            <h5>Date of transaction</h5>
            <p>{transaction?.date}</p>
        </div>
        <div className="description-modal__section">
            <h5>Time of transaction</h5>
            <p>{time}</p>
        </div>
        <div className="description-modal__section">
            <h5>Type of transaction</h5>
            <p>{transaction?.type}</p>
        </div>
        <div className="description-modal__section">
            <h5>Transaction title</h5>
            <p>{transaction?.title}</p>
        </div>
        <div className="description-modal__section">
            <h5>Description</h5>
            <p>{transaction?.description}</p>
        </div>
      </div>
    </SideModal>
  )
})

export default memo(DescriptionModal)
