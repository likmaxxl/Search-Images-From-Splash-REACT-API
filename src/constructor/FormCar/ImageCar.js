import React from 'react'
import PropTypes from 'prop-types'
import './Images.css'

const ImageCar = (props) => {
  return (
    <div className="images">
    <img onClick={props.imageClick} src={props.images.urls.raw}/>
  </div>
  )
}

export default ImageCar
