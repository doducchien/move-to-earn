import React from 'react'

export default function BaseButton({type='blue', content}) {



  return (
    <>
        {type ==='blue' && <button className='base-btn btn-blue'>{content}</button>}
        {type ==='white' && <button className='base-btn btn-white'>{content}</button>}
    </>
  )
}
