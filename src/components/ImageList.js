import React from 'react';
import './ImageList.css';

 const  ImageList = (props) => {
    
   const images =  props.data.map(({description, id , urls}) => {
     return  <div className="card col-md-3" >
     <img className="card-img-top"  alt= {description} key= {id} src = {urls.regular}></img>
     </div>  
    });


   return (
   <div className='row'>
    {images}
   </div>
   );

};

export default ImageList;