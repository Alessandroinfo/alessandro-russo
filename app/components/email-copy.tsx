import React from 'react';

interface ToastProps {
    message: string;
    onClose: () => void;
}

// Componente Toast personalizzato
const Toast: React.FC<ToastProps> = ({message, onClose}) => {
    return (
        <div
            className="fixed bottom-4 right-4 bg-teal-400 text-white px-4 py-2 rounded shadow-lg"
            style={{zIndex: 1000}}
        >
            {message}
            <button
                className="ml-4 text-lg font-bold"
                onClick={onClose}
            >
                ×
            </button>
        </div>
    );
};

const EmailCopy: React.FC = () => {
    const [showToast, setShowToast] = React.useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText('alessandrorusso.info@gmail.com').then(() => {
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);
        }).catch((err) => {
            console.error('Errore durante la copia: ', err);
        });
    };

    return (
        <div className="cursor-pointer" onClick={copyToClipboard}>
            <div aria-label="Email">
        <span>
          <svg className="h-10 w-10" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <g>
              <g fill="#FFFFFF">
                <polygon points="339.392,258.624 512,367.744 512,144.896"/>
              </g>
            </g>
            <g>
              <g fill="#FFFFFF">
                <polygon points="0,144.896 0,367.744 172.608,258.624"/>
              </g>
            </g>
            <g>
              <g fill="#FFFFFF">
                <path
                    d="M480,80H32C16.032,80,3.36,91.904,0.96,107.232L256,275.264l255.04-168.032C508.64,91.904,495.968,80,480,80z"
                />
              </g>
            </g>
            <g>
              <g fill="#FFFFFF">
                <path
                    d="M310.08,277.952l-45.28,29.824c-2.688,1.76-5.728,2.624-8.8,2.624c-3.072,0-6.112-0.864-8.8-2.624l-45.28-29.856
                  L1.024,404.992C3.488,420.192,16.096,432,32,432h448c15.904,0,28.512-11.808,30.976-27.008L310.08,277.952z"
                />
              </g>
            </g>
          </svg>
        </span>
            </div>

            {showToast && <Toast message="Email copiata!" onClose={() => setShowToast(false)}/>}
        </div>
    );
};

export default EmailCopy;
