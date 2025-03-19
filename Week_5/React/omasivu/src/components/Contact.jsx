import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Nimi on pakollinen.";
    if (!formData.email.trim()) {
      newErrors.email = "Sähköposti on pakollinen.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Anna kelvollinen sähköpostiosoite.";
    }
    if (!formData.message.trim()) newErrors.message = "Viesti on pakollinen.";

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors({});

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSuccess(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact">
      <h2>Yhteystiedot</h2>
      <p>Ota yhteyttä täyttämällä alla oleva lomake:</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nimi"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        {errors.name && <span className="error">{errors.name}</span>}

        <input
          type="email"
          name="email"
          placeholder="Sähköposti"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <textarea
          name="message"
          rows="5"
          placeholder="Viesti"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
        {errors.message && <span className="error">{errors.message}</span>}

        <button type="submit">Lähetä</button>
      </form>

      {success && <p className="success">Kiitos viestistäsi! Otamme sinuun yhteyttä pian.</p>}
    </section>
  );
};

export default Contact;
