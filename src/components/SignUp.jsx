import React from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useState, useEffect } from 'react'
import { auth } from '../utils/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';
// import loader from '../assets/loader.svg'
// import Loader from './Loader';


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authUser, setAuthUser] = useState(null);
    const [loading,setLoading] =useState(false)


    const handleSignUp = (e)=>{
        e.preventDefault()
        if(createUserWithEmailAndPassword(auth,email,password)){
            try{
            setLoading(true)
            alert('You are now Signed In')
        }catch(err){
            alert('Already Signed Up with this email!')
            console.log(err)
        }finally{
          setLoading(false)
        }
      }else{
        alert('Please fill the full form then click Notify!')
      }
    }
        // .then((userCredentials)=>{
        //     console.log(userCredentials)
            
        // })
        // .catch((error)=>{
        //     console.log(error)
        // })
    


    useEffect(()=>{
        const listen = onAuthStateChanged(auth,(user)=>{
            if(user){
                setAuthUser(user)
            }else{
                setAuthUser(null)
            }
        })

        listen()
    },[])

    const userSignOut=()=>{
         signOut(auth)
           .then(()=>{
            alert('Sign Out Successfully')
           })
           .catch((err)=>{
            alert('Something Went Wrong! Please try again later')
              console.log(err)
           })
    }



  return (
    <div className='p-2 my-3 gap-3 flex flex-col justify-between items-center '>
       <h1 className='text-2xl font-bold text-violet-600'>Sign Up For The BETA to see more</h1>

       {authUser ? (
            <>
              <p className='text-green-700 text-lg'>{`You are now Signed In as ${authUser.email}`}</p>
              <button className='m-2 p-2 border border-violet-700 text-blue-600  hover:bg-red-700 hover:text-white rounded-xl' onClick={userSignOut}>Sign Out</button>
            </>
        ):(
       <form className='flex md:flex-row flex-col gap-3 mx-2 p-2 mt-4 text-center' onSubmit={handleSignUp}>

           {/* <input className='border border-violet-700 rounded-xl p-3' type='text' placeholder='Business Name' value={businessName} onChange={(e)=>setBusinessName(e.target.value)} required/> */}

           <input className='border border-violet-700 rounded-xl p-2' type='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
           
           <input className='border border-violet-700 rounded-xl p-2' type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} required/>

           <button type='submit' className='flex-col m-2 p-2 bg-violet-600 hover:bg-green-700 text-white rounded-xl text-center'>
              { loading ? 'Loading.....' : 'Notify Me' }
           </button>

       </form> 

        )}
       
           <button className='m-2 p-2 border border-violet-700 text-blue-600  hover:bg-blue-700 hover:text-white rounded-xl'>
           <a href='https://retink.io/fap/'>
            Sign up as a freelance partner
            </a>
           </button>
    </div>
  )
}

export default SignUp