// function checkOrder(available, ordered){
//     if (ordered < available){
//         console.log( 'Your order is too large, we don’t have enough goods');
//     }else if (ordered > available){
//         console.log( 'Your order is accepted');
//     }else if (ordered === 0){
//         console.log( 'Your order is empty');
//     }else {
//         console.log( 'Your input is fail');
//     }
// }
// let available = 20;
// let ordered = 21;
// console.log(checkOrder(ordered ));


function checkOrder(available, ordered) {
        if (available >= ordered){
           
            console.log('Your order is accepted')
        }
        if (available < ordered){
           
            console.log('Your order is too large, we don’t have enough goods')
        }
        if (ordered === 0){
            console.log('Your order is empty')
        }
    }
    
    checkOrder(undefined, 0);
