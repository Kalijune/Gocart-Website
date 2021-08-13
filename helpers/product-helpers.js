var db=require('../config/connection')


module.exports={
    addProduct:(product,callback)=>{
        
        db.get().collection('product').insertOne(product).then((data)=>{
            //ops replaced with insertedID
            callback(data.insertedId)
        })
    }
}