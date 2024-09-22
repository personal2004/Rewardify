import * as Yup from 'yup';

export const storeCreateCheckoption=[
    {key:'I don’t have a GSTIN',value:'I don’t have a GSTIN'},
] 
export const WhatsappCheckOption=[
    {key:'My whatsapp number is same as above',value:'My whatsapp number is same as above'},
    {key:'I have a different whatsapp number',value:'I have a different whatsapp number'},
]
export const WorkdaysCheckOption=[
    {key:'Monday',value:'Monday'},
    {key:'Tuesday',value:'Tuesday'},
    {key:'Wednesday',value:'Wednesday'},
    {key:'Thursday',value:'Thursday'},
    {key:'Friday',value:'Friday'},
    {key:'Saturday',value:'Saturday'},
    {key:'Sunday',value:'Sunday'}
]
export const storeCreateValues={
    ownerName:'',
    ownerEmail:'',
    ownerphonenu:'',
    whatsappnumber:[],
    storeName:'',
    storeaddress:'',
    storenum:'',
    workingdays:[],
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
    ownerName:Yup.string().required('Required !'),
    ownerEmail:Yup.string().required('Required !'),
    ownerphonenu:Yup.string().required('Required !'),
    whatsappnumber:Yup.array().required('Required !'),
    storeName:Yup.string().required('Required !'),
    storeaddress:Yup.string().required('Required !'),
    storenum:Yup.string().required('Required !'),
    workingdays:Yup.array().required('Required !'),
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

