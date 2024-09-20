import styles from './index.module.css';
import icons from '../../../icons/icons';
const GetContactids=()=>{
    return(
    <div className={styles.contact_cards}>
        <div className={styles.contact_card}>
                <div className={styles.contact_card_header}>We have Received Your 
                Contact Form</div>
                <div className={styles.contact_card_para}>We will get back to you Shortly, If you have any quires contact us below</div>

        </div>
        <div className={styles.contact_card}>
                <div className={styles.contact_card_header}>Contact Us</div>
                <div className={styles.contact_card_para}>For any enquiries contact us</div>
                <div className={styles.contact_card_button}>
                        <img src={icons.phoneoutline} alt='->'/>
                        <button>Contact via Call</button>
                </div>
                <div className={styles.contact_card_button}>
                        <img src={icons.whatsapp} alt='->'/>
                        <button>Contact Via WhatsApp</button>
                </div>
        </div>
   </div>
    )
}

export default GetContactids;