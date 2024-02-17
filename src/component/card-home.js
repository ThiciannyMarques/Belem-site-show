
const landscapes = [
    {
      id: 1,
      Title: 'Doca ',
      href: '#',
      imageSrc: 'https://media.gettyimages.com/id/624250468/pt/foto/docks-station-in-bel%C3%A9m-par%C3%A1-state-brazil.jpg?s=2048x2048&w=gi&k=20&c=lu3X5otbYPuZJifT0owqYqrfFryiBvTf5Ovnq6AYTHE=',
      imageAlt: "Front of men's Basic Tee in black.",
      Description: 'Anim aute id magna aliqua ad ad non deserunt sunt',
    },
    {
        id: 2,
        Title: 'Cirio',
        href: '#',
        imageSrc: 'https://media.gettyimages.com/id/859392594/pt/foto/an-incredible-crowd-of-people-in-cirio-de-nazare.jpg?s=1024x1024&w=gi&k=20&c=aCv0zhn7qMknFq3YSyDegFFHYRtHF9BzsYc-4hUqO80=',
        imageAlt: "Front of men's Basic Tee in black.",
        Description: 'Anim aute id magna aliqua ad ad non deserunt sunt Anim aute id magna aliqua ad ad non deserunt sunt',
    },
    {
        id: 3,
        Title: 'Forte do castelo',
        href: '#',
        imageSrc: 'https://i.pinimg.com/564x/4a/ab/a9/4aaba93c2e964b6a4f83f850fb239d23.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        Description: 'Anim aute id magna aliqua ad ad non deserunt sunt',
    },
  ]
  
  export default function Example() {
    return (
      
        <div className="mx-auto max-w-2xl px-8 py-16 sm:px-6 sm:py-28 lg:max-w-5xl lg:px-8 ">
          <div className="mt-4 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-16 ">
            {landscapes.map((landscape) => (
              <div key={landscape.id} className="bg-white group relative rounded-md ">
                <div className=" w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-60 text-center">
                  <img
                    src={landscape.imageSrc}
                    alt={landscape.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full "
                  />
                </div>
                <div className="p-3 text-center ">
                    <h3 className="text-sm text-gray-700 font-bold ">
                      <a href={landscape.href}>
                        <span aria-hidden="true" className="absolute inset-0 " />
                        {landscape.Title}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{landscape.Description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
    )
  }
  