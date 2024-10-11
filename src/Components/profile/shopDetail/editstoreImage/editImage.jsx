import { useSelector } from 'react-redux';
import style from './index.module.css';
import { useEffect, useState } from 'react';
const EditStoreImage=()=>{

    const store=useSelector((state)=>state.user.user);
    const [currentImage, setCurrentImage] = useState(null); 
    const [uploadedImage, setUploadedImage] = useState(null);
    const [changeimg,setchangeimg]=useState(false);
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
       
        if (file) {
            reader.readAsDataURL(file);
        }

        reader.onloadend = () => {
            setUploadedImage(reader.result);
        };

        setCurrentImage(uploadedImage);
        setUploadedImage(null); 
        setchangeimg(false);

    };

    // const handleImageSubmit = () => {
    //     setCurrentImage(uploadedImage);
    //     setUploadedImage(null); 
    // };

    useEffect(()=>{
        if(store){
            setCurrentImage(store?.store?.images[0])
        }
    },[store])
    return(
        <div className={style.EditStoreImage_Container}>
            <h4>Edit Store Image </h4>
            <p>You can edit the Store Image</p>
            <div className={style.EditStoreImage}>
                <img src={uploadedImage || currentImage} alt="Uploaded Preview" loading='lazy' style={{ width: '150px', height: '150px' }} />
              { !changeimg && 
              <div onClick={()=>setchangeimg(true)}>
                <h5 >Change Image  </h5>
                <h5 > OR  </h5>
                <h5 > Remove Image </h5>
              </div>
              }
              { changeimg && <input type="file" onChange={handleImageUpload} />}                
            </div>
        </div>
    )
}

export default EditStoreImage