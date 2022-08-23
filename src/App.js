import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TiempoYUbicacion from './components/TiempoYUbicacion';
import TemperaturaDetalles from './components/TemperaturaDetalles';
import Pronostico from './components/Pronostico';
import getWeatherData from './servicios/ServiciosDelTiempo';

function App() {
  const fetchWeather = async  () => {
    const data = await getWeatherData("tiempo", { q: "cordoba" });
    console.log(data);
  };

  fetchWeather();

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons />
      <Inputs />

      <TiempoYUbicacion />
      <TemperaturaDetalles />

      <Pronostico titulo="Pronóstico de hoy" />
      <Pronostico titulo="Por horas" />
    </div>
  );
}

export default App;
