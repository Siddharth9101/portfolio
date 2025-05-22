import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // EmailJS parameters
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userID = import.meta.env.VITE_EMAILJS_USER_ID;

    emailjs.send(serviceID, templateID, data, userID).then(
      (response) => {
        alert("Email sent successfully!");
        reset();
      },
      (error) => {
        alert("Failed to send email. Try again.");
        console.error(error);
      }
    );
  };

  return (
    <section id="contact" className="px-10 py-20 text-white">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Left Side */}
        <div className="md:w-1/2 space-y-6">
          <div className="flex gap-4 items-center">
            <div className="h-1 md:w-[100px] w-[50px] bg-orange-500" />
            <h4 className="uppercase text-orange-500">Contact Me</h4>
          </div>
          <h2 className="text-4xl font-bold">
            Have a project?
            <br />
            Let’s talk!
          </h2>
        </div>

        {/* Right Side: Contact Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="md:w-1/2 space-y-6">
          <input
            type="text"
            placeholder="Name"
            {...register("name", { required: true })}
            className="w-full bg-transparent border-b outline-none py-2"
          />
          {errors.name && <p className="text-red-500">Name is required</p>}

          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
            className="w-full bg-transparent border-b outline-none py-2"
          />
          {errors.email && <p className="text-red-500">Email is required</p>}

          <textarea
            placeholder="Message"
            rows="4"
            {...register("message", { required: true })}
            className="w-full bg-transparent border-b outline-none py-2"
          />
          {errors.message && (
            <p className="text-red-500">Message is required</p>
          )}

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded w-fit"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
