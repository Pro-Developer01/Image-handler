import React, { useState } from 'react'
import "./Style.css";

export default function ImageUpload() {
    const [Image,setImage]=useState([]);
    const fileHandler=(e)=>{
        console.log(e.target.files);
        setImage(e.target.files[0]);
        console.log("image",Image);
    }

    const UploadHandler=(e)=>{
        e.preventDefault();
        console.log("clicked");
        const url="https://api.imgur.com/3/image/";
        const formdata=new FormData();
        formdata.append('image',Image);
        fetch(url,{
            method:'POST',
            headers:{
                Authorization: "Client-ID b8a32186230e488"
            },
            body: formdata
        }).then(data=>data.json()).then(z=>console.log(z)).catch(e=>console.log(e))
    }
    const DownloadHandler=(e)=>{
        e.preventDefault();
        const url="https://api.imgur.com/3/account/me/images";
        fetch(url)
        .then(data=>data.json()).then(data=>console.log(data)).catch(e=>console.log(e));
    }
  return (
    <div className='container'>
        <form>
            <div className="input">

            <label htmlFor="Image">
                Upload Image
            </label>
            <input type="file" id="Image"onChange={fileHandler} />
            </div>
            <div className="button">

            <button onClick={UploadHandler}>Upload</button>
            </div>
            <button onClick={DownloadHandler}>Get Images</button>
        </form>
    </div>
  )
}
