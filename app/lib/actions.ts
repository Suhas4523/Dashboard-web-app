'use server';

export async function createInvoice(formData : FormData){
    const rawFormdata = {
        customerId : formData.get('customerId'),
        amount : formData.get('amount'),
        status : formData.get('status')
    };
    console.log(rawFormdata);
}