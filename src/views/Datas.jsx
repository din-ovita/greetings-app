import '../css/datas.css'
import balloon from '../assets/balloon.png'
import balloon2 from '../assets/balloon2.png'
import flag from '../assets/flag.png'
import ijazah from '../assets/ijazah.png'
import { useEffect, useRef } from 'react'
import musik from '../assets/btobmissingyou.mp3';

function Datas() {
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
    <body>
      <div id="root">
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
            <p>Akhir perjalanan dari masa abu-abu putih. Semoga kalian selalu beruntung, dan kita bisa bertemu dan berkumpul kembali dalam versi diri yang lebih baik~~</p>
          </div>
          <img src={balloon} className="balloon-floating3" />
          <img src={balloon} className="balloon-floating4" />
          <div className='form balloon-wrapper'>
            <div className="glass-input">
              <h3>Dinda Novita</h3>
              <div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse nesciunt vel fugiat ut reiciendis omnis, dolore quibusdam ducimus alias, non illo nostrum quis ipsum veritatis iusto repudiandae nobis? Placeat, perferendis.</p>
              </div>
            </div>
            <div className="glass-input">
              <h3>Dinda Novita</h3>
              <div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse nesciunt vel fugiat ut reiciendis omnis, dolore quibusdam ducimus alias, non illo nostrum quis ipsum veritatis iusto repudiandae nobis? Placeat, perferendis.</p>
              </div>
            </div>
            <div className="glass-input">
              <h3>Dinda Novita</h3>
              <div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse nesciunt vel fugiat ut reiciendis omnis, dolore quibusdam ducimus alias, non illo nostrum quis ipsum veritatis iusto repudiandae nobis? Placeat, perferendis.</p>
              </div>
            </div>
            <div className="glass-input">
              <h3>Dinda Novita</h3>
              <div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse nesciunt vel fugiat ut reiciendis omnis, dolore quibusdam ducimus alias, non illo nostrum quis ipsum veritatis iusto repudiandae nobis? Placeat, perferendis.</p>
              </div>
            </div>
            <div className="glass-input">
              <h3>Dinda Novita</h3>
              <div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse nesciunt vel fugiat ut reiciendis omnis, dolore quibusdam ducimus alias, non illo nostrum quis ipsum veritatis iusto repudiandae nobis? Placeat, perferendis.</p>
              </div>
            </div>
            <img src={balloon2} className="balloon-floating" />
          </div>
          <img src={balloon} className="balloon-floating2" />
        </div>
        <footer className="footer">
          <p>Craft by Din.Ovita @2025</p>
        </footer>
      </div>
    </body>
  )
}

export default Datas
