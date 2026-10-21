import { useState } from "react";
import { useParams } from "react-router-dom";
const firstCard=[
  {
    id:1,
    image:"https://i.pinimg.com/736x/56/4d/be/564dbe9b4d28549e91382c0638400561.jpg",
    title:"nature",
    description:"Exploring Earth's magnificent landscapes from mountains to oceans.",
    quote:"A journey through Earth's most stunning natural landscapes."

  },
  {
    id:2,
    image:"https://i.pinimg.com/1200x/74/6f/e4/746fe40ce9844ef5c94e18dbc723f622.jpg",
    title:"urban",
    description:"Exploring Earth's magnificent landscapes from mountains to oceans.",
    quote:"A journey through Earth's most stunning natural landscapes."

  },
  {
    id:3,
    image:"https://i.pinimg.com/1200x/87/d8/02/87d80227d335a4906251c266bc46bc0a.jpg",
    title:"travel",
    description:"Exploring Earth's magnificent landscapes from mountains to oceans.",
    quote:"A journey through Earth's most stunning natural landscapes."

  },
  {
    id:4,
    image:"https://i.pinimg.com/1200x/3f/68/4f/3f684fe0541f6b145a686c23e5d3662e.jpg",
    title:"architecture",
    description:"Exploring Earth's magnificent landscapes from mountains to oceans.",
    quote:"A journey through Earth's most stunning natural landscapes."

  },
]
const galleries = [
  {
    id: 1,
    title: "Forest Exploration",
    description: "Exploring the magical world of mysterious forests.",
    category: "Nature",
    date: "3/14/2024",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b",
    photos: 4,
  },
  {
    id: 2,
    title: "Mountain Adventures",
    description: "Discover breathtaking mountains and snowy landscapes.",
    category: "Travel",
    date: "3/13/2024",
    image:
      "https://i.pinimg.com/1200x/87/d8/02/87d80227d335a4906251c266bc46bc0a.jpg",
    photos: 8,
  },
  {
    id: 3,
    title: "Ocean Dreams",
    description: "Beautiful coastlines and peaceful ocean views.",
    category: "Nature",
    date: "3/12/2024",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    photos: 6,
  },
  {
    id: 4,
    title: "Ocean Dreams",
    description: "Beautiful coastlines and peaceful ocean views.",
    category: "Architecture",
    date: "3/12/2024",
    image:
      "https://i.pinimg.com/1200x/3f/68/4f/3f684fe0541f6b145a686c23e5d3662e.jpg",
    photos: 6,
  },
  {
    id: 5,
    title: "Ocean Dreams",
    description: "Beautiful coastlines and peaceful ocean views.",
    category: "Architecture",
    date: "3/12/2024",
    image:
      "https://i.pinimg.com/736x/8f/b7/da/8fb7da120657bf71e4aa0892a7052685.jpg",
    photos: 6,
  },
  {
    id: 6,
    title: "Green Escape",
    description: "A journey through Earth's most beautiful landscapes.",
    category: "Travel",
    date: "3/11/2024",
    image:
      "https://i.pinimg.com/1200x/ac/b5/d0/acb5d04d3f6c0b1ba49cc000a15d5db5.jpg",
    photos: 5,
  },
  {
    id: 7,
    title: "Green Escape",
    description: "A journey through Earth's most beautiful landscapes.",
    category: "Urban",
    date: "3/11/2024",
    image:
      "https://i.pinimg.com/1200x/74/6f/e4/746fe40ce9844ef5c94e18dbc723f622.jpg",
    photos: 5,
  },
  {
    id: 8,
    title: "Green Escape",
    description: "A journey through Earth's most beautiful landscapes.",
    category: "Urban",
    date: "3/11/2024",
    image:
      "https://i.pinimg.com/1200x/f8/ac/e9/f8ace96af52ff99575c45de48704efd1.jpg",
    photos: 5,
  },
  {
    id: 9,
    title: "Green Escape",
    description: "A journey through Earth's most beautiful landscapes.",
    category: "Urban",
    date: "3/11/2024",
    image:
      "https://i.pinimg.com/1200x/34/d0/a1/34d0a1568dc6604ad0517eae07961c0e.jpg",
    photos: 5,
  },
  {
    id: 10,
    title: "Green Escape",
    description: "A journey through Earth's most beautiful landscapes.",
    category: "Travel",
    date: "3/11/2024",
    image:
      "https://i.pinimg.com/1200x/5e/f5/52/5ef552143fd6dd47045265d2f23fe405.jpg",
    photos: 5,
  },
  {
    id: 11,
    title: "Green Escape",
    description: "A journey through Earth's most beautiful landscapes.",
    category: "Architecture",
    date: "3/11/2024",
    image:
      "https://i.pinimg.com/1200x/4e/44/98/4e4498e5f4ef948a67d8a78e88e08f31.jpg",
    photos: 5,
  },
  {
    id: 12,
    title: "Green Escape",
    description: "A journey through Earth's most beautiful landscapes.",
    category: "Nature",
    date: "3/11/2024",
    image:
      "https://i.pinimg.com/1200x/dd/aa/a2/ddaaa28914b6f167550b608d13717c58.jpg",
    photos: 5,
  },
];

const Gallery= () => {

  const [selectedGallery, setSelectedGallery] = useState(null)
  const openModal =(gallery)=>{
    setSelectedGallery(gallery)
  }
  const closeModal =()=>{
    setSelectedGallery(null)
  }
  const showNextGallery=()=>{
    const currentIndex=galleries.findIndex((gallery)=>gallery.id === selectedGallery.id)
    const nextIndex=(currentIndex +1 ) % galleries.length
    setSelectedGallery(galleries[nextIndex])
  }
  const { category } = useParams();

  const filteredCards = firstCard.filter(
    (card) => card.title.toLowerCase() === category?.toLowerCase()
  );

  const filteredGalleries = galleries.filter(
    (gallery) =>
      gallery.category.toLowerCase() === category?.toLowerCase()
  );

  return (
      <div className="   flex flex-col gap-8 px-5 py-12 sm:px-10">

      {/* Gallery heading */}
      <h1 className=" first-letter:uppercase text-4xl font-bold text-[#202938]">
        {category}
      </h1>

      {/* Gallery cards */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 ">

        {
          filteredCards.map((f)=>(

          <div className={`group rounded-xl bg-white   p-3 text-left shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl  `}>
            <div className= " relative overflow-hidden bg-white transition">

<img src={f.image} alt=""   className="  h-80 w-full object-cover  z-0  duration-500 group-hover:scale-105"/>
<div className="absolute z-10 inset-0 text-black left-3 top-28 flex flex-col gap-6  p-4">
  
  <h1 className="text-2xl first-letter:uppercase  font-semibold">{f.title}</h1>
  <p className="text-xl text-gray-700">{f.description}</p>
  <span className="text-sm text-gray-600">{f.quote}</span>
</div>
      <div className="absolute inset-0 bg-white/90"></div>
            </div>
        
          </div>
          ))
        }

        {filteredGalleries.map((gallery) => (
          <button
            key={gallery.id}
            onClick={() => openModal(gallery)}
            className="group rounded-xl bg-white p-3 text-left shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="relative overflow-hidden rounded ">
              <img
                src={gallery.image}
                alt={gallery.title}
                className="h-80 w-full object-cover  transition duration-500 group-hover:scale-105"
              />

              <span className="absolute right-3 top-3 rounded-full bg-white/90 px-4 py-2 text-sm text-gray-700 backdrop-blur">
                {gallery.photos} Photos
              </span>

              <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-4 py-2 text-sm text-gray-700">
                {gallery.category}
              </span>
            </div>


          </button>
        ))}

      </div>

      {/* Details modal */}
      {selectedGallery && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="gallery-title"
            className="relative grid max-h-[90vh] w-full max-w-6xl grid-cols-1 overflow-y-auto rounded-xl bg-white shadow-2xl md:grid-cols-2 md:overflow-hidden"
            onClick={(event) => event.stopPropagation()}
          >

            {/* Large image */}
            <div className="min-h-64 md:min-h-[520px]">
              <img
                src={selectedGallery.image}
                alt={selectedGallery.title}
                className="h-full max-h-[45vh] w-full object-cover md:max-h-[80vh]"
              />
            </div>

            {/* Details */}
            <div className="flex flex-col justify-between gap-8 p-6 sm:p-10">

              <div className="flex flex-col gap-2">
                <p className=" text-sm uppercase tracking-widest text-gray-400">
                  {selectedGallery.category} Gallery
                </p>

                <h2
                  id="gallery-title"
                  className="text-3xl text-[#202938]  font-semibold sm:text-4xl"
                >
                  {selectedGallery.title}
                </h2>

                <p className=" leading-7 text-gray-500">
                  {selectedGallery.description}
                </p>

                <p className="mt-4 text-sm text-gray-400">
                  {selectedGallery.photos} Photos · {selectedGallery.date}
                </p>
              </div>

              <div className="flex flex-col gap-4">

                <button
                  onClick={() =>
                    alert(`Viewing details for ${selectedGallery.title}`)
                  }
                  className="rounded bg-[#fff4cf] px-5 py-4 text-[#202938] transition hover:bg-[#ffe9a3]"
                >
                  View Gallery Details
                </button>

                <button
                  onClick={showNextGallery}
                  className="rounded border border-gray-300 px-5 py-4 text-[#202938] transition hover:bg-gray-100"
                >
                  Next Gallery →
                </button>

                <button
                  onClick={closeModal}
                  className="py-2 text-gray-500 transition hover:text-black"
                >
                  Close
                </button>

              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}

export default Gallery