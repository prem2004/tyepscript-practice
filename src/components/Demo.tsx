import React, { useEffect, useState } from 'react'

const Demo = () => {
  const[employee,setEmployee]=useState<{ename:string, email:any, gender:string}>()
  const[gender,setGender]=useState("");
  const[ename,setEname]=useState('');
  const[email,setEmail]=useState("");

   const handelName=(e:React.ChangeEvent<HTMLInputElement>)=>{setEname(e.target.value)}
   const handleEmail=(e:React.ChangeEvent<HTMLInputElement>)=>{setEmail(e.target.value)}
   
  const handleRadioChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
      console.log(e.target.value)
      setGender(e.target.value)
  }

  const handleSubmit=(e:React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault();
    setEmployee({ename,email,gender})
  }

  useEffect(()=>{
  console.log(employee)
  },[employee])

  return (
    <div>
      <form>
        <h1>Employee Form</h1>
        <div>
          <label htmlFor='ename'>Eneter name: </label>
          <input value={ename} onChange={handelName} id="ename"type="text"/>
        </div> 
        <div style={{marginTop:'20px'}}>
          <label htmlFor='email'>Eneter email: </label>
          <input value={email} onChange={handleEmail} id="email"type="text"/>
        </div>
        <div  style={{marginTop:'20px'}}>
          <label>Age : </label>
          <span onChange={handleRadioChange}>
             <input type="radio" name="age" value="male"/>Male
             <input type="radio" name="age" value="Female"/>Female
          </span>
        </div>
        <button onClick={handleSubmit}>Shubmit</button>
      </form>
    </div>
  )
}

export default Demo