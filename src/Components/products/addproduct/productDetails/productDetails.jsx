import style from './index.module.css';
import FormikControl from '../../../formikComponent/formikControl';
import { Formik,Form } from 'formik';
import * as Yup from 'yup';
import { forwardRef } from 'react';
import { useEffect } from 'react';

const ProductDetails=forwardRef(({editproductDetails,CategoryOptions,productoption,handleproductChange},ref)=>{

    // const productDetail={
    //     category:null,
    //     ProductName:null,
    //     ProductMRP:null,
    //     Discounttype:null,
    //     DiscountValue:null,
    //     ProductPrice:null,
    //     UOM:null,
    //     ProductSize:null,
    //     AvailableQuantity:null,
    // }

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
    const option = [
        { key: 'Discount type', value: '' },
        { key: 'Special Discount', value: '1' },
        { key: '10% Discount', value: '2' }
    ];
    const options = [
        { key:  'Select related Category', value: '' },
    ];

    const unitOptions = [
        { key: 'UOM (unit of measurement)', value: '' },
        { key: 'One Unit', value: '1' },
        { key: 'One Pack', value: '2' },
        { key: 'Gram', value: '3' },
        { key: 'Kilogram', value: '4' },
        { key: 'Millilitre', value: '5' },
        { key: 'Litre', value: '6' },
      ];

    return(
    <Formik initialValues={ editproductDetails} 
    validationSchema={productDetailsSchema}
    innerRef={ref}
    enableReinitialize
    >
        {({ handleChange, setFieldValue, touched, errors })=>{
          return(
            < div className={style.ProductDetailsCard}>
            <h3 className={style.profile_header} >Product Details</h3>
            <Form className={style.ProductDetailsContent} >
                    <FormikControl className={style.form_select} control='select' options={CategoryOptions ?? options} placeholder='Select related Category' name='category'/>
                    <FormikControl className={style.form_select} onChange={(e)=>{
                     handleChange(e);
                     handleproductChange(e.target.value)               
                     setFieldValue('ProductName', e.target.value);
                    }} control='select'  options={productoption ?? [{key:'Product Name', value: '0'}]} placeholder='Product Name' name='ProductName'/>
                    {/* disabled={!!editproductDetails}  */}
                    <FormikControl className={style.form_control} control='input' placeholder='Product MRP' name='ProductMRP' />
                    <div className={style.DiscountContainer}>
                        <FormikControl className={style.form_select} control='select'options={option} placeholder='Discount type' name='Discounttype'/>
                        <FormikControl className={style.form_control} control='input' placeholder='DiscountnValue' name='DiscountValue' />      
                    </div>
                    <FormikControl className={style.form_control} control='input' placeholder='Product Price' name='ProductPrice'/>
                    <FormikControl className={style.form_select}  control='select' options={unitOptions} placeholder='UOM (unit of measurement)' name='UOM'/>
                    <FormikControl className={style.form_control} control='input'placeholder='Product Size( Enter the size of each Product)' name='ProductSize' />
                    <FormikControl className={style.form_control} control='input'  placeholder='Available Quantity' name='AvailableQuantity' />          
            </Form>
            </div>
            ) }} 
    </Formik>

    )
})

export default ProductDetails;