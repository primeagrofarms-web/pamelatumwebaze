import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground mt-20">
    <div className="memorial-container py-16">
      <div className="text-center mb-10">
        <p className="font-serif text-2xl italic mb-2 text-primary-foreground">
          "Her legacy lives in the students she guided."
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm opacity-80">
        <div>
          <h4 className="font-semibold mb-3 text-primary-foreground opacity-100">Quick Links</h4>
          <div className="flex flex-col gap-2">
            <Link to="/" className="hover:opacity-100 transition-opacity">Home</Link>
            <Link to="/about" className="hover:opacity-100 transition-opacity">About Pamela</Link>
            <Link to="/tributes" className="hover:opacity-100 transition-opacity">Memories & Tributes</Link>
            <Link to="/investigation" className="hover:opacity-100 transition-opacity">Investigation Updates</Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-primary-foreground opacity-100">More</h4>
          <div className="flex flex-col gap-2">
            <Link to="/media" className="hover:opacity-100 transition-opacity">Media & Articles</Link>
            <Link to="/submit-tribute" className="hover:opacity-100 transition-opacity">Submit a Tribute</Link>
            <Link to="/prayer" className="hover:opacity-100 transition-opacity">Prayer & Reflection</Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-primary-foreground opacity-100">Contact</h4>
          <p>memorial@pamelatumwebaze.org</p>
          <p className="mt-2">Uganda Christian University</p>
          <p>Mukono, Uganda</p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center text-sm opacity-50">
        &copy; 2026 Pamela Tumwebaze Memorial. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
