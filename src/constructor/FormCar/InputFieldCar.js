import React from 'react'
import PropTypes from 'prop-types'

const InputFieldCar = (props) => {
  return (
<>
<form onSubmit={props.hendlerSubmit}>
  <div className="ui icon input">
    <input
      type="text"
      placeholder="cars,car,nature . . ."
      value={props.inputField}
      onChange={props.hendlerChange}
      name="inputField"
      autoComplete="off"
    />
  <i type="submit" onClick={props.hendlerSubmit} className="inverted circular search link icon"></i>
  </div>
</form>




</>
  )
}

export default InputFieldCar
