import React, { Component } from 'react'

export default class Child extends Component {
    state ={fullName : "najla youssfi" , 
    bio : "najla yousfi is a web designer, product designer ,front-end ,developer,speaker and writer she is known for her love of plants ,but is also crazy about typography,cats and coffee " , 
    profession : " Développeuse Full Stack   " ,
    image : '/imageInPublic.jpg',
    
     }  
    render() {
        return (
            <div className='child'>
                <img  src = {this.state.image} alt = "imageprofile" />
                <h1>{this.state.fullName}</h1>
                <p className ='bio'>{this.state.bio}</p>
                <h3> {this.state.profession}</h3>
            </div>
        )
    }
}
