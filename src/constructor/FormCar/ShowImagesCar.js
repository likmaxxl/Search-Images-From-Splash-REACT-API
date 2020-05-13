import React from 'react'
import PropTypes from 'prop-types'
import ImageCar from './ImageCar'

const ShowImagesCar = (props) => {

  return (
  <>
  <div className="imgs">
  <h3>Found:{props.images.length} images</h3>
{
  props.error&&<h2 className="error">Please enter a valid image name.</h2>
}
<div className="grid">
{
  props.images.map((all, index) => {
    return <ImageCar images={all} key={index} imageClick={props.imageClick} />
  })
}

</div>
</div>
  </>
  )
}

export default ShowImagesCar
