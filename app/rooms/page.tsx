import RoomItem from '../../components/HotelItem';
import image from '../../components/images/hotel-room.png'
import Link from 'next/link';

const Rooms: React.FC = () => {
  // Mock data for rooms (replace with actual data)
  const rooms = [
    { id: 1, name: 'Room A', description: 'Description of Room A.', price: 100 , image: '../../components/images/hotel-room.png'},
    { id: 2, name: 'Room B', description: 'Description of Room B.', price: 120 , image: '../../components/images/hotel-room.png'},
    { id: 3, name: 'Room C', description: 'Description of Room C.', price: 150, image: '../../components/images/hotel-room.png' },
    { id: 3, name: 'Room D', description: 'Description of Room D.', price: 130 , image: '../../components/images/hotel-room.png'},
    { id: 4, name: 'Room E', description: 'Description of Room E.', price: 160 , image: '../../components/images/hotel-room.png'},
    { id: 5, name: 'Room F', description: 'Description of Room F.', price: 190 , image: '../../components/images/hotel-room.png'},
    { id: 6, name: 'Room G', description: 'Description of Room G.', price: 200 , image: '../../components/images/hotel-room.png'},
    { id: 7, name: 'Room H', description: 'Description of Room H.', price: 140 , image: '../../components/images/hotel-room.png'},
    { id: 8, name: 'Room I', description: 'Description of Room I.', price: 90 , image: '../../components/images/hotel-room.png'},
  ];

  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Explore Our Rooms</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {rooms.map((room) => (
          <RoomItem key={room.id} name={room.name} description={room.description} price={room.price} image={room.image} />
        ))}
      </div>
      <Link href="/home" className="bg-blue-500 text-white px-4 py-2 rounded mt-4 ">
            GO BACK
      </Link>
    </div>
  );
};

export default Rooms;
