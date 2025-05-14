// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import './css/form.css'
import balloon from './assets/balloon.png'
import balloon2 from './assets/balloon2.png'
import flag from './assets/flag.png'
import ijazah from './assets/ijazah.png'
import { useEffect, useRef } from 'react'
import musik from './assets/btobmissingyou.mp3';

function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    const handleUserInteraction = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((err) => {
          console.warn("Gagal memutar audio:", err);
        });
      }
      // Hanya jalankan sekali
      window.removeEventListener('click', handleUserInteraction);
    };

    window.addEventListener('click', handleUserInteraction);
    return () => {
      window.removeEventListener('click', handleUserInteraction);
    };
  }, []);

  return (
    <>
      <audio ref={audioRef} loop>
        <source src={musik} type="audio/mpeg" />
      </audio>
      <div className='flag'>
        <img src={flag} className='img-flag1' />
        <img src={flag} className='img-flag2' />
      </div>
      <div className='container'>
        <div className='header'>
          <div className='header-logo'>
            <h2>Class of 2025</h2>
            <img src={ijazah} className='img-logo' />
          </div>
          <p>Akhirnya lulus juga ya! Gak kerasa udah sejauh ini bareng-bareng. Makasih udah jadi bagian dari perjalanan seru ini. </p>
        </div>
        <img src={balloon} className="balloon-floating3" />
        <img src={balloon} className="balloon-floating4" />
        <div className='form'>
          <label>Hai, namaku...</label>
          <input className="glass-input" />
        </div>
        <div className='form balloon-wrapper'>
          <label>Sedikit ucapan dariku...</label>
          <textarea rows={8} className="glass-input"></textarea>
          <img src={balloon2} className="balloon-floating" />
        </div>
        <div>
          <button className="glass-button"><span>Kirim</span></button>
        </div>
        <img src={balloon} className="balloon-floating2" />
      </div>
      <footer className="footer">
        <p>Craft by Din.Ovita @2025</p>
      </footer>
    </>
  )
}

export default App
