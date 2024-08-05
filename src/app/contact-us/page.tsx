const ContactUs = () => {
    return (
      <div className=" mb-20 max-w-4xl mx-auto px-4 py-8  border-double border-4 rounded-2xl	 border-orange-600">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="mb-4">
          If you have any questions about this Privacy Policy or our data practices, please contact us at:
        </p>
        <div className="mb-8">
          <h2 className="text-2xl font-bold">THE AMBITIOUS ACADEMY</h2>
          <ul>Email:
            <ul><a href="mailto:ambitiousacademyadp@gmail.com" className="text-blue-500">ambitiousacademyadp@gmail.com</a>;</ul>
            <ul><a href="taapublication@gmail.com" className="text-blue-500">taapublication@gmail.com</a>(for blogs submission);</ul>
            </ul>
          <p>Phone: <a href="tel:+919238834569" className="text-blue-500">+91-9238834569</a></p>
        </div>
        <p>
          By using our website, you consent to our Privacy Policy. Thank you for trusting THE AMBITIOUS ACADEMY with your personal data.
        </p>
      </div>
    );
  };
  
  export default ContactUs;
  