import React, { useState } from 'react'
import "./Style.css";

export default function ImageUpload() {
    const [Image, setImage] = useState([]);
    const [dataget, setdataget] = useState([]);
    const [imglink, setimglink] = useState("");
    const [flag, setflag] = useState(false);
    const [view, setview] = useState(0);

    const fileHandler = (e) => {
        console.log(e.target.files);
        setImage(e.target.files[0]);
        console.log("image", Image);
    }

    const UploadHandler = (e) => {
        e.preventDefault();
        console.log("clicked");
        const url = "https://api.imgur.com/3/image/";
        const formdata = new FormData();
        formdata.append('image', Image);
        fetch(url, {
            method: 'POST',
            headers: {
                Authorization: "Client-ID b8a32186230e488"
            },
            body: formdata
        }).then(data => data.json()).then((z) => {
            console.log(z)
            setdataget(z);
        }).catch(e => console.log(e))
    }
    // const DownloadHandler = (e) => {
    //     e.preventDefault();
    //     const url = "https://api.imgur.com/3/account/me/images";
    //     fetch(url, {
    //         method: "GET",
    //         headers: {
    //             Authorization: "Client-ID b8a32186230e488"
    //         },
    //     })
    //         .then(data => data.json()).then(data => console.log(data)).catch(e => console.log(e));
    // }

    const ShowImages = (e) => {
        e.preventDefault();
        console.log("clicked");
        console.log(dataget);
        console.log(dataget.length);
        setimglink(dataget.data.link);
        setflag(flag?false:true);
        setview(view+1);
    }
    return (
        <div className='container'>
            <center><h1>Upload Image</h1></center>
            <br />
            <form>
                <div className="input">
                    <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping" style={{
                            fontWeight: "600",
                        }}> <>Upload Image </></span>
                        <input onChange={fileHandler} type="file" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                </div>
                <br />
                <div className="button">
                    <button type="button" className="btn btn-primary" onClick={UploadHandler}>Upload</button>
                </div>


            </form>
            <hr></hr>
            {/* <button type="button" onClick={DownloadHandler} className="btn btn-primary" onClick={UploadHandler}>Get Images</button> */}

            <center>
                <button type="button" onClick={ShowImages} className="btn btn-primary">Show Images</button>
            </center>
            {flag && (
                <>
                    <center>
                        <div className="card my-3" style={{width: "18rem",}}>
                            <img src={imglink} className="card-img-top" alt="notfound" />
                            <div className="card-body">
                                <h6 className="card-title"><h5>Type: </h5> {dataget.data.type}</h6>
                                <h6 className="card-title"><h5>Dimension: </h5> {dataget.data.width} X {dataget.data.height}</h6>
                                <h6 className="card-title"><h5>View: </h5> {view}</h6>

                                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>

                        {/* <img src=  style={{ height: "400px", width: "200px" }} /> */}
                    </center>
                </>
             )}
        </div>
    )
}
