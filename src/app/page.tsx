import Image from "next/image";
import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
      <title>Comidas Rápidas el Pollon</title>
      <meta
        name="description"
        content="Las Mejores Comidas Rápidas Calidad Precio de Cali"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    {/* Contenedor principal */}
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#FFFFFD] p-4">
      {/* Logo y Título */}
      <section className="flex flex-col items-center mb-6">
        {/* Ejemplo con next/image (ajusta src a tu logo) */}
        <div className="w-40 h-40 relative mb-3">
          <Image
            src="/images/logo-pollon.png" // Ajusta con la ruta de tu logo
            alt="Logo Pollon"
            layout="fill"
            objectFit="contain" 
            priority
          />
        </div>
        <h1 className="text-xl font-bold text-gray-900 mb-2 text-center">
          Comidas Rápidas el Pollon
        </h1>
        <p className="text-sm text-gray-700 text-center">
          Las Mejores Comidas Rápidas Calidad Precio de Cali
        </p>
      </section>

      {/* Íconos de redes sociales (opcional, si quieres tenerlos aparte) */}
      <section className="flex flex-row space-x-6 mb-6">
        {/* Ícono de WhatsApp */}
        <a
          href="https://wa.link/m9z86j"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-green-500"
        >
          <svg
            className="w-6 h-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            {/* Ícono de FontAwesome – WhatsApp */}
            <path d="M380.9 97.1C339...." />
          </svg>
        </a>
        {/* Ícono de Instagram */}
        <a
          href="https://www.instagram.com/elpolloncomidasrapidas/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-pink-500"
        >
          <svg
            className="w-6 h-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            {/* Ícono de FontAwesome – Instagram */}
            <path d="M224.1 141c-63.6 0-114..." />
          </svg>
        </a>
      </section>

      {/* Lista de enlaces estilo “linktree” */}
      <section className="flex flex-col w-full max-w-sm space-y-4">
        {/* Botón para Menú */}
        <a
          href="https://www.canva.com/design/DAGgItr4_js/RkNbH120wAbXnrhzMEQJng/view?utlId=hff163fb67a&fbclid=PAZXh0bgNhZW0CMTEAAaaouILgX4QtEF6xG3H-6aU9tuZ0tG0NFxDkX69RsKxuIXrLQrirbhiy53g_aem_lEQg0l9KCQ_vs2DrgMNRNg"
          className="block w-full rounded-full bg-[#f2eadc] py-3 text-center 
                     font-medium text-gray-800 hover:bg-[#e0d3c3] shadow-sm
                     transition-all"
        >
          Menú
        </a>

        {/* Botón para WhatsApp */}
        <a
          href="https://wa.link/m9z86j"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded-full bg-[#f2eadc] py-3 text-center 
                     font-medium text-gray-800 hover:bg-[#e0d3c3] shadow-sm
                     transition-all"
        >
          WhatsApp
        </a>

        {/* Botón para Instagram */}
        <a
          href="https://www.instagram.com/elpolloncomidasrapidas/"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded-full bg-[#f2eadc] py-3 text-center 
                     font-medium text-gray-800 hover:bg-[#e0d3c3] shadow-sm
                     transition-all"
        >
          Instagram
        </a>
        {/* Botón para Rappi */}
        <a
          href="https://www.rappi.com.co/restaurantes/delivery/321235-comidas-el-pollon?utm_source=app&utm_medium=deeplink&utm_campaign=share "
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded-full bg-[#f2eadc] py-3 text-center 
                     font-medium text-gray-800 hover:bg-[#e0d3c3] shadow-sm
                     transition-all"
        >
          Rappi
        </a>
        {/* Botón para Diddi */}
        <a
          href="https://c-h5.didi-food.com/es-MX/deeplink?appName=sodaCustomer&path=businessPage&shopId=5764608160112053600"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded-full bg-[#f2eadc] py-3 text-center 
                     font-medium text-gray-800 hover:bg-[#e0d3c3] shadow-sm
                     transition-all"
        >
          Didi
        </a>
      </section>
    </main>
  </>
  );
}
