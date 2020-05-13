import React from 'react'
import PropTypes from 'prop-types'

const Loader = (props) => {
  return (
    <div class="ui segment">
    <div class="ui active dimmer">
      <div class="ui text loader">Loading</div>
    </div>
  </div>
  )
}

export default Loader
