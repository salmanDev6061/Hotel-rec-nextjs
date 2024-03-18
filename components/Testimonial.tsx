interface TestimonialProps {
    author: string;
    content: string;
  }
  
  const Testimonial: React.FC<TestimonialProps> = ({ author, content }) => {
    return (
      <div className="bg-white rounded-md shadow-md p-4 mb-4 w-[200px] ">
        <p className="text-gray-600 italic mb-2">"{content}"</p>
        <p className="text-gray-700 font-semibold">- {author}</p>
      </div>
    );
  };
  
  export default Testimonial;
  