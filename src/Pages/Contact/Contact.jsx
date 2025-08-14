import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { TiSocialLinkedin } from "react-icons/ti";
import { SlSocialGithub } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';


const contactDetails = [
  { icon: <MdAttachEmail />, text: 'alamgirkhqwer@gmail.com', Link: 'mailto:alamgirkhqwer@gmail.com' },
  { icon: <FaPhone />, text: '+92 315 4572266', Link: 'tel:+923154572266' },
  { icon: <MdOutlineLocationOn />, text: 'Landhi, Karachi, Pakistan.' },
];

const socialLinks = [
  { name: 'LinkedIn', icon: <TiSocialLinkedin />, Link: 'https://www.linkedin.com/in/alamgir-khan-248b89259/' },
  { name: 'Github', icon: <SlSocialGithub />, Link: 'https://github.com/Alamgir-Khan-315' },
  { name: 'Whatsapp', icon: <FaWhatsapp />, Link: 'https://wa.me/923154572266' },
];

export default function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setIsSuccess(false);
    
    const serviceID = 'service_az0nf7t';
    const templateID = 'template_lpt6vrf';
    const publicKey = '2CXL8sfmwp89s0CUb';

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then(() => {
          setSubmitMessage('Message sent successfully!');
          setIsSuccess(true);
          form.current.reset(); 
      }, () => {
          setSubmitMessage('Failed to send message. Please try again.');
          setIsSuccess(false);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <main className='container flex flex-col min-h-[calc(100vh-20rem)] justify-center mx-auto px-4 py-5 md:py-10'>

        <h1 className="text-3xl md:text-4xl font-bold mb-4 2xl:mb-[5%] text-center"> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Contact Me</span></h1>

    <div className="center flex justify-center items-center min-h-[calc(100vh-30rem)]">
      <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto  md:mt-8 ">
        
        <div className="space-y-10 text-centerlg:text-left">
          <div>
            <p className="text-gray-300 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Whether you have a question or just want to say hi, my inbox is always open.
            </p>
          </div>

          <div className="space-y-6">
            {contactDetails.map((detail) => (
              <Link key={detail.text} to={detail.Link} target="_blank" className="flex ml-5 justify-start gap-4 text-gray-300 hover:text-blue-400 transition-colors group">
                <div className="text-blue-400 text-2xl group-hover:scale-110 transition-transform">{detail.icon}</div>
                <span>{detail.text}</span>
              </Link>
            ))}
          </div>

          <div className="flex justify-center lg:justify-start items-center gap-4 pt-2 md:pt-4">
            {socialLinks.map((link) => (
              <Link key={link.name} to={link.Link} target="_blank" rel="noopener noreferrer" aria-label={link.name}
                 className='p-3 text-2xl rounded-full bg-gray-800/80 text-gray-300 hover:text-white hover:bg-blue-600 hover:scale-110 hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-300'>
                {link.icon}
              </Link>
            ))}
          </div>
        </div>


        <div className="bg-gray-800/50 backdrop-blur-sm border border-blue-500/20 p-8 rounded-2xl">
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-blue-400 mb-2 font-medium">Name</label>
              <input
                type="text" id="name" name="name" required
                className="w-full px-4 py-2 rounded-lg bg-gray-900/70 text-white border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-blue-400 mb-2 font-medium">Email</label>
              <input
                type="email" id="email" name="email" required
                className="w-full px-4 py-2 rounded-lg bg-gray-900/70 text-white border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-blue-400 mb-2 font-medium">Message</label>
              <textarea
                id="message" name="message" required rows="4"
                className="w-full px-4 py-2 rounded-lg bg-gray-900/70 text-white border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              ></textarea>
            </div>

            <button type="submit" disabled={isSubmitting} className="group w-full relative inline-flex items-center justify-center px-8 py-3 text-white font-semibold bg-transparent border border-gray-600 rounded-lg overflow-hidden transition-all duration-300 hover:text-white hover:border-blue-500 shadow-lg hover:shadow-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed">
            <span className="absolute top-0 left-0 w-0 h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 ease-out group-hover:w-full"></span>
            <span  className="relative flex items-center gap-2">  {isSubmitting ? 'Sending...' : 'Send Message'} <FaArrowRight /></span>
            </button>

            {submitMessage && (
              <p className={`mt-4 text-center font-medium ${isSuccess ? 'text-green-400' : 'text-red-400'}`}>
                {submitMessage}
              </p>
            )}
        
          </form>
        </div>
      </div>
    </div>
    </main>
  )
}
