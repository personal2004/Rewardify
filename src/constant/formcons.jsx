import * as Yup from 'yup';

export const storeCreateCheckoption=[
    {key:'I don’t have a GSTIN',value:'I don’t have a GSTIN'},
] 

export const storeCreateValues={
    storeOwnerPan:'',
    GSTIN:'',
    GSTINStatus:[],
    bankname:'',
    bankAccountNumber:'',
    bankIFSCCode:'',
    selectoption:'',
    radiooption:'',
    birthdate:null,
};

export const storeCreatevalidationSchema=Yup.object({
    storeOwnerPan:Yup.string().required('Required !'),
    GSTIN:Yup.string().required('Required !'),
    GSTINStatus:Yup.array().required('Required !'),
    bankname:Yup.string().required('Required !'),
    bankAccountNumber:Yup.string().required('Required !'),
    bankIFSCCode:Yup.string().required('Required !'),
    selectoption:Yup.string().required('Required !'),
    radiooption:Yup.string().required('Required !'),
    birthdate:Yup.date().required('Required !').nullable(),
});

