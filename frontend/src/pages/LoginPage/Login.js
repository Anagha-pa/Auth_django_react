import React,{useContext,useState} from 'react'
import AuthContext from "../../context/AuthContext";

const Login = () => {

  const [email,setEmail] = useState("")
  const [password, setPassword] = useState("")


  const {loginUser} = useContext(AuthContext)

  console.log(email);
  console.log(password);

  const handleSubmit = async e =>{
    e.preventDefault()
    email.length > 0 && loginUser(email,password)
  }








  return (
    <div>
      <form  onSubmit={handleSubmit}  className="max-w-sm mx-auto mt-20">

  <div className="mb-5">
    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">EMAIL</label>
    <input type="email" value={email} onChange={e=>setEmail(e.target.value)} id="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 
    text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100
     dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 
     dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="email" required/>
  </div>

  <div className="mb-5">
    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">PASSWORD</label>
    <input type="password" value={password} onChange={e=>setPassword(e.target.value)} id="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 
    text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100
     dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 
     dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="password" required/>
  </div>

  

  <button type="submit" className="text-white ml-24  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-16 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
</form>
    </div>
  )
}
export default Login;
