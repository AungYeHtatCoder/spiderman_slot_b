import React from 'react'

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer>
      <div className='copyright'>
      <p>&copy;Copyright {year} <br />
      All rights Reserved By <a className='text-decoration-none fw-bold' href="https://delightmyanmar.pro" target='__blank'>Delight Myanmar</a></p>
      {/* <p>
      All content, image, and logo are respected property of Company and protected by copyright law.
      </p> */}
      </div>
    </footer>
  )
}

export default Footer
