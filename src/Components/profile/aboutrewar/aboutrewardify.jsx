import style from './index.module.css';
import icons from '../../../icons/icons';
import { useState } from 'react';

const ProfileAbout=()=>{
    const [showagree,setshowagree]=useState(false);
    return(
        <div className={style.aboutRewar}>
            <div className={style.aboutRewar_header}>
                <h4>About REWARDIFY</h4>
                <p>Here you can view our T&C, Privacy Policy etc.</p>
            </div>
            <div className={style.aboutRewar_Block}>
                <div>
                <h4>About US</h4>
                {showagree && <p>Lorem ipsum dolor sit amet consectetur. Nulla duis ornare arcu enim. 
                    Placerat donec ipsum in vitae ante at orci. Lorem ipsum semper aliquam mauris ut eu id pellentesque libero.
                     Ut massa ut amet et arcu non bibendum velit odio. Sed eu facilisi facilisis a suspendisse.
                      Eu in amet gravida placerat sed volutpat. 
                     Massa elementum risus elit bibendum a amet hac. Integer nunc dignissim ultrices quam venenatis.
                      At etiam sem accumsan et elit. Velit mus felis quam donec faucibus nec nibh auctor dictum. Enim consequat a quisque facilisis. 
                      Scelerisque turpis risus purus nisl ultricies faucibus odio tempus.
                       Pellentesque amet enim enim volutpat vulputate. Nibh egestas in facilisi est volutpat magna porta. Semper facilisis nunc tortor scelerisque.
                        Sem augue purus augue est tempor. Nunc tortor faucibus ullamcorper purus aliquam lectus.
                         Mi integer a vulputate diam commodo cursus arcu. Lectus dignissim senectus sem mollis augue. arcu. 
                         Lectus dignissim senectus sem mollis augue. arcu. Lectus dignissim senectus sem mollis augue. rcu. Lectus dignissim senectus sem mollis augue. vulputate.
                     Nibh egestas in vulputate. Nibh egestas in vulputate. Nibh egestas in vulputate. Nibh egestas in .</p>}
                </div>
              {showagree?<span onClick={()=>setshowagree(!showagree)}>{icons.deopuparrow}</span>:<span onClick={()=>setshowagree(!showagree)}>{icons.dropdownarrow}</span>}            
          </div>
            <div className={style.aboutRewar_Block}>
                <h4>Terms & Condition</h4>
                <span>{icons.dropdownarrow}</span>
            </div>
            <div className={style.aboutRewar_Block}>
                <h4>Privacy Policy</h4>
                <span>{icons.dropdownarrow}</span>
            </div>
        </div>
    )
}

export default ProfileAbout