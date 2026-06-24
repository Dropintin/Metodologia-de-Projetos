import { useState } from "react";
import "./PartnersAndContact.css";
import { FiUser, FiMail, FiMessageSquare, FiSend } from "react-icons/fi";

function ContactOnly() {
  const [formData, setFormData] = useState({ nome: "", email: "", mensagem: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Sua mensagem foi enviada com sucesso!");
    setFormData({ nome: "", email: "", mensagem: "" });
  };

  return (
    <div className="partners-contact-wrapper">
      <section className="contact-section">
        <div className="contact-grid-container">
          <div className="contact-text-side">
            <h3 className="contact-title">Nosso Contato</h3>
            <p className="contact-description">
              Aqui você pode entrar em contato conosco caso esteja passando por alguma situação
              difícil ou simplesmente queira conversar.
            </p>
            <div className="contact-warning-box">
              <p>Em casos de emergência ou risco imediato, ligue para 190.</p>
            </div>
          </div>

          <div className="contact-form-side">
            <form onSubmit={handleSubmit} className="contact-form-ui">
              <div className="interactive-input-wrapper">
                <div className="field-icon-area"><FiUser size={22} /></div>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  className="clean-form-input"
                  placeholder="Digite seu Nome"
                  required
                />
              </div>

              <div className="interactive-input-wrapper">
                <div className="field-icon-area"><FiMail size={22} /></div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="clean-form-input"
                  placeholder="Digite seu Email"
                  required
                />
              </div>

              <div className="interactive-input-wrapper textarea-wrapper">
                <div className="field-icon-area textarea-icon-area"><FiMessageSquare size={22} /></div>
                <textarea
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  className="clean-form-input clean-form-textarea"
                  placeholder="Escreva sua mensagem aqui..."
                  rows="4"
                  required
                ></textarea>
              </div>

              <button type="submit" className="interactive-submit-btn">
                <span>Enviar</span>
                <FiSend size={18} className="send-icon-motion" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactOnly;