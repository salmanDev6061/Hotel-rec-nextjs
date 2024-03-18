import Image from "next/image";
import imageHotel from '../components/images/hotel-room.png'

interface RoomItemProps {
    name: string;
    description: string;
    price: number;
    image: string;
  }
  
  const RoomItem: React.FC<RoomItemProps> = ({ name, description, price, image }) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <Image src={imageHotel} alt={name} className="w-full h-48 object-cover mb-4 rounded-lg" />
        <h2 className="text-lg font-semibold mb-2">{name}</h2>
        <p className="text-gray-600 mb-2">{description}</p>
        <p className="text-gray-700 font-semibold">${price} per night</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Book Now</button>
      </div>
    );
  };
  
  export default RoomItem;
  