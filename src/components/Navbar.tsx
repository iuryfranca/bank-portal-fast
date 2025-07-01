import ButtonNavbar from '@/components/ButtonNavbar';
import Image from '@/components/Image';

export default function Navbar() {
  return (
    <div className="flex flex-col items-center justify-between p-4">
      <div className="flex w-full flex-row items-center">
        <ButtonNavbar />
      </div>

      <div className="flex w-full flex-row items-center">
        <div className="flex w-full flex-row items-center gap-4">
          <Image
            alt="Foto de Perfil"
            className="w-16"
            src="../../public/logo512.png"
          />
          <span>Iury França</span>
        </div>
      </div>
    </div>
  );
}
