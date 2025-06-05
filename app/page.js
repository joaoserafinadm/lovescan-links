"use client";

import React, { useEffect } from "react";
import {
  Heart,
  Globe,
  Instagram,
  TriangleAlert,
  ExternalLink,
} from "lucide-react";

const LinkTree = () => {
  useEffect(() => {
    // Detecta se está no navegador do Instagram
    const isInstagramBrowser = () => {
      const ua = navigator.userAgent || navigator.vendor || window.opera;
      return ua.indexOf("Instagram") > -1;
    };

    // Função para forçar abertura em navegador externo
    const handleLinkClick = (e) => {
      const link = e.currentTarget;
      const href = link.getAttribute("href");

      if (isInstagramBrowser()) {
        e.preventDefault();

        // Tenta diferentes métodos para abrir no navegador externo
        // Método 1: window.open com _system
        window.open(href, "_system");

        // Método 2: Adiciona intent para Android
        if (/android/i.test(navigator.userAgent)) {
          window.location.href = `intent://${href.replace(
            /^https?:\/\//,
            ""
          )}#Intent;scheme=https;package=com.android.chrome;end`;
        }

        // Método 3: Fallback com timeout
        setTimeout(() => {
          window.location.href = href;
        }, 100);
      }
    };

    // Adiciona event listeners aos links
    const links = document.querySelectorAll(".link-button");
    links.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });
    };
  }, []);

  const links = [
    {
      title: "Crie um QR Code de Amor 💝",
      url: "https://lovescan.app",
      icon: <Heart className="w-5 h-5" />,
      description: "Acesse o lovescan.app!",
    },
    {
      title: "Siga no Instagram",
      url: "https://instagram.com/lovescan.app",
      icon: <Instagram className="w-5 h-5" />,
      description: "@lovescan",
    },
    {
      title: "Siga no TikTok",
      url: "https://www.tiktok.com/@lovescan.app?_t=ZM-8wx6XWfS5zy&_r=1",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      ),
      description: "@lovescan",
    },
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 flex items-center justify-center p-2"
      style={{ background: "linear-gradient(135deg, #f8f8f8, #ffffff)" }}
    >
      <div className="max-w-md w-full">
        {/* Logo/Avatar */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
            <img
              src="/LOGO.png"
              alt="Logo"
              className="w-23 h-23 rounded-full"
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            lovescan.app
          </h1>
          <p className="text-gray-600 text-sm">
            Crie um QR Code que dá acesso a uma apresentação personalizada e
            surpreenda o seu amor! 😍💝✨
          </p>
          <div className="max-w-md mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 shadow-lg mt-3">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <TriangleAlert className="w-5 h-5 text-amber-500 mt-0.5" />
              </div>
              <div className="flex-1">
                <p className="text-gray-700 text-sm leading-relaxed">
                  Para não ocorrer nenhum erro ao cadastrar seu{" "}
                  <span className="font-semibold bg-blue-100 px-1.5 py-0.5 rounded ">
                    QR Code
                  </span>
                  , permita acessar o site em um navegador externo.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="space-y-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-button block w-full bg-white hover:bg-gray-50 text-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 border border-gray-100"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="text-pink-500">{link.icon}</div>
                  <div className="text-left">
                    <div className="font-semibold">{link.title}</div>
                    <div className="text-xs text-gray-500">
                      {link.description}
                    </div>
                  </div>
                </div>
                <Globe className="w-4 h-4 text-gray-400" />
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-xs text-gray-500">
            © 2025 LoveScan • Feito com ❤️
          </p>
        </div>

        {/* Aviso para usuários do Instagram */}
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-400 italic">
            Os links abrirão no seu navegador padrão
          </p>
        </div>
      </div>
    </div>
  );
};

export default LinkTree;
