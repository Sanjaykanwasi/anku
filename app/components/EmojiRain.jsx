// export default function EmojiRain() {
//   return (
//     <div className="fixed inset-0 overflow-hidden pointer-events-none">
//       {[...Array(30)].map((_, i) => (
//         <span
//           key={i}
//           className="absolute top-0 animate-fall"
//           style={{
//             left: `${Math.random() * 100}%`,
//             animationDelay: `${Math.random() * 3}s`,
//             fontSize: "24px",
//           }}
//         >
//           🥹
//         </span>
//       ))}
//     </div>
//   );
// }

const EmojiRain = () => {
  const emojis = ["💕", "🌸", "✨", "💖", "🌺", "💝", "🦋", "💗", "🌟", "💫"];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-100px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-fall {
          animation: fall linear infinite;
        }
      `}</style>

      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-fall text-3xl"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        >
          {emojis[Math.floor(Math.random() * emojis.length)]}
        </div>
      ))}
    </div>
  );
};

export default EmojiRain;
