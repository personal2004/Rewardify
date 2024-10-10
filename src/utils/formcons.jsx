import * as Yup from 'yup';

export const storeCreateCheckoption=[
    {key:'I don’t have a GSTIN',value:'I don’t have a GSTIN'},
] 
export const WhatsappCheckOption=[
    {key:'My whatsapp number is same as above',value:'My whatsapp number is same as above'},
    {key:'I have a different whatsapp number',value:'I have a different whatsapp number'},
]

export const storeinfoValues={
    ownerName:'',
    ownerEmail:'',
    ownerphonenu:'',
    whatsappnumber:[],
}
export const storeInfovalidationSchema=Yup.object({
    ownerName:Yup.string().required('Required !'),
    ownerEmail:Yup.string().required('Required !'),
    ownerphonenu:Yup.string().required('Required !'),
    whatsappnumber:Yup.array().required('Required !'),
});
export const storeCreateValues={
    storeName:'',
    storeaddress:'',
    storenum:'',
    workingdays:[],
    openingTime: '', 
    closingTime: '',
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
    storeName:Yup.string().required('Required !'),
    storeaddress:Yup.string().required('Required !'),
    storenum:Yup.string().required('Required !'),
    workingdays:Yup.array().required('Required !'),
    openingTime: Yup.string()
        .required('Opening time is required')
        .matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Invalid time format'), 
    closingTime: Yup.string()
        .required('Closing time is required')
        .matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Invalid time format'),
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

