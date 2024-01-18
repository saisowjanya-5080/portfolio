import React, { useRef } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qwpf9g2', 'template_rckwb6w', form.current, '68wbOLSNEggnKHCYw')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert("email send")
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section className='contactPage'>
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactdesc">Please fill out the form below to discuss any work opportunities</span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="tname" placeholder='Your Name' name='your_name' />
                <input type="email" className="email" placeholder='Your Email' name='your_email' />
                <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className="submitBtn">Submit</button>
                <div className="links">
                    <a href="https://www.linkedin.com/feed/"><img className='link' src="https://itcnet.gr/wp-content/uploads/2020/09/Linkedin-logo-on-transparent-Background-PNG--600x600.png" alt="" /></a>
                    <a href="https://github.com/saisowjanya-123/OIBSIP"><img className='link' src="https://pngimg.com/uploads/github/github_PNG45.png" alt="" /></a>
                    <a href="https://www.instagram.com/sai_sowjii/"><img className='link' src="https://clipart.info/images/ccovers/15169205701024px-Instagram_logo_2018_png.png" alt="" /></a>
                    <a href="https://www.facebook.com/profile.php?id=100024873533570"><img className='link' src="https://th.bing.com/th/id/R.6c3ea8b640f61035021c20dd5dcd37fa?rik=31mzN9qX%2bAR9pA&riu=http%3a%2f%2fclipart-library.com%2fnew_gallery%2f377-3776210_facebook-logo-vector-logovectornet-logo-facebook-2019-png.png&ehk=feGZ0i4yauVvpdtQu%2bTAeLkp%2bpCt2QN1zx7GrMwtQuA%3d&risl=&pid=ImgRaw&r=0" alt="" /></a>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact