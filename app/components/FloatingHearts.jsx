// export default function FloatingHearts() {
//   return (
//     <div className="fixed inset-0 overflow-hidden pointer-events-none">
//       {[...Array(15)].map((_, i) => (
//         <span
//           key={i}
//           className="absolute bottom-0 text-pink-400 animate-float"
//           style={{
//             left: `${Math.random() * 100}%`,
//             animationDelay: `${Math.random() * 5}s`,
//             fontSize: `${20 + Math.random() * 20}px`,
//           }}
//         >
//           💕
//         </span>
//       ))}
//     </div>
//   );
// }

const FloatingHearts = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>

      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float text-pink-400 opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${8 + Math.random() * 4}s`,
            fontSize: `${20 + Math.random() * 20}px`,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
