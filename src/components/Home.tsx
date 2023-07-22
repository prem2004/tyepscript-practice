import React, { useEffect, useState } from 'react'

type HomeType={
  
}
type stateArray=[
  nameArray:Array<string>
]

type stateArrayObjec=
    {
      name:string,
      age:number,
    }
  


const Home = (props: HomeType) => {
  const[ename,setEname]=useState('');
  const[count,setCount]=useState(0);
  const[age,setAge]=useState(0)
  const[nameArray,setNameArray]=useState<string[]>([]);
  const[person,setPerson]=useState<{name:string,age:number}[]>([])

  const handleClick=(e:React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault();
    //setNameArray([...nameArray,ename])
    
    setPerson((prev)=>[
      ...prev,
      {name:"prem",age:20}
    ])
   
    //
  }  

  useEffect(()=>{
    console.log(person)
  },[person])

  const handeNameChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
   setEname(e.target.value)
  
  }
  const handleage=(e:React.ChangeEvent<HTMLInputElement>)=>{
    let num=Number(e.target.value)
    setAge(num)
  }

  return (
    <div>
      <form>
        <div>
          <input type="text" aria-label='name' onChange={handeNameChange} placeholder='enter name'/>
          <input type='text' aria-label='age' placeholder='enter age' value={age} onChange={handleage}/>
          <button onClick={handleClick}>Add Array</button>
          {ename}
          <div>Age: {age}</div>
          <h3>{nameArray}</h3>
        </div>
      </form>
    </div>
  )
}

export default Home