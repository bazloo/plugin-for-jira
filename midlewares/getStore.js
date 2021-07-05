async function setStore(req, res, next){
   console.log(req.context);
   next();
}

module.exports = {
    setStore,
}