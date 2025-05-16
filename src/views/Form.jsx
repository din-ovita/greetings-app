import '../css/form.css'
import balloon from '../assets/balloon.png'
import balloon2 from '../assets/balloon2.png'
import flag from '../assets/flag.png'
import ijazah from '../assets/ijazah.png'
import { useEffect, useRef, useState } from 'react'
import musik from '../assets/btobmissingyou.mp3';
import downloadGif from '../assets/download.gif';
import axios from 'axios'
import Swal from 'sweetalert2'

export default function Form() {
  const audioRef = useRef(null);
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")

  const resetForm = () => {
    setName('')
    setMessage('')
  }

  const formatDateToMySQL = (date) => {
    return date.toISOString().slice(0, 19).replace('T', ' ');
  };


  const sendMessage = async (e) => {
    e.preventDefault();
    const thisDate = formatDateToMySQL(new Date());
    try {
      const payloads = {
        name: name,
        greetings: message,
        date: thisDate,
      };
      //  await axios.post(`http://localhost:8000/ucapan`, payloads);
      await axios.post(`https://express-app-production-a9a7.up.railway.app/ucapan`, payloads);
      resetForm()
      Swal.fire({
        title: "Terima kasih! 🎉",
        text: "Ucapanmu sudah terkirim. Semoga sukses selalu!",
        imageUrl: downloadGif,
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: "Ucapan berhasil",
        showConfirmButton: false,
        timer: 3000, // otomatis hilang dalam 3 detik
        timerProgressBar: true,
      });
    } catch (error) {
      if (error.ressponse && error.response.status === 401) {
        localStorage.clear();
        history.push("/login");
      } else {
        console.log(error);
      }
    }
  };

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
            <p>Akhirnya lulus juga ya! Gak kerasa udah sejauh ini bareng-bareng. Makasih udah jadi bagian dari perjalanan seru ini. </p>
          </div>
          <img src={balloon} className="balloon-floating3" />
          <img src={balloon} className="balloon-floating4" />
          <div className='form'>
            <label>Namaku...</label>
            <input className="glass-input" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className='form balloon-wrapper'>
            <label>Kesan dan pesan dariku...</label>
            <textarea rows={8} className="glass-input" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            <img src={balloon2} className="balloon-floating" />
          </div>
          <div>
            <button className="glass-button" onClick={sendMessage}><span>Kirim</span></button>
          </div>
          <img src={balloon} className="balloon-floating2" />
        </div>
        <footer className="footer">
          <p>Craft by Din.Ovita @2025</p>
        </footer>
      </div>
    </>
  )
}