const tuition = (arr , userData)=>{
    const programmeCost = 1880;

    const totalLength = arr.reduce((accumulator, currentItem) => {
        if (typeof currentItem.cost === 'number') {
          return accumulator + currentItem.cost;
        } else {
          console.log(`Item does not have a valid length property: ${JSON.stringify(currentItem)}`);
          return accumulator;
        }
      }, 0);

      console.log("total length : " , totalLength)
    
      

    if(userData.international){
        return programmeCost + totalLength;

    }else{

        if((programmeCost + totalLength) > 9070){
            return 9070;
        }else{
           return programmeCost + totalLength;
        }
    

    }
  

}

const getRecidenceFee = (userData)=>{

    if (userData.residence ==="campus") {
        return 9620;
    }

    if (userData.residence ==="campus" && userData.international) {
        return 40000;
    }

    return 0;

}

const getOutstanding = (accountData) =>{
    if(accountData.balanceOwing > 100){
        return accountData.balanceOwing;
    }

    return 0;

}


export {tuition , getRecidenceFee ,getOutstanding}

