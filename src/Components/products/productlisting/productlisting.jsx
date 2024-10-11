import Coffee from './coffee/coffee';
import Dairy from './dairy/dairy';
import Desserts from './desserts/dessrets';
import Fruits from './fruits/fruits';
import style from './index.module.css';
import Masalas from './masalas/masalas';
import Rice from './rice/rice';
import Snacks from './snacks/snack';
const ProductListing=()=>{

    return(
        <div className={style.ProductListing}>
          <Fruits/>
          <Dairy/>
          <Snacks/>
          <Rice/>
          <Masalas/>
          <Coffee/>
          <Desserts/>  
        </div>
    )
}

export default ProductListing