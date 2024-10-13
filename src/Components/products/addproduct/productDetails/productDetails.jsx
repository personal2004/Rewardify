import style from './index.module.css';
import FormikControl from '../../../formikComponent/formikControl';
import { Formik,Form } from 'formik';
import * as Yup from 'yup';

const ProductDetails=({proDetails={
    name:'',
    productCategory:{ name:'Select related Category'},
}})=>{
    const productDetails={
        category:proDetails?.productCategory?.name,
        ProductName:proDetails?.name,
        ProductMRP:'',
        Discounttype:'',
        DiscountValue:'',
        ProductPrice:'',
        UOM:'',
        ProductSize:'',
        AvailableQuantity:'',
    }
    const productDetailsSchema=Yup.object({
        category:Yup.string().required('Required !'),
        ProductName:Yup.string().required('Required !'),
        ProductMRP:Yup.string().required('Required !'),
        Discounttype:Yup.string().required('Required !'),
        DiscountValue:Yup.string().required('Required !'),
        ProductPrice:Yup.string().required('Required !'),
        UOM:Yup.string().required('Required !'),
        ProductSize:Yup.string().required('Required !'),
        AvailableQuantity:Yup.string().required('Required !')
    });
    const options = [
        { key: proDetails?.productCategory?.name, value: '0' },
        { key: 'Option 2', value: '2' },
        { key: 'Option 3', value: '3' }
    ];
    const option = [
        { key: 'Discount type', value: '0' },
        { key: 'Option 2', value: '2' },
        { key: 'Option 3', value: '3' }
    ];
    return(
    <Formik initialValues={productDetails} validationSchema={productDetailsSchema} >
        {(formik)=>{
          return(
            < div className={style.ProductDetailsCard}>
            <h3 className={style.profile_header} >Product Details</h3>
            <Form className={style.ProductDetailsContent} >
                    <FormikControl className={style.form_select} control='select' options={options} placeholder='Select related Category' name='category'/>
                    <FormikControl className={style.form_control} control='input' placeholder='Product Name' name='ProductName'/>
                    <FormikControl className={style.form_control} control='input' placeholder='Product MRP' name='ProductMRP' />
                    <div className={style.DiscountContainer}>
                        <FormikControl className={style.form_select} control='select'options={option} placeholder='Discount type' name='Discounttype'/>
                        <FormikControl className={style.form_control} control='input' placeholder='DiscountnValue' name='DiscountValue' />      
                    </div>
                    <FormikControl className={style.form_control} control='input' placeholder='Product Price' name='ProductPrice'/>
                    <FormikControl className={style.form_control} control='input' placeholder='UOM(unit of measurement)' name='UOM'/>
                    <FormikControl className={style.form_control} control='input' placeholder='Product Size( Enter the size of each Product)' name='ProductSize' />
                    <FormikControl className={style.form_control} control='input' placeholder='Available Quantity' name='AvailableQuantity' />          
            </Form>
            </div>
            ) }} 
    </Formik>

    )
}

export default ProductDetails;