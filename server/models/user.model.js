const mongoose = require("mongoose");
function formatDate() {
	const days={sat:'saturday',sun:'sunday' , mon : 'monday' , tue:'tuesday' , wen:'wednesday' , thu:'thursday' , fri:'friday'}
    var d = new Date(),
	
        month = '' + (d.getMonth() + 1),
        day = d.toString( { weekday: 'long' });
		// 'Sat' in day?day1=days.sat:day=="sun" ?day1=days.mon:day=="mon"?day1=days.mon:day=="tue"?day1=days.tue:day=="wen"?day1=days.wen:day=='thu'?day1=days.thu:day1=days.fri
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return day;
}


const UserSchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true, 
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      validate: {
        validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        message: "Please enter a valid email"
      }
    },
    password: {
      type: String,
      required: true, 
      timestamps: true
   
    }
  }, {timestamps: true});

const BudgetSchema = new mongoose.Schema({
	expenses:{food:Number,residence:Number,transport:Number,clothes:Number,health:Number,entertainment:Number,other:Number,maintenance: Number},
	dailyIncome:Number,
	monthlyIncome:{salary:Number,investment:Number,other:Number},
	debts:Number,
	user:[UserSchema],
	set1: {type:String,default:()=> formatDate()}
	
	
	
},{timestamps: true});

const Budget = mongoose.model("Budget", BudgetSchema);

module.exports = [Budget,UserSchema]

