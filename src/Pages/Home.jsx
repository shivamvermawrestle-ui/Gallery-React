import { Link } from "react-router-dom";


const photos = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    style: "left-[8%] top-[5%] rotate-[-3deg] z-10",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    style: "left-[26%] top-[2%] rotate-[3deg] z-20",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    style: "left-[24%] top-[15%] rotate-[-5deg] z-30",
  },
  {
    id: 4,
    url: "https://i.pinimg.com/736x/7e/43/ad/7e43adc06c1cb8353e385e87afb51a2e.jpg",
    style: "left-[1%] top-[30%%] rotate-[6deg] z-50",
  },
];
const Home = () => {
  return (
<>
<div className="flex   p-10 gap-16 justify-center items-center ">
    <div className="h-[420px] sm:h-[520px] lg:h-[620px] relative  w-1/2">
    {
        photos.map((ph)=>(
            <div key={ph.id} className={`absolute ${ph.style} p-6 shadow-md w-[75%] max-h-[440px] bg-white rounded-xl transition-all duration-500 ease-out hover:-translate-y-3 hover:scale-[1.02] hover:rotate-0 hover:z-60  overflow-hidden` }>
                <img className="rounded object-cover  "  src={ph.url} alt="" />
            </div>
        ))
    }
    </div>
    <div className="flex flex-col gap-8 items-start">
<h1 className="text-4xl font-bold ">Capturing Life's Beautiful Moments</h1>
<p className="text-xl font-normal text-gray-700">Professional Photography Services</p>
<Link to="/gallery/nature" className="p-3 px-5  bg-black rounded text-white text-md">View Gallery</Link>
    </div>
</div>
</>
  )
}

export default Home
