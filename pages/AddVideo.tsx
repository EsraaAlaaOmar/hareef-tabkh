import React,{useState} from 'react'
import Upload from '../components/reusable/Upload'
import Navbar from '../components/reusable/Navbar'
import Footer from '../components/reusable/Footer'
const AddVideo = () => {
     const[viewList, setViewList] = useState()
  return (
    <div>
        <Navbar  getShowList={setViewList}/>
        <Upload />
        <Footer />
        </div>
  )
}

export default AddVideo