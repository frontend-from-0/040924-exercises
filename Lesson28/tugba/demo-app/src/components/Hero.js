import './Hero.css';

export function Hero() {
  return (
    <section className="hero">
      <h2>Merhaba, Ben Tuğba!</h2>
      <p>Frontend Developer olarak kullanıcı dostu web siteleri tasarlıyorum.</p>
      <div className="hero-buttons">
        <button className="button-primary">Projelerimi Gör</button>
        <button className="button-secondary">İletişime Geç</button>
      </div>
    </section>
  );
}