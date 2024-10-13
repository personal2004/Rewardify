import style from './index.module.css';
import { dummyimg } from '../../../../img/images';

const ProductImg=({img=dummyimg})=>{
   
    return(
            <div className={style.ProductImgCard}>
                <h3 className={style.ProductImg_header} >Product Image</h3>
                <p>Product images will be fetched from the Rewardify server</p>
                <div className={style.imgContainer}>
                  <img src={img} alt='Dummy img'loading='lazy' style={{width:'150px',height:'140px'}}/>
                </div>
            </div>
    )
}

export default ProductImg;