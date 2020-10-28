const mongoose = require('mongoose')
const ProgressSchema = new mongoose.Schema({
fullName: {
  type:String
},
clas: {
  type:String
},
image: {
  type:String
},
school_id: {
  type:String
},
schoolName: {
  type:String
},
student_id: {
  type:String
},
attendance:{
  type:Array
},
officeHeld:{
  type:String
}
})
var Progress = mongoose.model('Progress', ProgressSchema)
module.export = Progress
