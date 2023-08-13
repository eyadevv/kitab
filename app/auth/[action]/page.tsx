'use client'
import axios from "axios"
import Register from "@/components/auth/Register"
import Login from "@/components/auth/Login"
import Reset from '@/components/auth/Reset'

import { FormEvent } from "react"
import {Router, useRouter } from "next/router"
const page = ({params}:any) => {

  const action = params.action

     return  (<main  className=" w-screen h-screen flex justify-center items-center" >

<form className="w-1/2 rounded-lg p-4 bg-white bg-opacity-10 flex flex-col justify-start items-center" onSubmit={(e)=> e.preventDefault()}>
          {
              action === 'register'?
                  <Register /> :
              action === 'login'?
                  <Login />   :
              action === 'reset'
          }

          <button onSubmit={(e)=> handleSubmit(e , action )}  >Submit</button>
      </form>
     </main>)

}
export default page

async function handleSubmit(e:FormEvent,action:any ) {
  e.preventDefault()
  await axios({
    method:"POST",
    url: `/api/auth/${action}`
  }).then((res) => {

    if (res.status == 200) {
      window.open('/')
    } else {
      alert('idk')
    }
  })
  .catch((err) => err)
}