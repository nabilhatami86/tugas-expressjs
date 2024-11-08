const router = require ('express').Router();

router.get("/", (req, res, next) => {
  res.send({
    message: "Task Eduwork Express!",
    status: 200,
  });
});

router.get('/product/:id',( req, res) => {
    console.log(req.query);
    res.json({
        id: req.params.id,
        name: "Product Name",
        price: 100.00
        
    });
});
router.get('/:category/:tag',( req, res) => {
    const {category, tag} = req.params;
    res.json({category, tag})
});

router.post('/product/:id', (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;
    res.json({
        id,
        name,
        price
    })
    
})


module.exports = router;
