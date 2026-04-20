import axios from "axios";
import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    
    if (!form.name || !form.email || !form.message) {
      setError("Please fill all fields");
      setSuccess("");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      await axios.post("http://localhost:5000/api/contact", form);

      setSuccess("Message sent successfully.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setError("Something went wrong. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-5 bg-dark text-white">
      <div className="container text-center">
        <h2 className="mb-3">Contact Me</h2>
        <p className="text-secondary fs-6 fw-bold text-info">
          Let’s connect and discuss opportunities.
        </p>

        <form
          onSubmit={submit}
          className="col-12 col-md-6 mx-auto mt-4"
        >
          
          <input
            className="form-control custom-input my-3"
            placeholder="Enter Your Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          
          <input
            type="email"
            className="form-control custom-input my-3"
            placeholder="Enter Your Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          
          <textarea
            className="form-control custom-input my-3"
            placeholder="Enter Your Message"
            rows="4"
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
          />

         
          <button
            className="btn btn-info w-100 mt-2"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          
          {success && (
            <p className="text-success mt-3">{success}</p>
          )}

          
          {error && (
            <p className="text-danger mt-3">{error}</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;