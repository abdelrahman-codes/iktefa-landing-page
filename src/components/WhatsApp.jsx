import { footerWhatsAppMesage } from "../assets/constants";
import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
  const openWhatsApp = () => {
    const url = `https://wa.me/${
      footerWhatsAppMesage.phone
    }?text=${encodeURIComponent(footerWhatsAppMesage.message)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 flex items-center justify-center"
    >
      <FaWhatsapp size={24} />
    </button>
  );
};

export default WhatsApp;
