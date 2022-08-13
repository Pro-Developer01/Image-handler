import React, { useState } from 'react'

export default function ImageUpload() {
    const [Image,setImage]=useState([]);
    const fileHandler=(e)=>{
        e.preventDefault();
        console.log(e.target.files);
        setImage(e.target.files);
        console.log("image",Image);
    }

    const UploadHandler=()=>{
        console.log("clicked");
    }
  return (
    <div>
        <form>
            <label htmlFor="Image">
                Upload Image
            </label>
            <input type="file" id="Image"onChange={fileHandler} />
            <button onClick={UploadHandler}>Upload</button>
        </form>
    </div>
  )
}
