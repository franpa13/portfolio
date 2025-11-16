import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export interface SnackbarProps {
  open: boolean;
  message: string;
  type?: "success" | "error" | "info" | "warning";
  onClose: () => void;
}

export const Snackbar: React.FC<SnackbarProps> = ({
  open,
  message,
  type = "info",
  onClose,
}) => {
  const styles = {
    success: {
      border: "border-green-500",
      text: "text-green-400",
      icon: (
        <svg
          className="w-5 h-5 md:w-6 md:h-6 text-green-400"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    error: {
      border: "border-red-500",
      text: "text-red-400",
      icon: (
        <svg
          className="w-5 h-5 md:w-6 md:h-6 text-red-400"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            d="M6 18L18 6M6 6l12 12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    info: {
      border: "border-blue-500",
      text: "text-blue-400",
      icon: (
        <svg
          className="w-5 h-5 md:w-6 md:h-6 text-blue-400"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path d="M12 8h.01M11 12h1v4h1" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="10" />
        </svg>
      ),
    },
    warning: {
      border: "border-yellow-500",
      text: "text-yellow-400",
      icon: (
        <svg
          className="w-5 h-5 md:w-6 md:h-6 text-yellow-400"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  };

  const current = styles[type];

  useEffect(() => {
    if (!open) return;
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [open, onClose]);

  return ( 
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`
            /* Para pantallas pequeñas (mobile first) */
            fixed top-3 left-0 right-0
            /* Para pantallas medianas/grandes (md:) */
            md:top-auto md:bottom-6 md:left-6 md:right-auto
            md:transform md:-translate-x-1/2
            w-full
            md:w-auto md:max-w-xl 
            px-4 py-3 md:px-6 md:py-4
            rounded-xl
            bg-[#161B22] border 
            shadow-lg shadow-black/40
            flex items-center gap-3
            ${current.border} ${current.text}
          `}
        >
          {current.icon}
          <span className="text-sm font-medium flex-1">{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect } from "react";

// export interface SnackbarProps {
//   open: boolean;
//   message: string;
//   type?: "success" | "error" | "info" | "warning";
//   onClose: () => void;
// }

// export const Snackbar: React.FC<SnackbarProps> = ({
//   open,
//   message,
//   type = "info",
//   onClose,
// }) => {
//   const styles = {
//     success: {
//       border: "border-green-500",
//       text: "text-green-400",
//       icon: (
//         <svg
//           className="w-5 h-5 md:w-6 md:h-6 text-green-400"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth={2}
//           viewBox="0 0 24 24"
//         >
//           <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
//         </svg>
//       ),
//     },
//     error: {
//       border: "border-red-500",
//       text: "text-red-400",
//       icon: (
//         <svg
//           className="w-5 h-5 md:w-6 md:h-6 text-red-400"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth={2}
//           viewBox="0 0 24 24"
//         >
//           <path
//             d="M6 18L18 6M6 6l12 12"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//       ),
//     },
//     info: {
//       border: "border-blue-500",
//       text: "text-blue-400",
//       icon: (
//         <svg
//           className="w-5 h-5 md:w-6 md:h-6 text-blue-400"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth={2}
//           viewBox="0 0 24 24"
//         >
//           <path d="M12 8h.01M11 12h1v4h1" strokeLinecap="round" strokeLinejoin="round" />
//           <circle cx="12" cy="12" r="10" />
//         </svg>
//       ),
//     },
//     warning: {
//       border: "border-yellow-500",
//       text: "text-yellow-400",
//       icon: (
//         <svg
//           className="w-5 h-5 md:w-6 md:h-6 text-yellow-400"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth={2}
//           viewBox="0 0 24 24"
//         >
//           <path
//             d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//       ),
//     },
//   };

//   const current = styles[type];

//   useEffect(() => {
//     if (!open) return;
//     const timer = setTimeout(onClose, 4000);
//     return () => clearTimeout(timer);
//   }, [open, onClose]);

//   return ( 
//     <AnimatePresence>
//       {open && (
//         <motion.div
//           initial={{ y: 40, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           exit={{ y: 40, opacity: 0 }}
//           transition={{ duration: 0.3 }}
//           className={`
//             fixed bottom-0 left-0 right-0
//             md:bottom-6   md:left-6 md:right-auto
//             md:transform md:-translate-x-1/2
//             w-full
//             md:w-auto md:max-w-xl 
//             px-4 py-3 md:px-6 md:py-4
//             md:rounded-xl
//             bg-[#161B22] border 
//             shadow-lg shadow-black/40
//             flex items-center gap-3
//             ${current.border} ${current.text}
//           `}
//         >
//           {current.icon}
//           <span className="text-sm  font-medium flex-1">{message}</span>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };