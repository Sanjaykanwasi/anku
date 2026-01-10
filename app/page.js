// "use client";

// import { useState } from "react";
// import FloatingHearts from "./components/FloatingHearts";
// import EmojiRain from "./components/EmojiRain";
// const herName = "Her Name"; // ❤️ change this

// export default function Home() {
//   const [response, setResponse] = useState(null);
//   const [musicOn, setMusicOn] = useState(false);

//   const playSorryMusic = () => {
//     const audio = document.getElementById("bg-music");
//     if (audio) {
//       audio.play();
//     }
//   };

//   return (
//     <main className="min-h-screen bg-pink-100 flex items-center justify-center p-4">
//       <FloatingHearts />
//       {response === "yes" && <EmojiRain />}

//       <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md text-center relative z-10">
//         <img
//           src="/her-photo.jpg"
//           className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
//         />

//         <h1 className="text-2xl font-bold text-pink-600 mb-2">
//           I’m Really Sorry, {herName} 😔
//         </h1>

//         <p className="text-gray-700 mb-4">
//           I said something wrong unintentionally, and I truly regret it. You
//           mean a lot to me, and I hope you can forgive me 💙
//         </p>

//         {response === null && (
//           <div className="flex justify-center gap-4">
//             <button
//               onClick={() => setResponse("yes")}
//               className="bg-green-500 text-white px-4 py-2 rounded-full"
//             >
//               Yes 💕
//             </button>
//             <button
//               onClick={() => {
//                 setResponse("no");
//                 playSorryMusic();
//               }}
//               className="bg-red-500 text-white px-4 py-2 rounded-full"
//             >
//               No 😔
//             </button>
//           </div>
//         )}

//         {response === "yes" && (
//           <p className="text-green-600 text-lg font-semibold mt-4">
//             Thank you for forgiving me 🥹💖
//           </p>
//         )}

//         {response === "no" && (
//           <p className="text-red-500 mt-4">
//             I’m really sorry… I’ll always be 😞
//           </p>
//         )}

//         <audio id="bg-music" loop>
//           <source src="/sorry-music.mp3" type="audio/mp3" />
//         </audio>
//       </div>
//     </main>
//   );
// }

"use client";

import { useState, useEffect, useRef } from "react";
import FloatingHearts from "./components/FloatingHearts";
import EmojiRain from "./components/EmojiRain";

const herName = "Ankita Thakur";

export default function Home() {
  const [response, setResponse] = useState(null);
  const [musicOn, setMusicOn] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [noButtonStyle, setNoButtonStyle] = useState({});
  const audioRef = useRef(null);

  const messages = [
    "I'm really sorry… I'll always be 😞",
    "Please? I promise to be better 🥺",
    "I really mean it... forgive me? 💔",
    "One more chance? I'll make it right 🙏",
    "My heart is breaking... please? 💔✨",
  ];

  // const playSorryMusic = () => {
  //   setMusicOn(!musicOn);
  //   const audio = document.getElementById("bg-music");
  //   if (audio) {
  //     if (musicOn) {
  //       audio.pause();
  //     } else {
  //       audio.play();
  //     }
  //   }
  // };

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (musicOn) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setMusicOn(!musicOn);
  };

  const handleNo = () => {
    setResponse("no");
    setNoCount((prev) => prev + 1);

    if (noCount > 0) {
      setNoButtonStyle({
        position: "fixed",
        left: `${Math.random() * 80 + 10}%`,
        top: `${Math.random() * 80 + 10}%`,
        transition: "all 0.3s ease",
      });
    }
  };

  // useEffect(() => {
  //   if (response === "yes") {
  //     const timer = setTimeout(() => {
  //       const audio = document.getElementById("bg-music");
  //       if (audio) {
  //         audio.pause();
  //       }
  //     }, 100);
  //     return () => clearTimeout(timer);
  //   }
  // }, [response]);

  useEffect(() => {
    if (response === "no" && audioRef.current) {
      audioRef.current.volume = 0.6;
      audioRef.current.play().catch(() => {});
      setMusicOn(true);
    }

    if (response === "yes" && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setMusicOn(false);
    }
  }, [response]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center p-4 relative overflow-hidden">
      <style jsx>{`
        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 30px rgba(236, 72, 153, 0.4),
              0 0 60px rgba(236, 72, 153, 0.2);
          }
          50% {
            box-shadow: 0 0 40px rgba(236, 72, 153, 0.6),
              0 0 80px rgba(236, 72, 153, 0.3);
          }
        }
        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-10px);
          }
          75% {
            transform: translateX(10px);
          }
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        .animate-spin-slower {
          animation: spin 4s linear infinite;
        }
      `}</style>

      <FloatingHearts />
      {response === "yes" && <EmojiRain />}

      {/* Background glow effects */}
      <div className="fixed top-20 left-20 w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div
        className="fixed bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-700/50 p-8 max-w-lg w-full text-center relative z-10 transform transition-all duration-500 hover:scale-[1.02] hover:border-pink-500/30">
        {/* Sparkles decoration */}
        <div className="absolute -top-4 -right-4 text-yellow-400 text-3xl animate-spin-slow">
          ✨
        </div>
        <div className="absolute -bottom-4 -left-4 text-pink-400 text-3xl animate-spin-slower">
          ✨
        </div>

        {/* Profile Image */}
        {/* <div className="relative inline-block mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-2xl opacity-60 animate-pulse"></div>
          <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 p-1 mx-auto">
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-6xl border-2 border-gray-700">
              😔
            </div>
          </div>
        </div> */}

        <div className="relative inline-block mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-2xl opacity-60 animate-pulse"></div>

          <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 p-1 mx-auto">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-gray-700">
              <img
                src="/her-photo.jpg"
                alt="Her Photo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Title with gradient */}
        <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
          I'm Really Sorry
        </h1>
        <p className="text-2xl font-semibold text-pink-400 mb-6">
          {herName} 💕
        </p>

        {/* Message */}
        <div className="bg-gradient-to-r from-gray-700/50 to-purple-900/30 rounded-2xl p-6 mb-6 border border-gray-600/30">
          <p className="text-gray-200 leading-relaxed text-lg">
            I said something wrong unintentionally, and I truly regret it. You
            are my great friend, and I hope you can find it in your heart to
            forgive me 💙
          </p>
        </div>

        {/* Music Toggle */}
        {/* <button
          onClick={playSorryMusic}
          className="absolute top-4 right-4 p-2 rounded-full bg-purple-900/50 hover:bg-purple-800/70 transition-colors border border-purple-500/30 text-2xl"
          title={musicOn ? "Mute Music" : "Play Music"}
        >
          {musicOn ? "🔊" : "🔇"}
        </button> */}

        <button
          onClick={toggleMusic}
          className="absolute top-4 right-4 p-2 rounded-full bg-purple-900/50 hover:bg-purple-800/70 transition-colors border border-purple-500/30 text-2xl"
        >
          {musicOn ? "🔊" : "🔇"}
        </button>

        {/* Buttons */}
        {response === null && (
          <div className="flex justify-center gap-6 mt-8">
            <button
              onClick={() => setResponse("yes")}
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 animate-pulse-glow border border-green-400/30"
            >
              Yes, I Forgive You 💕
            </button>
            <button
              onClick={handleNo}
              style={noButtonStyle}
              className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 border border-red-400/30"
            >
              No 😔
            </button>
          </div>
        )}

        {/* Response Messages */}
        {response === "yes" && (
          <div className="mt-8 animate-fade-in">
            <div className="text-7xl mb-4 animate-bounce">🎉</div>
            <p className="text-green-400 text-2xl font-bold mb-2">
              Thank you so much! 🥹💖
            </p>
            <p className="text-gray-300 text-lg">
              You've made me the happiest person! I promise to be better ✨
            </p>
          </div>
        )}

        {response === "no" && (
          <div className="mt-8">
            <div className="text-6xl mb-4 animate-shake">💔</div>
            <p className="text-red-400 text-xl font-semibold mb-4">
              {messages[Math.min(noCount, messages.length - 1)]}
            </p>
            <button
              onClick={() => {
                setResponse(null);
                setNoCount(0);
                setNoButtonStyle({});
              }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-purple-400/30"
            >
              Give me another chance? 🙏
            </button>
          </div>
        )}

        {/* <audio id="bg-music" loop>
          <source src="/sorry-music.mp3" type="audio/mp3" />
        </audio> */}
        <audio ref={audioRef} loop>
          <source src="/sorry-music.mp3" type="audio/mpeg" />
        </audio>
      </div>

      {/* Bottom decoration */}
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-900/50 to-transparent pointer-events-none"></div>
    </main>
  );
}
