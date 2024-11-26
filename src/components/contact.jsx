import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
    setErrors({ ...errors, [name]: "" }); // Clear errors when typing
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.company.trim()) newErrors.company = "Company is required";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);

    // If no errors exist, the form is valid
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Don't submit if the form is invalid
    }

    setLoading(true);

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_NAME,
        process.env.REACT_APP_SERVICE_TEMPLATE,
        {
          form_type: "you got a new quote",
          from_name: form.name,
          company: form.company, 
          to_name: "iktefa",
          from_email: form.email,
          message: form.message,
          phone: form.phone,
        },
        process.env.REACT_APP_SERVICE_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. We will get back to you as soon as possible.");

          setForm({
            name: "",
            company: "", 
            phone: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className={`w-full p-4 rounded-[20px] shadow-3xl bg-purple-900`}>
      <div className="">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <label className="flex flex-col">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="bg-white py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">{errors.name}</span>
            )}
          </label>

          <label className="flex flex-col">
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Company Name"
              className="bg-white py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
            />
            {errors.company && (
              <span className="text-red-500 text-sm">{errors.company}</span>
            )}
          </label>

          <label className="flex flex-col">
            <input
              type="phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Your Number"
              className="bg-white py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
            />
            {errors.phone && (
              <span className="text-red-500 text-sm">{errors.phone}</span>
            )}
          </label>
          <label className="flex flex-col">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="E-Mail"
              className="bg-white py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email}</span>
            )}
          </label>
          <label className="flex flex-col">
            <textarea
              rows={3}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message?"
              className="bg-white py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
            />
            {errors.message && (
              <span className="text-red-500 text-sm">{errors.message}</span>
            )}
          </label>

          <button
            type="submit"
            className="py-3 px-8 rounded-xl outline-none w-fit text-black font-bold  bg-white"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
