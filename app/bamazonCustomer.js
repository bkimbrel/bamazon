const products = function(dbCon) {
    const that ={};
    let allProductInfo;
    function getAllProducts() {
      return new Promise ((resolve, reject) => {
        dbCon.query("SELECT * FROM products", function(err, results, fields) {
          if (err) reject(err);
          resolve(results);
          allProductInfo = results;
        })
      })
    }
    function checkQty(item_id, quantity) {
      console.log('productId', item_id, typeof item_id);
      var parsedId = parseInt(item_id, 10);
      var parsedQty = parseInt(quantity, 10);
      allProductInfo.filter(function(item){
        if(item.item_id === parsedId){
          if(parsedQty > item.quantity){
          console.log('not enough');
        }else{
          console.log('we have enough', item);
        }

        };
      })

    }
    that.getAllProducts = getAllProducts;
    that.checkQty = checkQty;
    return that;
}

module.exports = products;
