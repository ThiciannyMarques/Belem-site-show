const textPrincipal = "Explore os encantos exóticos e culturais de Belém do Pará, onde cada esquina guarda histórias vibrantes e sabores inesquecíveis da Amazônia."
const comidas = [
  {
    id: 1,
    Title: 'Tacaca',
    href: '#',
    imageSrc: 'https://blog.supernovaera.com.br/wp-content/webp-express/webp-images/uploads/2023/02/receita-de-tacaca-2048x1366.jpeg.webp',
    imageAlt: "Tacacá",
    Description: 'Tacacá é uma sopa paraense com tucupi, camarão seco, jambu e goma de tapioca, servida quente em cuia, apreciada por sua combinação única de sabores e texturas.',
  },
  {
      id: 2,
      Title: 'Vatapa',
      href: '#',
      imageSrc: 'https://obidense.com.br/images/noticias/10527/20122701_vata_Porta.jpg',
      imageAlt: "Vatapá",
      Description: 'O Vatapá é preparado com camarão seco, azeite de dendê, leite de coco e temperos locais, resultando em um prato cremoso e rico em sabores.',
  },
  {
      id: 3,
      Title: 'Maniçoba',
      href: '#',
      imageSrc: 'https://portaledicase.com/wp-content/uploads/2021/02/Aprenda-o-preparo-da-famosa-Manicoba-Paraense.jpg',
      imageAlt: "Maniçoba",
      Description: 'Maniçoba é um prato feito com folhas de mandioca brava (maniva) cozidas por um longo período de tempo (7 dias), com carnes de porco, charque, linguiça, toucinho, entre outros ingredientes.',
  },
  {
    id: 4,
    Title: 'Pato no Tucupi',
    href: '#',
    imageSrc: 'https://www.acritica.com/image/policy:1.146035.1647714052:1647714052/image.jpg?f=default&w=1200',
    imageAlt: "Pato no Tucupi",
    Description: 'Anim aute id magna aliqua ad ad non deserunt sunt',
  },
  {
    id: 5,
    Title: 'Caruru',
    href: '#',
    imageSrc: 'https://scontent.fjdo1-1.fna.fbcdn.net/v/t1.6435-9/75252927_736860233481000_1695754411034279936_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=c2f564&_nc_eui2=AeH54LK78wjAzJnDH3Zlgv_NgHmya5FQLdWAebJrkVAt1Wa_JWH5_ogSaT4vM-haCTmibOxfl5f63poYnu-QVQTK&_nc_ohc=0lB1WIGCp9cAX8lybJy&_nc_ht=scontent.fjdo1-1.fna&oh=00_AfCCT239FxoosVmOhTkOBSceSU9wST_qwL99xtib8H3ckw&oe=65DD181D',
    imageAlt: "Caruru",
    Description: 'Anim aute id magna aliqua ad ad non deserunt sunt',
  },
  {
    id: 6,
    Title: 'Açai',
    href: '#',
    imageSrc: 'https://btmais.com.br/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-10-at-15.51.44.jpeg',
    imageAlt: "Açaí",
    Description: 'Anim aute id magna aliqua ad ad non deserunt sunt',
  },
  {
    id: 7,
    Title: 'Bolo de macaxeira',
    href: '#',
    imageSrc: 'https://comidinhasdochef.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2019/09/Bolo-de-Macaxeira-Simples.jpg.webp',
    imageAlt: "Bolo de Macaxeira",
    Description: 'Anim aute id magna aliqua ad ad non deserunt sunt',
  },
  {
    id: 8,
    Title: 'Moqueca',
    href: '#',
    imageSrc: 'https://midias.agazeta.com.br/2022/10/12/filhote-com-camarao-caranguejo-ovo-cozido-e-acompanhamentos-891472-article.jpg',
    imageAlt: "Moqueca",
    Description: 'Anim aute id magna aliqua ad ad non deserunt sunt',
  },
  {
    id: 9,
    Title: 'Peixe na folha de bananeira',
    href: '#',
    imageSrc: 'https://espetinhodesucesso.com.br/wp-content/uploads/2022/04/Peixe-na-folha-de-bananeira.jpg',
    imageAlt: "Peixe na folha de bananeira",
    Description: 'Anim aute id magna aliqua ad ad non deserunt sunt',
  },
]

export default function Example() {
  return (
    <div>
       <div className="relative isolate overflow-hidden py-10 sm:py-8 mt-14">
        <div className="mx-auto max-w-2xl px-4 lg:px-8 ">
          <div className="max-w-2xl lg:mx-0 text-center">
            <h2 className="text-4xl sm:text-6xl ">Culinaria</h2>
            <h3 className="mt-6">
            {textPrincipal}
            </h3>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-28 lg:max-w-7xl lg:px-17">
        <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-16 " >
          {comidas.map((comida) => (
            <div key={comida.id} className="bg-white group relative rounded-md shadow-2xl">
              <div className=" w-full overflow-hidden  bg-gray-200 lg:h-60 text-center rounded-md ">
                <img
                  src={comida.imageSrc}
                  alt={comida.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full "
                />
              </div>
              <div className="p-3 text-center shadow-inner">
                  <h3 className="text-sm text-gray-700 font-bold">
                    <a href={comida.href}>
                      <span aria-hidden="true" className="absolute inset-0 " />
                      {comida.Title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{comida.Description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
