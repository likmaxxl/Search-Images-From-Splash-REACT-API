import React from 'react'
import PropTypes from 'prop-types'

const OneImageOpen = (props) => {
  return (
<>
  <div className="oneImg">
    <div className="rel">
      <div className="x" onClick={props.closeHendler}>
        <i className="window close icon"></i>
      </div>
      <img src={props.imageOpen} alt="" />
    </div>
  </div>
</>

  )
}

export default OneImageOpen
