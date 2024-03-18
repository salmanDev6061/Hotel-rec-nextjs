import Image from "next/image";
import Header from "../../components/Header"
import { Search } from 'react-feather';
import HotelItem from '../../components/HotelItem';
import Footer from '../../components/Footer'

const hotels = [
  { id: 1, name: 'Hotel A', description: 'Description of Hotel A.', price: 100, image: '../../components/images/hotel-room.png'},
  { id: 2, name: 'Hotel B', description: 'Description of Hotel B.', price: 120 ,image: '../../components/images/hotel-room.png'},
  { id: 3, name: 'Hotel C', description: 'Description of Hotel C.', price: 150 ,image: '../../components/images/hotel-room.png'},
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header/>
      <div className="container mx-auto px-4 py-8 text-center pt-16">
      <h1 className="text-3xl font-bold mb-4">Welcome to Our Hotel Booking Service</h1>
      <p className="text-lg text-gray-700 mb-8">
        Book your dream hotel room hassle-free with our modern and efficient booking platform. We provide top-notch service
        to ensure you have a comfortable stay.
      </p>
      <form className="max-w-md mx-auto flex justify-between">
        <input
          type="text"
          placeholder="Enter your destination..."
          className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2">
          <Search />
        </button>
      </form>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {hotels.map((hotel) => (
          <HotelItem key={hotel.id} name={hotel.name} description={hotel.description} price={hotel.price}image={hotel.image} />
        ))}
      </div>
      <Footer/>
    </main>
  );
}
