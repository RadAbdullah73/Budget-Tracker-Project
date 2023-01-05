import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { PieChart } from 'react-minimal-pie-chart';

const Chart = (props) => {
    const [thisUser, setThisUser]=useState("")
    const [loaded,setLoaded]=useState(false)
    const[month,setMonth]=useState("Jan")
    const [food , setFood] = useState(0)
    const [residence , setResidence] = useState(0)
    const [transport , setTransport] = useState(0)
    const [clothes , setClothes] = useState(0)
    const [health , setHealth] = useState(0)
    const [entertainment , setEntertainment] = useState(0)
    const [maintenance , setMaintenance] = useState(0)
    const [other , setOther] = useState(0)


    var data = JSON.parse(sessionStorage.getItem('user'))
    useEffect(() => {
        axios.get('http://localhost:8000/api/user/' + props.userId)

            .then(res => {
              setThisUser(res.data);
                setLoaded(true)
              
            },)
    }, []);
    /////////////////////////////////////////////////////////////
    useEffect(()=>{
        axios.get('http://localhost:8000/api/Budget/month/'+month)
        .then(res=>{
          var totalFood=0
          var totalResidance=0
          var totalTransport=0
          var totalClothes=0
          var totalHealth=0
          var totalEntertainment=0
          var totalMaintenance=0
          var totalOther=0
          res.data.filter(p=>p.user[0]._id==data.user._id).map((item,i)=>{
            totalFood += item.expenses.food
            totalResidance += item.expenses.residence
            totalTransport += item.expenses.transport
            totalClothes += item.expenses.clothes
            totalHealth += item.expenses.health
            totalEntertainment += item.expenses.entertainment
            totalMaintenance += item.expenses.maintenance
            totalOther += item.expenses.other
           
        }
          )
          setFood(totalFood)
          setResidence(totalResidance)
          setTransport(totalTransport)
          setClothes(totalClothes)
          setHealth(totalHealth)
          setEntertainment(totalEntertainment)
          setMaintenance(totalMaintenance)
          setOther(totalOther)

            setLoaded(true);
            console.log(data.user.salary)
  
        })
        .catch(err => console.error(err));
  
    },[]);

    return (
        
            <>
            {loaded &&

    <div style={{width:'30%' , height:'30%'}}>
        <PieChart
      
  data={[
    { title: 'Food', value: food, color: '#212F3D' },
    { title: 'Residence', value: residence, color: '#707B7C' },
    { title: 'Transport', value: transport, color: '#ff33cc' },
    { title: 'Clothes', value: clothes, color: '#D4AC0D' },
    { title: 'Health', value: health, color: '#229954' },
    { title: 'Entertainment', value: entertainment, color: '#2471A3' },
    { title: 'Maintenance', value: maintenance, color: '#7D3C98' },
    { title: 'Others', value: other, color: '#A93226' },

  ]}
/>
    </div>
    
    
}
</>
    )
}
export default Chart