import style from './index.module.css';
import FormikControl from '../../../formikComponent/formikControl.jsx';
import { Formik,Form } from 'formik';
import * as Yup from 'yup';

const ProductInfo=({proInfo, locationdata})=>{
    const productInfo={
        ProductDescrip:proInfo?.description,
        CountryofOrigin:proInfo?.countryOfOrgin,
        Manufacturername:proInfo?.manufacturerName,
    }
    const productInfoSchema=Yup.object({
        ProductDescrip:Yup.string().required('Required !'),
        CountryofOrigin:Yup.string().required('Required !'),
        Manufacturername:Yup.string().required('Required !'),
    });
  
    return(
    <Formik initialValues={productInfo} validationSchema={productInfoSchema} enableReinitialize >
        {(formik)=>{
          return(
            <div className={style.ProductInfoCard}>
                <h3 className={style.ProductInfo_header} >Product Information</h3>
                <Form className={style.ProductInfoContent}> 
                        <FormikControl  className={style.form_control_area}  legend='Description' disabled={!!locationdata} control='textarea' rows={10}  placeholder='Description of the Product' name='ProductDescrip'/>
                        <div className={style.productMan}>
                            <FormikControl className={style.form_control}  legend='Country of Origin' disabled={!!locationdata} control='input' placeholder='Country of Origin' name='CountryofOrigin'/>
                            <FormikControl className={style.form_control}  legend='Manufacturer' disabled={!!locationdata}  control='input' placeholder='Manufacturer name' name='Manufacturername' />  
                        </div>
                </Form>
            </div>
            ) }} 
    </Formik>

    )
}

export default ProductInfo;