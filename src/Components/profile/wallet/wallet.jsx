import style from './index.module.css';
import { Formik,Form } from 'formik';
import FormikControl from '../../formikComponent/formikControl';
import { storeCreateValues,storeCreatevalidationSchema } from '../../../utils/formcons';
import  {upilink}  from '../../../constant/constant';
import { useState } from 'react';
import { useSelector } from 'react-redux';
const Wallet=()=>{

    const wallet=useSelector((state)=>state.user.user);
    const [activeIndex, setActiveIndex] = useState(null);
    const [inputValues, setInputValues] = useState({});

    const ids=['','',wallet?.store?.upi[0]]
    const [items, setItems] = useState([
        { id: 0, value: null },
        { id: 1, value: null },
        { id: 2, value: wallet?.store?.upi[0] },
    ]);

    const handleChange = (id, newValue) => {
        setInputValues(prevValues => ({ ...prevValues, [id]: newValue }));
    };

    const handleSubmit = () => {
        const updatedItems = items.map(item =>
            item.id === activeIndex ? { ...item, value: inputValues[activeIndex] } : item
        );
        setItems(updatedItems);
        setActiveIndex(-1);
    };

    return(
       <div className={style.wallet}>
        <div>
        <h3>My Wallet</h3>
        <p>Here you can view your wallet details</p>
        </div>
        <Formik initialValues={storeCreateValues} validationSchema={storeCreatevalidationSchema} >
              {(formik)=>{
                return(
                    <Form className={style.walletbankform} >
                          <h3 className={style.docstorecard_header} >Bank Details</h3>
                          <FormikControl className={style.form_control} control='input' placeholder='Bank Name' name='bankname'/>
                          <FormikControl className={style.form_control} control='input' placeholder='Bank Account Number' name='bankAccountNumber'/>
                          <FormikControl className={style.form_control} control='input' placeholder='Bank IFSC Code' name='bankIFSCCode'/>
                    </Form>
                )
              }}
        </Formik>
        <div  className={style.walletLinkUpi}>
          <h3>Link UPI</h3>
            {upilink.map((data,index)=>{
                return(
                <>
                <div key={index} className={style.banklink}>
                    <div className={style.upiid_container}>
                        <img src={data.img} alt='' style={{width:'80px',height:'35px'}}/>
                        {items[index].value &&<p>UPI ID:{items[index].value}</p>}                
                    </div>
                    {items[index].value?<button className={style.linked_button} onClick={() => setActiveIndex(index)}>UPI Linked</button>:
                    <button className={style.link_button} onClick={() => setActiveIndex(index)}>Link UPI </button>}
                 </div>
                 
                 {activeIndex === index && <div>
                 <h6 >Add UPI</h6>
                    <Formik initialValues={storeCreateValues} validationSchema={storeCreatevalidationSchema} >
                        {(formik)=>{
                            return(
                                <Form className={style.setupiform}>
                                    {items.map(item => (
                                     <div key={item.id}>
                                        {item.id===index && 
                                            <input
                                                placeholder='Enter UPI ID'
                                                type="text"
                                                value={item.value}
                                                onChange={e => handleChange(item.id, e.target.value)}
                                            />}
                                        </div>
                                    ))}
                                    <div className={style.form_button}>
                                        <button onClick={()=>setActiveIndex(-1)}>Cancel</button>
                                        <button onClick={handleSubmit}>Link UPI</button>
                                    </div>
                                </Form>
                            )
                        }}
                 </Formik>
                 </div>
                 }
                </>
                )
             })} 
        
        </div>
        </div>
    )
}

export default Wallet