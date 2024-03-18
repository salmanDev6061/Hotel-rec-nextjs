import Testimonial from '../../components/Testimonial';
import Link from 'next/link';

export default function About() {
    const testimonials = [
        { id: 1, author: 'John Doe', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 2, author: 'Jane Smith', content: 'Vivamus ac ligula id mauris aliquam scelerisque.' },
        { id: 3, author: 'Alice Johnson', content: 'Nullam et lectus nec eros varius luctus.' },
      ];
  
    return (
    <section>
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-gray-700 mt-14">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, consectetur officiis inventore perferendis pariatur in? Beatae quae incidunt sapiente labore nulla facere dolore consequatur reiciendis impedit quisquam odit, perspiciatis quaerat?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, explicabo dolorum, a magnam, natus eligendi unde accusantium amet nobis saepe ea perspiciatis non? Incidunt omnis dolorem esse commodi quis enim!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero numquam commodi, veritatis delectus eius, pariatur quo, maxime nostrum cupiditate repellat est at repellendus officiis mollitia. Voluptatibus cupiditate nemo nobis nisi?
            
          </p>
      </div>
      <h1 className="text-2xl font-bold mb-4 text-center">Customer Feedback</h1>
      <div className="container mx-auto px-4 py-8 text-center flex justify-evenly center">
      {/* Your existing content */}
      {testimonials.map((testimonial) => (
        <Testimonial key={testimonial.id} author={testimonial.author} content={testimonial.content} />
      ))}
    </div>
    <div className='flex justify-center'>
        
    <Link href="/home" 
    className="bg-blue-500 text-white px-4 py-2 rounded mt-4 inline-block hover:bg-blue-600 align-center">
            GO BACK
    </Link>
    </div>
      </section>
    );
  }