import { Link } from 'react-router-dom';
import { TiSocialLinkedin } from "react-icons/ti";
import { SlSocialGithub } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'), 
      message: formData.get('message')
    };

    const mailtoLink = `mailto:alamgirkhqwer@gmail.com?subject=${encodeURIComponent(`Contact from ${data.name}`)}&body=${encodeURIComponent(`${data.message}\n\nFrom: ${data.email}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="container mx-auto px-4 py-8 min-h-[calc(100vh-5rem)]">
      <h1 className="text-4xl font-bold text-blue-500 mb-5 text-center">Contact Me</h1>

      <div className="md:flex md:items-start md:justify-between md:space-x-8 max-w-6xl w-full mx-auto">
        
      <section className="md:w-1/2 mb-8 md:mb-0">
          
          <div className="img size-[15rem] mx-auto rounded-full bg-yellow-200 my-5">
            
            <div className="img pt-2 rounded-[1rem] overflow-hidden">
            <img src="/img/mail.png" alt="Mail" />
            </div>
           
          </div>

          <div className="contact text-white w-fit mx-auto my-12 space-y-3">
            <div className="email flex items-center gap-3">
              <div className="icon"><CgMail /></div>
              <span>alamgirkhqwer@gmail.com</span>
            </div>
            <div className="email flex items-center gap-3">
              <div className="icon"><FaPhone /></div>
              <span>+92 315 4572266</span>
            </div>
            <div className="email flex items-center gap-3">
              <div className="icon"><MdOutlineLocationOn /></div>
              <span>Old Muzafrabad Colony Landhi, Karachi.</span>
            </div>
          </div>

          <div className="social flex gap-4 w-fit mx-auto my-12">
            <Link to='https://www.linkedin.com/in/alamgir-khan-248b89259/' target="_blank"><div className="size-12 rounded-full border border-blue-500 text-3xl flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300"><TiSocialLinkedin /></div></Link>
            <Link to='https://github.com/Alamgir-Khan-315' target="_blank"><div className="size-12 rounded-full border border-blue-500 text-3xl flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300"><SlSocialGithub /></div></Link>
            <Link to='https://wa.me/923154572266' target="_blank"><div className="size-12 rounded-full border border-blue-500 text-3xl flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300"><FaWhatsapp /></div></Link>
          </div>

        </section>

        <form onSubmit={handleSubmit} className="md:w-1/2">

          <div className="mt-6 text-justify">
          <p className="text-gray-300 text-2xl md:text-3xl font-bold">Get In Touch</p>
              <p className="text-gray-300 my-2 md:my-4">Whether you have a question, want to start a project, or just want to connect, feel free to send me a message.</p>
          </div>

          <div className="mb-6">
            <label htmlFor="name" className="block text-blue-500 mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-blue-500 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-blue-500 mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows="3"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="hover-text w-full button"
          >
            Send Message
          </button>

        </form>

       

      </div>
    </div>
  )
}