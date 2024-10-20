import styles from './index.module.css';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
const StoreAgree=()=>{
    const [isChecked, setIsChecked] = useState(false);
    const navigate=useNavigate();
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
      };
    
    return(
        <>
           <div className={styles.docinfoform_header} >Partner Agreement</div>
           <h6>Read the document below and agree to the terms to proceed.</h6>
            <div className={styles.docinfoform_Container}>
                <div className={styles.agreement_content}>
                    <p>
                    Lorem ipsum dolor sit amet consectetur. Porta eget congue eu condimentum diam. Sed nulla viverra phasellus non enim commodo sed ullamcorper. 
                    Amet risus pretium eleifend eget eu vitae. Id cursus velit erat non porttitor. Arcu feugiat proin purus platea. Adipiscing donec risus molestie
                     vitae malesuada. Elit in massa tempor vivamus nisi. Vel aliquet proin et lobortis 
                    morbi dui sodales neque. Facilisis nisl facilisis erat id convallis arcu. Accumsan 
                    adipiscing scelerisque egestas dignissim quam accumsan. Pretium odio sit sit pulvinar. Ac elit ut tincidunt ipsum gravida rhoncus lectus. 
                    Id egestas blandit mauris arcu est tellus in sit nisl. Eu consectetur vitae odio ultrices netus pulvinar ultrices congue risus. orttitor.
                     Arcu feugiat proin purus platea. Adipiscing donec risus molestie vitae malesuada. Elit in massa tempor vivamus nisi. Vel aliquet proin et 
                     lobortis morbi dui sodales neque. Facilisis nisl facilisis erat id convallis arcu. Accumsan adipiscing scelerisque egestas dignissim quam accumsan. Pretiu orttitor. 
                     Arcu feugiat proin purus platea. Adipiscing donec risus molestie vitae malesuada. Elit in massa tempor vivamus nisi. Vel aliquet proin et lobortis morbi dui. Id egestas blandit mauris arcu
                     est tellus in sit nisl. Eu consectetur vitae odio ultrices netus pulvinar ultrices congue risus. orttitor. Arcu feugiat proin purus platea.
                      Adipiscing donec risus molestie vitae malesuada. Elit in massa tempor vivamus nisi. Vel aliquet proin et lobortis morbi dui sodales neque.
                       Facilisis nisl facilisis erat id convallis arcu. Accumsan adipiscing scelerisque egestas dignissim quam accumsan. Pretiu orttitor. Arcu feugiat proin purus platea. Adipiscing donec risus molestie vitae malesuada. Elit in massa tempor vivamus nisi. Vel aliquet proin et lobortis morbi dui. lobortis morbi dui sodales neque. Facilisis nisl facilisis erat id convallis arcu. Accumsan adipiscing scelerisque egestas dignissim quam accumsan. Accumsan adipiscing scelerisque egestas dignissim quam accumsan.
                    </p>
                </div>
                <div className={styles.store_num}><input type='checkbox' name='checkbox' onClick={handleCheckboxChange} /><label htmlFor='checkbox'>I have read all the terms & conditions and agree to them.</label></div>
                <button className={styles.continue_button} onClick={()=>navigate('/login')}>Continue</button>

            </div>
        </>
    )
}

export default StoreAgree