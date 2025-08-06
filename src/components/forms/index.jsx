import React, { useState } from "react";

function Forms() {
  const [feedback, setFeedback] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });


  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <div>
        <textarea
          placeholder="Ваш відгук..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <p>Кількість символів: {feedback.length}</p>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="Ім’я"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              placeholder="Прізвище"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Зареєструватися</button>
        </form>

        {submitted && (
          <p>
            Ви зареєструвались як {formData.firstName} {formData.lastName} з
            email: {formData.email}
          </p>
        )}
      </div>
    </div>
  );
}

export default Forms;
