import Homework from "../../components/Homework";
import { Divider } from "@heroui/react";
import DocumentAbout from "../../components/DocumentAbout";


export default function HomePage(): JSX.Element {
  return (
    <main className="dark bg-background text-foreground bg-[url('https://astro.build/_astro/HeroBackground.B0iWl89K_2hpsgp.webp')] bg-left bg-cover  min-h-screen w-full font-inter flex items-center flex-col justify-start">
      <div className="md:w-3/4 w-full py-5 px-3">
        <h1 className="text-4xl font-extrabold">
          Portafolio de evidencias &bull; Sistemas operativos.
        </h1>
        <p className="text-neutral-400 font-semibold">
          Por Saul Emanuel Yañez Salazar
        </p>
        <p className="text-neutral-400 font-semibold">Sistemas operativos &bull; D04</p>
        <p className="text-neutral-400 font-semibold">Maestra: Becerra Velazques Violeta del Rocio. </p>
        <Divider className="my-3" />
        <h2 className="font-extrabold text-2xl ml">Practicas.</h2>
      </div>
      <section className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-4 p-2 ">
        <Homework
          title="Procesamiento por lotes"
          imageUrl="./primero.png"
          urlTo="/about/first"
        >
          Simulación de procesos en un sistema operativo usando lotes, con
          capacidad de 5 procesos por lotes. Sin capacidad de interacción más
          que la visualización de los procesos e inicio de los mismos.
        </Homework>
        <Homework
          title="Interacción de procesos."
          imageUrl="./segundo.png"
          urlTo="/about/second"
        >
          Simulacion de procesos de un sistema operativo, con la oportunidad de
          interacturar con los procesos, pausar, reunudar, eliminar procesos y
          agregar nuevos procesos mendiante la entreada del teclado.
        </Homework>
        <Homework
          title="First Come First Served"
          imageUrl="./tercero.png"
          urlTo="/about/third"
        >
          Simulación de procesos de un sistema operativo, con la oportunidad de
          interactuar con los procesos, pausar, reanudar, y bloquear procesos
          con el teclado.
        </Homework>
        <Homework
          title="First Come First Served p2."
          imageUrl="./cuarto.png"
          urlTo="/about/fourth"
        >
          Simulacion del algoritmo de planificacion de procesos FCFS, con la
          capacidad de mostrar el bloque de control de procesos y ademas de
          agregar una nueva tecla que permite agregar procesos incluso durante
          la ejecucion del programa.
        </Homework>
        <Homework
          title="Round Robin"
          imageUrl="./quinta.png"
          urlTo="/about/fifth"
        >
          Simulación de porocesos en un sistema operativo usando Round Robin con
          la capacidad de interactuar con los procesos, pausar, reanudar,
          continuar y mostrar el estado de los procesos usando una tabla de
          control de procesos.
        </Homework>
        <Homework
          title="Productor-Consumidor"
          imageUrl="./sexta.png"
          urlTo="/about/sixth"
        >
          Simulación del problema clásico del Productor-Consumidor en un sistema
          operativo. En esta implementación, se utiliza un búfer circular con
          capacidad para 22 elementos, donde los procesos productores generan
          elementos y los procesos consumidores los consumen.
        </Homework>
        <Homework
          title="Paginación simple"
          imageUrl="./septima.png"
          urlTo="/about/seventh"
        >
          Simulación de un sistema operativo con paginación simple, donde se
          pueden agregar procesos al sistema, y se muestra la tabla de páginas y
          el bloque de control de procesos.
        </Homework>
        <Homework
          title="Procesos suspendidos."
          imageUrl="./octava.png"
          urlTo="/about/eighth"
        >
          Simulación de un sistema operativo con procesos suspendidos, donde se
          pueden agregar procesos al sistema, y se muestra la tabla de páginas y
          el bloque de control de procesos, además de pasarlo a una lista de
          procesos suspendidos.
        </Homework>
      </section>
      <Divider className="my-3 mx-auto lg:w-3/4 w-full" />
      <h2 className="font-extrabold text-2xl text-start lg:w-3/4 w-full p-2">
        Tareas.
      </h2>
      <section className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-4 p-2 mb-4 ">
        <DocumentAbout
          homeworkNumber={1}
          title="Introduccion a los sistemas operativos"
          description="Introducción a los sistemas operativos, donde se explica bases y generalidades de los sistemas operativos"
          to="/first"
        />
        <DocumentAbout
          homeworkNumber={2}
          title="Modelos de sistemas operativos"
          description="Modelos de sistemas operativos, explica los diferentes modelos y características de un sistema operativo"
          to="/first"
        />
        <DocumentAbout
          homeworkNumber={3}
          title="Administracion de procesos"
          description="Administracion de procesos, explica los diferentes tipos de procesos y como se administran en un sistema operativo"
          to="/third"
        />
        <DocumentAbout
          homeworkNumber={4}
          title="Algoritmos de planificacion"
          description="Algoritmos de planificacion explica los diferentes algoritmos de planificacion, como se gestionan y su importancia en un sistema operativo"
          to="/fourth"
        />
        <DocumentAbout
          homeworkNumber={5}
          title="Cuestionario para exposicion"
          description="Preparacion de un cuestionario para la expoosicion de la materia, se abarcaron varios temas generalizados."
          to="/fifth"
        />
        <DocumentAbout
          homeworkNumber={6}
          title="Tecnicas para administracion de memoria"
          description="Tecnicas para administracion de memoria, se explican las diferentes tecnicas de administracion de memoria"
          to="/sixth"
        />
        <DocumentAbout
          homeworkNumber={7}
          title="Entrada y salida"
          description="Entrada y salida explica como el sistema opearativo no es un programa, si no un conjunto de programas que se conectan entre si mediante componentes fisicos"
          to="/seventh"
        />
        <DocumentAbout
          homeworkNumber={8}
          title="Seguridad"
          description="Importancia de la seguridad en un sistema operativo y en la red para mantener la integridad de los datos."
          to="/seventh"
        />
      </section>
      <section className="flex flex-col items-center justify-center w-full lg:w-3/4 p-2">
      <Divider className="my-3 mx-auto w-full" />
        <h2 className="font-extrabold text-2xl text-start w-full">
          Conclusiones
        </h2>
        <p className="my-2 font-semibold">
          A lo largo del desarrollo del curso de Sistemas Operativos, logramos
          formar una comprensión sólida y crítica sobre los principios
          fundamentales que rigen el funcionamiento interno de los sistemas de
          cómputo modernos. Desde una perspectiva tanto teórica como práctica,
          se abordaron temas clave como la planificación de procesos, la gestión
          de la memoria y los mecanismos de seguridad, los cuales resultan
          pilares esenciales para garantizar el rendimiento, la estabilidad y la
          protección de cualquier entorno computacional.
        </p>
        <p className="my-2 font-semibold">
        Finalmente, este curso representó una experiencia académica integral,
          donde se ha vinculado la teoría con la práctica mediante simulaciones
          que modelan el comportamiento real de un sistema operativo. Los
          conocimientos adquiridos sientan las bases para comprender en mayor
          profundidad la interacción entre hardware y software, y proporcionan
          las herramientas necesarias para diseñar o analizar sistemas complejos
          con criterios de eficiencia, seguridad y robustez.

        </p>
      </section>
      <footer className="bg-gradient-to-t from-blue-600 to-transparent to-25% px-10 py-12 flex items-center justify-center w-full border-1 dark:border-gray-800 border-gray-200">
    
        <p className="text-center text-white">&copy; {new Date().getFullYear()} Saul Emanuel Yañez Salazar. Sistemas operativos.</p>
      </footer>
    </main>
  );
}
