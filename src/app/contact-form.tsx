"server-only";

import { redirect } from "next/navigation";

const ContactForm = async () => {
  const submitForm = async (formData: FormData) => {
    "use server";
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    console.log(name, email, message);
    redirect("/?submitted=true");
  };

  return (
    <>
      <h2 className="text-3xl font-semibold mb-6">Get In Touch</h2>
      <p className="mb-6 max-w-2xl mx-auto">
        Interested in working together? Feel free to reach out for
        collaborations or to discuss potential projects!
      </p>
      <form className="max-w-lg mx-auto space-y-4" action={submitForm}>
        <input
          type="text"
          placeholder="Your Name"
          className="input input-bordered w-full text-gray-800 placeholder-gray-500 bg-white"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="input input-bordered w-full text-gray-800 placeholder-gray-500 bg-white"
          required
        />
        <textarea
          placeholder="Your Message"
          className="textarea textarea-bordered w-full text-gray-800 placeholder-gray-500 bg-white"
          required
        ></textarea>
        <button type="submit" className="btn btn-primary w-full">
          Send Message
        </button>
      </form>
    </>
  );
};

export default ContactForm;
