"use client";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: new (
          options: {
            pageLanguage: string;
            includedLanguages: string;
            autoDisplay: boolean;
          },
          elementId: string
        ) => void;
      };
    };
    googleTranslateElementInit: () => void;
  }
}

export default function TranslateWidget() {
  const [isKannada, setIsKannada] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Check if page was already translated (e.g. after a reload)
    const hasCookie = document.cookie.includes("googtrans=/en/kn");
    if (hasCookie) setIsKannada(true);

    // Define the init callback Google Translate will call
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en", includedLanguages: "kn", autoDisplay: false },
        "google_translate_element"
      );
      setTimeout(() => setReady(true), 500);
    };

    // Inject Google Translate script only once
    if (!document.getElementById("gt-script")) {
      const script = document.createElement("script");
      script.id = "gt-script";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.head.appendChild(script);
    } else {
      setTimeout(() => setReady(true), 500);
    }

    // Fallback: enable button after 3s regardless (handles slow/offline networks)
    const fallback = setTimeout(() => setReady(true), 3000);
    return () => clearTimeout(fallback);
  }, []);

  const translateToKannada = () => {
    const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (!select) return;
    select.value = "kn";
    select.dispatchEvent(new Event("change"));
    setIsKannada(true);
  };

  const restoreEnglish = () => {
    // Clear the Google Translate cookie and reload to get original text back
    const clearCookie = (name: string, domain?: string) => {
      document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC${domain ? `; domain=${domain}` : ""}`;
    };
    clearCookie("googtrans");
    clearCookie("googtrans", window.location.hostname);
    clearCookie("googtrans", `.${window.location.hostname}`);
    window.location.reload();
  };

  const handleToggle = () => {
    if (isKannada) {
      restoreEnglish();
    } else {
      translateToKannada();
    }
  };

   return (
     <>
       {/* Hidden Google Translate mount point */}
       <div id="google_translate_element" className="hidden" />

       {/* Toggle button - prevented from translation */}
       <button
         onClick={handleToggle}
         disabled={!ready}
         title={isKannada ? "Switch to English" : "ಕನ್ನಡಕ್ಕೆ ಬದಲಾಯಿಸಿ"}
         translate="no"
         className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all
           ${
             isKannada
               ? "bg-amber-400 text-blue-900 border-amber-400 hover:bg-amber-300"
               : "bg-transparent text-amber-300 border-amber-400/60 hover:bg-amber-400/10 hover:border-amber-400"
           }
           ${!ready ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
         `}
       >
         <span className="text-sm">🌐</span>
         <span>{isKannada ? "English" : "ಕನ್ನಡ"}</span>
       </button>
     </>
   );
}
