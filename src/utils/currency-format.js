const getCurrency =(number)=>{
    let rand = new Intl.NumberFormat('en-ZA', {
        style: 'currency',
        currency: 'ZAR',
    });

    return rand.format(number);
}

export  {getCurrency};