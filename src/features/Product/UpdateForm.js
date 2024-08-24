import { useState } from "react";
import { useParams } from 'react-router-dom';


function UpdateForm(){
    const [name,setName] = useState('');
    const [imageURL,setImgURL] = useState('');
    const [type,setType] = useState('');

    const { id } = useParams();
    console.log(id);

    return(
        <>
  <h1>Update Product</h1>
  <form id="create-form">
    <div className="input-group">
      <label htmlFor="name">Name</label>
      <input name="name" type="text" id="name" 
        onChange={(event) => setName(event.target.value)}/>
    </div>

    <div className=" input-group">
      <label htmlFor="imageURL">Image URL</label>
      <input name="imageURL" type="text" id="imageURL" 
      onChange={(event) => setImgURL(event.target.value)}/>
    </div>

    <div className=" input-group">
      <label htmlFor="type">Type</label>
      <input name="type" type="text" id="type" 
      onChange={(event) => setType(event.target.value)}/>
    </div>

    <button type="button" className="UpdateForm__delete-button">
      Delete restaurant
    </button>
    <button type="submit">Update product</button>
  </form>
</>
    )
};

export default UpdateForm;