const text = "Explore os encantos exóticos e culturais de Belém do Pará, onde cada esquina guarda histórias vibrantes e sabores inesquecíveis da Amazônia."

export default function Example() {
    return (
      <div className="relative isolate overflow-hidden py-24 sm:py-8 mt-14">
        <div className="mx-auto max-w-2xl px-4 lg:px-8 ">
          <div className="max-w-2xl lg:mx-0 text-center">
            <h1 className="text-4xl d sm:text-6xl ">BELÉM</h1>
            <h3 className="mt-4 mb-16">
              {text}
            </h3>
            <a href="#" className="rounded-sm bg-green-700 px-6 py-2 font-bold text-white hover:bg-gray-400  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700 ">
                Inicio
            </a>
          </div>
        </div>
      </div>
    )
  }
  