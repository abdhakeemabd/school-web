
import '../style/contact.css'
import PageBanner from '../compontent/pagebanner'
import ContactInfo from '../compontent/contactinfo';
import {useState} from 'react';
import Navbar from '../compontent/navbar';
import Footer from '../compontent/footer';
function Contact() {
  const [loading,setLoading]=useState(false);
  return (
    <div className='contact'>
      <Navbar></Navbar>
      <PageBanner></PageBanner>
      <ContactInfo loading={loading} onClick={() => setLoading(!loading)}
      ></ContactInfo>
      <Footer></Footer>
    </div>

  )
}

export default Contact
