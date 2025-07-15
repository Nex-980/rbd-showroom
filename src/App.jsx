import React from "react";
import "./App.css";

function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <header className="flex justify-between items-center p-6 border-b border-white/10">
        <h1 className="text-3xl font-bold tracking-widest">RBD</h1>
        <nav className="space-x-6 text-sm uppercase text-white/70">
          <a href="#vehiculos" className="hover:text-white">Vehículos</a>
          <a href="#financiamiento" className="hover:text-white">Financiamiento</a>
          <a href="#nosotros" className="hover:text-white">Nosotros</a>
          <a href="#contacto" className="hover:text-white">Contacto</a>
        </nav>
      </header>
      <section className="flex flex-col items-center justify-center text-center py-32 px-6 bg-gradient-to-b from-black to-gray-900">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
          Diseño que Impulsa. <br /> Potencia que Enamora.
        </h2>
        <p className="text-white/70 text-lg mb-8">Conduce el futuro, hoy.</p>
        <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
          Ver Catálogo
        </button>
      </section>
      <section id="vehiculos" className="py-20 px-8 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-10 text-center">Vehículos Destacados</h3>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { name: "BMW M4 Competition", image: "https://source.unsplash.com/featured/?bmw,m4" },
            { name: "Audi RS7", image: "https://source.unsplash.com/featured/?audi,rs7" },
            { name: "Mercedes-AMG GT 63", image: "https://source.unsplash.com/featured/?mercedes,amg" }
          ].map((car, i) => (
            <div key={i} className="bg-white/5 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <img src={car.image} alt={car.name} className="w-full h-52 object-cover" />
              <div className="p-4">
                <h4 className="text-xl font-semibold">{car.name}</h4>
                <button className="mt-3 text-sm text-white/60 hover:underline">Ver detalles</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="financiamiento" className="bg-gray-900 py-20 px-6 text-center">
        <h3 className="text-3xl font-bold mb-4">Opciones de Financiamiento</h3>
        <p className="text-white/70 max-w-xl mx-auto mb-6">
          Trabajamos con bancos aliados para ofrecerte planes flexibles y accesibles. 
          Compra tu auto sin preocupaciones.
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
          Simula tu cuota
        </button>
      </section>
      <section id="nosotros" className="py-20 px-8 text-center max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-6">¿Quiénes Somos?</h3>
        <p className="text-white/70 text-lg">
          RBD Concesionaria nace para cambiar la forma en que vives la velocidad.  
          No vendemos autos. Creamos experiencias donde el lujo se une con la potencia.  
          Importamos lo mejor del mundo automotor directamente a tu garage.
        </p>
      </section>
      <section id="contacto" className="bg-gray-950 py-20 px-8 text-center">
        <h3 className="text-3xl font-bold mb-6">Contáctanos</h3>
        <form className="max-w-lg mx-auto space-y-4">
          <input type="text" placeholder="Nombre" className="w-full p-3 rounded bg-white/10 text-white placeholder-white/40" />
          <input type="email" placeholder="Email" className="w-full p-3 rounded bg-white/10 text-white placeholder-white/40" />
          <textarea placeholder="Mensaje" rows="4" className="w-full p-3 rounded bg-white/10 text-white placeholder-white/40" />
          <button type="submit" className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
            Enviar Mensaje
          </button>
        </form>
      </section>
      <footer className="bg-black text-center py-6 text-white/40 text-sm">
        © {new Date().getFullYear()} RBD Concesionaria. Todos los derechos reservados.
      </footer>
    </div>
  );
}

export default App;
