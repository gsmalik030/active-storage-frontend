import React, { useContext, useEffect } from 'react'
import { AppContext } from '../App'


const LatestImage = () => {
    const {latestPost, setLatestPost} = useContext(AppContext)

    useEffect(() => {
        fetch('http://localhost:3000/latest')
        .then(res => res.json())
        .then(data => {
            setLatestPost(data.image_url)
        }).catch(err => console.log(err))
    }, [latestPost]);
  return (
    <div>
        <img src={latestPost} alt="latest" className='image' />
    </div>
  )
}

export default LatestImage
