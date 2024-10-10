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
    const ids=['','',wallet?.store?.upi[0]]
    // const location=useLocation()
    // useEffect(()=>{
    //     console.log(wallet?.store?.upi[0])
    //     if(location.pathname==='home/profile/wallet'){
    //       upicons.push(`(UPI ID:${wallet?.store?.upi[0]})`);

    //     }
    // },[wallet])
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
                        <img src={data.img} alt=''/>
                        {ids[index]!=='' &&<p>UPI ID:{ids[index]}</p>}                
                    </div>
                    {ids[index]===''?<button className={style.link_button} onClick={() => setActiveIndex(index)}>Link UPI</button>:
                    <button className={style.linked_button} onClick={() => setActiveIndex(index)}>UPI Linked</button>}
                 </div>
                 {activeIndex === index && <div>
                 <h6 >Add UPI</h6>
                    <Formik initialValues={storeCreateValues} validationSchema={storeCreatevalidationSchema} >
                        {(formik)=>{
                            return(
                                <Form>
                                    <input className={style.form_control}  placeholder='Enter UPI ID' onChange={(e)=>ids[index]=e.target.v}/>
                                    <div className={style.form_button}>
                                        <button onClick={()=>setActiveIndex(-1)}>Cancel</button>
                                        <button onClick={()=>setActiveIndex(-1)}>Link UPI</button>
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