const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/snowboardGearSelector', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})

.then(()=>{
    console.log("Connected to Snowboard Gear Selector DB")
})
.catch((err)=>{
    console.log(err)
})