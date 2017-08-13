const products = function(dbCon) {
    const that ={};

    function getAllProducts() {
      return new Promise ((resolve, reject) => {
        dbCon.query("SELECT * FROM products", function(err, results, fields) {
          if (err) reject(err);
          resolve(results);
        })
      })
    }
    that.getAllProducts = getAllProducts;
    return that;
}

module.exports = products;
