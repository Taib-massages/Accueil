import { Footer } from "flowbite-react";
import { BsInstagram } from "react-icons/bs";
import { Link } from 'react-router-dom';
// import { FaMapMarkerAlt } from 'react-icons/fa';

export function FooterComponent() {
  return (
    <Footer container className="bg-[#DCD6AE] shadow-inner">
      <div className="w-full">
      <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start gap-8 w-full">
          {/* Première colonne - Logo */}
        <div className="flex justify-center md:justify-start">
          <Link to="/" className="text-center md:text-left">
          <h1 className="text-4xl font-bold text-black">TAIB</h1>
          <p className="text-lg text-black">masseur professionnel</p>
          </Link>
        </div>
          {/* Deuxième colonne - Adresse */}
        {/*   <div className="flex flex-col items-center justify-center">
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
          </div> */}

          {/* Troisième colonne - Liens */}
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <Footer.Title title="Mes Prestations" />
              <Footer.LinkGroup col>
                <Footer.Link as={Link} to="/prestations" className="hover:text-gray-700">Prestations et prix</Footer.Link>
                <Footer.Link as={Link} to="/pilates" className="hover:text-gray-700">Pilates Mat</Footer.Link>
                <Footer.Link as={Link} to="/cadeaux" className="hover:text-gray-700">Bons Cadeaux</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Contact" />
              <Footer.LinkGroup col>
                <Footer.Link href="tel:0682646477" className="hover:text-gray-700">06 82 64 64 77</Footer.Link>
                <Footer.Link href="mailto:El_taib@hotmail.com" className="hover:text-gray-700">El_taib@hotmail.com</Footer.Link>
                <Footer.Link as={Link} to="/Contact" className="hover:text-gray-700">Me contacter</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>

        <Footer.Divider className="my-2" />
        
        {/* Section copyright et réseaux sociaux */}
        <div className="w-full flex flex-col items-center justify-center gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Footer.Copyright
            as={Link}
            to="/"
            by=" Taib Massages"
            year={2025}
          />
          <div className="mt-1 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon 
              href="https://www.instagram.com/taib_massages/" 
              icon={BsInstagram}
              target="_blank"
              className="text-2xl hover:text-gray-700 transition-colors duration-200"
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterComponent;