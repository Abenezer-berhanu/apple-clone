import React from 'react'
import { Link } from '@mui/material'

export default function StoreBottomFooter() {
  return (
    <div className='store--bottom--footer--card'>
      <div className='store--bottom--footer--top'>More ways to shop: <Link> Find an Apple Store or other retailer near you</Link>. Or call 1‑800‑MY‑APPLE.</div>
      <div className='store--bottom--footer--bottom'>
      <p>Copyright © 2023 Abenu. All rights reserved.</p>
      <ul>
      <li>Privacy Policy</li>
      <li>Terms of Use</li>
      <li>Sales and Refunds</li>
      <li>Legal</li>
      <li>Site Map</li>
      </ul>
      <p>Ethipia</p>
      </div>
    </div>
  )
}
