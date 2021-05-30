
const ADD_PRODUCT = ADD_PRODUCT ;
const REMOVE_PRODUCT = REMOVE_PRODUCT ;


const addProduct = (id) =>{
    return {
        type : ADD_PRODUCT ,
        id : id
    }
}

const removeProduct = (id) =>{
    return {
        type : REMOVE_PRODUCT,
        id : id
    }
}
