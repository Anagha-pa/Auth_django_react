import { useState,useContext } from "react";
import AuthContext from "../../context/AuthContext";






const Signup = () => {

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [phone,setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")

  const {signupUser} = useContext(AuthContext)

  console.log(name);
  console.log(email);
  console.log(phone);
  console.log(password);
  console.log(password2);

  const handleSubmit = async e =>{
    e.preventDefault()
    signupUser(name,email,phone,password,password2)
  }

  return (
    <div>
     
<form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-20">
  <div className="mb-5">
    <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">NAME</label>
    <input type="text" value={name} onChange={e=>setName(e.target.value)} id="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 
    text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100
     dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 
     dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name" required/>
  </div>

  <div className="mb-5">
    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">EMAIL</label>
    <input type="email" value={email} onChange={e=>setEmail(e.target.value)} id="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 
    text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100
     dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 
     dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="email" required/>
  </div>

  <div className="mb-5">
    <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">PHONE NUMBER</label>
    <input type="phone-number" value={phone} onChange={e=>setPhone(e.target.value)} id="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 
    text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100
     dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 
     dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="phone" required/>
  </div>

  <div className="mb-5">
    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">PASSWORD</label>
    <input type="password" value={password} onChange={e=>setPassword(e.target.value)} id="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 
    text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100
     dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 
     dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="password" required/>
  </div>

  <div className="mb-5">
    <label for="confrim-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">CONFRIM-PASSWORD</label>
    <input type="password" value={password2} onChange={e=>setPassword2(e.target.value)} id="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 
    text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100
     dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 
     dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="confrim-password" required/>
  </div>

  <button type="submit" className="text-white ml-24  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-16 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</button>
</form>

    </div>
  )
}
export default Signup;
