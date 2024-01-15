import React from 'react'
import './Login.css'

export default function BtnSpinner() {
  return (
    <>
    <div className='spinnerCircle d-inline me-2'>
    <   div class="spinner-border spinner-border-sm" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    </>
  )
}
