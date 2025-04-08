import { Footer } from "flowbite-react";
import { BsInstagram } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';

export function FooterComponent() {
  return (
    <Footer container className="bg-[#f6e6d1] shadow-inner">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Première colonne - Logo */}
          <div className="flex justify-center md:justify-start ml-4 mt-8">
            <Footer.Brand
              as={Link}
              to="/"
              src={`${process.env.REACT_APP_PUBLIC_URL}/images/Logo.webp`} 
              alt="Taib-massages, spécialiste bien-être"
              name="Taib-massages"
              className="flex items-center object-cover"
              theme={{
                img: "h-32 w-32 rounded-full mr-3"
              }}
            />
          </div>

          {/* Deuxième colonne - Adresse */}
          <div className="flex flex-col items-center justify-center">
            <a 
              href="https://www.google.com/maps/place/18e+Arrondissement,+75018+Paris/@48.8919095,2.2707544,13z/data=!3m1!4b1!4m6!3m5!1s0x47e66e60b796a965:0x50b82c368941b60!8m2!3d48.8915575!4d2.3496507!16zL20vMDFyNXN0?hl=fr&entry=ttu&g_ep=EgoyMDI1MDMyMy4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center text-gray-700 hover:text-[#80a880] transition-colors"
            >
              <FaMapMarkerAlt className="text-3xl mb-2" />
              <div className="text-center">
                <p className="font-semibold text-lg">Taib Massages</p>
                <p>Paris 18e</p>
                <p>75018 Paris</p>
                <p className="mt-2 text-sm text-[#80a880] font-bold">Ouvrir dans Google Maps</p>
              </div>
            </a>
          </div>

          {/* Troisième colonne - Liens */}
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <Footer.Title title="Mes Prestations" />
              <Footer.LinkGroup col>
                <Footer.Link as={Link} to="/prestations">Prestations et prix</Footer.Link>
                <Footer.Link as={Link} to="/pilates">Pilates Mat</Footer.Link>
                <Footer.Link as={Link} to="/cadeaux">Bons Cadeaux</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Contact" />
              <Footer.LinkGroup col>
                <Footer.Link href="tel:0682646477">06 82 64 64 77</Footer.Link>
                <Footer.Link as={Link} to="/Contact">Me contacter</Footer.Link>
              </Footer.LinkGroup>
            </div>
            {/* <div>
              <Footer.Title title="Légal" />
              <Footer.LinkGroup col>
                <Footer.Link as={Link} to="/mentions-legales">Mentions légales</Footer.Link>
                <Footer.Link as={Link} to="/cgv">CGV</Footer.Link>
              </Footer.LinkGroup>
            </div> */}
          </div>
        </div>

        <Footer.Divider className="my-6" />
        
        {/* Section copyright et réseaux sociaux */}
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            as={Link}
            to="/"
            by=" Taib Massages"
            year={2025}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon 
              href="https://www.instagram.com/taib_massages/" 
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