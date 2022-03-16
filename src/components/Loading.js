import React from 'react'
import {Spinner} from 'react-bootstrap'

function Loading() {
  return (
    <div>
        <Spinner 
        animation='border' 
        role='status' 
        style={{width: '50px', margin: 'auto', height: '50px', display: 'block',}}>
        </Spinner>
        <span className='sr-only'>Loading...</span>
    </div>
  )
}

export default Loading