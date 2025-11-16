"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SocialLinks, { SocialLinksType } from './SocialLinks';
import { Snackbar } from './Snackbar';
import { SiGithub, SiTiktok } from "@icons-pack/react-simple-icons";

export const ContactSection = () => {
  const socials: SocialLinksType[] = [
    { name: 'GitHub', icon: SiGithub , href: 'https://github.com/franpa13' },
     { name: 'TikTok(Creador de contenido sobre programacion)', icon: SiTiktok, href: 'https://www.tiktok.com/@jujedev?is_from_webapp=1&sender_device=pc' },
  ];

  const form = useRef<HTMLFormElement>(null);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    type: "success" as "success" | "error" | "info" | "warning",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_321i4q6",
        "template_3oakbci",
        form.current,
        "AVnu_VMQjQjI8K_U7"
      )
      .then(
        () => {
          setSnackbar({
            open: true,
            message: "¡Mensaje enviado con éxito! Respondere a la brevedad, Saludos ! ",
            type: "success",
          });
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        () => {
          setSnackbar({
            open: true,
            message: "Error al enviar el mensaje. Intenta nuevamente.",
            type: "error",
          });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-5 px-4 scroll-mt-20">
      <div className="max-w-4xl mx-auto sm:px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-center text-white">
            ¿Buscas un <span className="text-transparent bg-clip-text bg-gradient-to-r text-2xl sm:text-4xl from-blue-400 to-purple-500">Desarrollador Web</span>?
          </h2>
          <p className="text-sm sm:text-lg text-gray-400  mt-4 leading-relaxed flex flex-col items-center">
            Ayudo a empresas y emprendedores a transformar sus ideas en soluciones digitales efectivas.
            Si buscas un desarrollador web que combine creatividad, experiencia y resultados, estás en el lugar correcto.
          </p>
        </div>

        {/* Divider */}
        <div className="relative my-12">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-800"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-3 bg-[#0D1117] rounded-lg text-lg text-gray-400">Contacto</span>
          </div>
        </div>

        <div className="mb-12">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#21262D] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#21262D] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-[#21262D] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                placeholder="Cuéntame sobre tu proyecto..."
              />
            </div>
            
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full lg:w-1/3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-2 px-4 rounded-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    {/* Spinner */}
                    <svg 
                      className="animate-spin h-6 w-6 text-white" 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24"
                    >
                      <circle 
                        className="opacity-25" 
                        cx="12" 
                        cy="12" 
                        r="10" 
                        stroke="currentColor" 
                        strokeWidth="4"
                      ></circle>
                      <path 
                        className="opacity-75" 
                        fill="currentColor" 
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
 
                  </>
                ) : (
                  <>
                    Enviar Mensaje
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right">
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Additional Info */}
      <div className="text-center mb-4 lg:mb-12">
        <p className="text-sm sm:text-lg text-gray-400 text-center w-full  mb-4 leading-relaxed flex flex-col items-center">
          ¿Tienes una oportunidad laboral que podría interesarme? Me encantaría conocer más sobre tu propuesta.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
          <a
            href="https://www.linkedin.com/in/francisco-paredes-354a2b26b/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg font-medium hover:from-blue-500 hover:to-blue-600 transition-all duration-300 group"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            Contactar por LinkedIn
          </a>
          <a
            href="https://drive.google.com/file/d/1xy7i1yEzV8OM66dRfZ39N_1mlm05Kegk/view?usp=sharing"
            target="_blank"
            className="inline-flex items-center justify-center gap-3 px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl font-medium hover:from-purple-500 hover:to-purple-600 transition-all duration-300 group"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                clipRule="evenodd"
              />
              <path fillRule="evenodd" d="M8 11a1 1 0 100 2h4a1 1 0 100-2H8zm0-4a1 1 0 100 2h4a1 1 0 100-2H8z" clipRule="evenodd" />
            </svg>
            Ver Currículum
          </a>
        </div>

        <SocialLinks  socials={socials}></SocialLinks>
      </div>

      <Snackbar 
        open={snackbar.open} 
        message={snackbar.message} 
        type={snackbar.type} 
        onClose={() =>
          setSnackbar((prev) => ({
            ...prev,
            open: false,
          }))
        }
      />
    </section>
  );
};