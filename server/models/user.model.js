const mongoose = require("mongoose");
const bcrypt = require('bcrypt')
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
   
    },
    salary:{type:Number, required: true}
  }, {timestamps: true});

const BudgetSchema = new mongoose.Schema({
	expenses:{food:{type:Number,default:0},residence:{type:Number,default:0},transport:{type:Number,default:0},clothes:{type:Number,default:0},health:{type:Number,default:0},entertainment:{type:Number,default:0},other:{type:Number,default:0},maintenance: {type:Number,default:0}},
	dailyIncome:Number,
	debts:Number,
	user:[UserSchema],
	set1: {type:String,default:()=> formatDate()}
	,
	sum:{type:Number , default:0}
	
},{timestamps: true});
UserSchema.virtual('confirmPassword')
  .get( () => this._confirmPassword )
  .set( value => this._confirmPassword = value );

  // UserSchema.pre('validate', function(next) {
  //   if (this.password !== this.confirmPassword) {
  //     this.invalidate('confirmPassword', 'Password must match confirm password');
  //   }
  //   next();
  // });

  UserSchema.statics.signup = async function(firstName,lastName,email,password,confirmPassword,salary)  {
    const exist = await this.findOne({email})
    if (exist){
      throw Error('Email already in use')
    }
    if(password !== confirmPassword){
      throw Error('password must match')

    }
    if(!lastName||!firstName || !email || !password || !confirmPassword){
      throw Error('All filed must be filled')
    }
    if(password.length <8){
      throw Error('Password must be 8 characters or longer')

    }
    const salt = await bcrypt.genSalt(10)
    const hash= await bcrypt.hash(password,salt)

    const user = await this.create({firstName,lastName,email,password:hash,confirmPassword,salary})
    return user
  }
// near the top is a good place to group our imports
// this should go after 
// UserSchema.pre('save', function(next) {
//   bcrypt.hash(this.password, 10)
//     .then(hash => {
//       this.password = hash;
//       next();
//     });
// });
UserSchema.statics.login = async function(email,password){
  if(!email || !password){
    throw Error('All filed must be filled')
  }
  const user=await this.findOne({email})

  if(!user){
    throw Error('Inccorect email')
  }
  const match = await bcrypt.compareSync(password,user.password)

  if(!match){
    throw Error('Invalid password')
  }
  return user
}
const Sugschema = new mongoose.Schema ({
  title:{
      type: String,
      required: true
    },
    user:[UserSchema],
  suggested:{  type: String,
    required: true}
  // required: ["title"],
  // properties: {
  //   title: {type: "string", title: "Title", default: "A new task"},
  //   done: {type: "boolean", title: "Done?", default: false}
  // }
},{timestamps: true});
const Budget = mongoose.model("Budget", BudgetSchema);
const User = mongoose.model("UserSchema", UserSchema);
const Suggested = mongoose.model("Sugschema", Sugschema);
////////////////////////////////////////////////




module.exports = {Budget,User,Suggested}

