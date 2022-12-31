import React from 'react'
import axios from 'axios'
import { Link } from '@reach/router';

const TableG = (props) => {
  
    
  return (
    <div style={{backgroundColor:"#dddddd"}}>
      <h1>top 3</h1>
            {props.data.sort((a, b) => (b.coun1.votes+b.coun2.votes+b.coun3.votes)- (a.coun1.votes+a.coun2.votes+a.coun3.votes)).slice(0,3).map((item,i)=>{
                return( <div style={{border:"1px solid black",marginTop:"30px"}} key={i}>
                <Link to={"/choose/"+item._id}>{item.question}</Link>
                
                <p>{item.coun1.name}:{item.coun1.votes}</p>
                <p>{item.coun2.name}:{item.coun2.votes}</p>
                <p>{item.coun3.name}:{item.coun3.votes}</p>
              
                
                </div>)
            })}
    </div>
  )
}

export default TableG
