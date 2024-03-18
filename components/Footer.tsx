const Footer: React.FC = () => {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>About Us</li>
                <li>Our Services</li>
                <li>Contact Us</li>
                {/* Add more links as needed */}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                {/* Add more links as needed */}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                {/* Add more social media links as needed */}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
              <p>Subscribe to our newsletter for updates.</p>
              {/* Add newsletter subscription form or link */}
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  