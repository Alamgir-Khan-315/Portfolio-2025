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
    <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-[calc(100vh-5rem)]">
      <div className="md:flex md:items-start md:justify-between md:space-x-8 max-w-6xl w-full">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold text-blue-500 mb-4">Contact Me</h1>
          <p className="text-gray-300">Get in touch with me through this form.</p>
          <div className="mt-6 text-justify">
            <p className="text-gray-300">I'm always interested in hearing about new projects and opportunities.</p>
            <p className="text-gray-300 mt-4">Whether you have a question, want to start a project, or just want to connect, feel free to send me a message.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="md:w-1/2">
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
              rows="5"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 font-bold text-black px-6 py-2 rounded hover:bg-blue-600 transition-colors duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}