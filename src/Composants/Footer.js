import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';

export function FooterComponent() {
  return (
    <Footer container className="bg-gray-100 shadow-inner">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Première colonne - Logo */}
          <div className="flex justify-center md:justify-start ml-4 mt-8">
            <Footer.Brand
              as={Link}
              to="/"
              src={`${process.env.PUBLIC_URL}/images/Logo.webp`} 
              alt="Organiquement Votre Sorigny Logo"
              name="Organiquement Votre Sorigny"
              className="flex items-center"
              theme={{
                img: "h-20 w-20 rounded-full mr-3"
              }}
            />
          </div>

          {/* Deuxième colonne - Adresse */}
          <div className="flex flex-col items-center justify-center">
            <a 
              href="https://maps.google.com/maps?q=Organiquement+Votre+Le+Goret+37250+Sorigny" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center text-gray-700 hover:text-green-600 transition-colors"
            >
              <FaMapMarkerAlt className="text-3xl mb-2" />
              <div className="text-center">
                <p className="font-semibold text-lg">Organiquement Votre</p>
                <p>Le Goret</p>
                <p>37250 Sorigny</p>
                <p className="mt-2 text-sm text-green-600">Ouvrir dans Google Maps</p>
              </div>
            </a>
          </div>

          {/* Troisième colonne - Liens */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Footer.Title title="Nos Produits" />
              <Footer.LinkGroup col>
                <Footer.Link as={Link} to="/CBD">Produits CBD</Footer.Link>
                <Footer.Link as={Link} to="/Spiritueux">Spiritueux</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Contact" />
              <Footer.LinkGroup col>
                <Footer.Link href="tel:0970163255">09 70 16 32 55</Footer.Link>
                <Footer.Link as={Link} to="/Contact">Nous contacter</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Légal" />
              <Footer.LinkGroup col>
                <Footer.Link as={Link} to="/mentions-legales">Mentions légales</Footer.Link>
                <Footer.Link as={Link} to="/cgv">CGV</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>

        <Footer.Divider className="my-6" />
        
        {/* Section copyright et réseaux sociaux */}
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            as={Link}
            to="/"
            by="Organiquement Votre Sorigny"
            year={2024}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon 
              href="https://www.facebook.com/organiquementvotre.sorigny" 
              icon={BsFacebook}
              target="_blank"
            />
            <Footer.Icon 
              href="https://www.instagram.com/explore/locations/101489428970039/organiquement-votre-sorigny/" 
              icon={BsInstagram}
              target="_blank"
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterComponent;