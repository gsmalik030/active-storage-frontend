import React, { useContext } from 'react'
import { AppContext } from '../App'

const File = () => {
    const {latestPost, setLatestPost} = useContext(AppContext)

    const hanleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData()
        data.append("post[title]", e.target.title.value)
        data.append("post[image]", e.target.image.files[0])
        sendToServer(data)
    }
    const sendToServer = (data) => {}
  return (
    <div>
      <form onSubmit={(e)=>hanleSubmit(e)}>
        <label htmlFor="title">Titile</label>
        <input type="text" name="title" id="title"   />
        <br />
        <label htmlFor="image">Image</label>
        <input type="file" name="image" id="image"   />
        <br />
        <button type='submit'>Upload</button>
        
      </form>
    </div>
  )
}

export default File
