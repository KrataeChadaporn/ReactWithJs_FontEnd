import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AddForm({addProduct}){
    console.log('test');
    
    const [name,setName] = useState('');
    const [type,setType] = useState('');
    const [imageURL,setimageURL] = useState('');

        function onSubmit (event){
            event.preventDefault();
            addProduct({ name, type, imageURL });
        }

      return(

    <>
  <h1>Add Product</h1>
  <form id="create-form" onSubmit={onSubmit}>
    <div className="input-group">
      <label htmlFor="name">Name</label>
      <input name="name"
       type="text" 
       id="name"
       onChange={(event) => setName(event.target.value)}
       />
    </div>

    <div className=" input-group">
      <label htmlFor="imageURL">Image URL</label>
      <input name="imageURL" 
      type="text" 
      id="imageURL" 
      onChange={(event) => setimageURL(event.target.value)}
      />
    </div>

    <div className=" input-group">
      <label htmlFor="type">Type</label>
      <input name="type" 
      type="text" 
      id="type"
      onChange={(event) => setType(event.target.value)}
      />
    </div>

    <button type="submit">Add product</button>
  </form>
</>
      );
    }


AddForm.propTypes = {
    addProduct: PropTypes.func.isRequired
  };


export default AddForm;