// src/components/Loading/Loading.jsx
import React from 'react'
import './Loading.css'

const Loading = () => {
  return (
    <div className="loading-spinner">
      {/* You can replace the below div with any spinner you want */}
      <div className="spinner"></div>
    </div>
  )
}

export default Loading
