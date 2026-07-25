import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

//  const sendEmail = (e) => {
//    e.preventDefault();

//    const formData = new FormData(form.current);

//    const templateParams = {
//      user_name: formData.get("user_name"),
//      user_email: formData.get("user_email"),
//      subject: formData.get("subject"),
//      message: formData.get("message"),
//      avatar: formData.get("user_name").charAt(0).toUpperCase(),
//      time: new Date().toLocaleString(),
//    };

//    emailjs
//      .send(
//        "service_t9i1utb",
//        "template_175rfms",
//        templateParams,
//        "rsv62dXC-Ui72PqSf",
//      )
//      .then(() => {
//        toast.success("Message sent successfully!");
//        form.current.reset();
//      })
//      .catch(() => {
//        toast.error("Failed to send message.");
//      });
     
//  };

const sendEmail = (e) => {
  e.preventDefault();

  const formData = new FormData(form.current);

  const templateParams = {
    user_name: formData.get("user_name"),
    user_email: formData.get("user_email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
    avatar: formData.get("user_name").charAt(0).toUpperCase(),
    time: new Date().toLocaleString(),
  };

  emailjs
    .send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    )
    .then(() => {
      toast.success("Message sent successfully! 🚀", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });

      form.current.reset();
    })
    .catch((error) => {
      console.error(error);

      toast.error("Failed to send message ❌", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
    });
};
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-11 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Have a project in mind or looking for a Frontend Developer? I'd be happy to connect and discuss how we can work together. Feel free to reach out for opportunities, collaborations, or any inquiries.
        </p>
      </div>

      {/* Contact Form */}
      <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-white text-center">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-4 flex flex-col space-y-4"
        >
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />

          {/* Send Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
