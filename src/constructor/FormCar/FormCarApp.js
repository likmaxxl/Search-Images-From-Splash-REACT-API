import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import InputFieldCar from './InputFieldCar'
import ShowImagesCar from './ShowImagesCar'
import OneImageOpen from './OneImageOpen'
import Loader from './Loader'


class FormCarApp extends React.Component {

state = {
  inputField: "",
  images: [],
  imageOpen: "",
error:false,
loading:false
};


/*Open bigger Image on clcik*/
imageClick = (e) => {
  console.log(e.target.getAttribute("src"));
  this.setState({
    imageOpen: e.target.getAttribute("src"),
  });
};



/*Click on submit search or type ENTER*/
hendlerSubmit = (e) => {
  this.setState({loading:true})
  e.preventDefault();
  axios
    .get("https://api.unsplash.com/search/photos", {
      params: { query: this.state.inputField },
      headers: {
        Authorization: "Client-ID cjkz730LwuZh44L_LlnDmUszmOWUTA0xAvYx2ImQI5A",
      },
    })
    .then((response) => {
      this.setState({
        images: response.data.results,
        loading:false
       });

       /*Error Message*/
       if(this.state.images.length===0){
         this.setState({
           error: true,
          });
       }else{
         this.setState({
           error: false,
          });
       }
    });

};



/*Close ig image on click*/
closeHendler=()=>{
  this.setState({
    imageOpen:''
  })
}


/*Input field functoin*/
hendlerChange = (e) => {
  const { value, name } = e.target;
  this.setState({
    [name]: value,
  });
};


  render () {
    const overflowHidden={
      height:'100vh',
      overflow:'hidden'
    }

const empty={}
const styles=this.state.imageOpen?overflowHidden:empty
console.log(this.state.images);
  return(
    <>

    {
      this.state.imageOpen?<OneImageOpen
        closeHendler={this.closeHendler}
        imageOpen={this.state.imageOpen}
      />:''
    }
  <div className="allContent" style={styles}>
  <div className="header">
    <h1>Image Founder</h1>
  </div>
  <InputFieldCar
    hendlerSubmit={this.hendlerSubmit}
    hendlerChange={this.hendlerChange}
    inputField={this.state.inputField}

  />

  {
    this.state.loading?
    <Loader/>:
    <ShowImagesCar images={this.state.images} imageClick={this.imageClick} error={this.state.error}/>
  }

</div>

  </>
  )
  }
}

export default FormCarApp;
