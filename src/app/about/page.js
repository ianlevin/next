import Image from 'next/image'
import imagen from '../img/foto.jpg'
export default function About() {
    return (
      <div>
        <h1>Ian Levin y Agustin Yudcovsky</h1>
        <Image
        src={imagen} 
        alt="Descripción de la imagen"
        width={550} 
        height={500} 
      />
      </div>
    );
  };