'use client'
import React, { useState } from 'react'


const useform = (values) => {

    const[form,setform]=useState(values)
      

    const onChangeHandler=()=>{
        setform((prevFormValues)=>({
            ...prevFormValues,
            [e.target.names]:e.target.values
        }))
    }
  return (
    form,
    onChangeHandler 
  )
}

export default useform