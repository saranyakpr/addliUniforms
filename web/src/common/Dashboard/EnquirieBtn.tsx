import { Button, Drawer } from '@mantine/core'
import HomePageForm from '../drawerContents/HomePageForm'
import { useDisclosure } from '@mantine/hooks';
import { FiLayers } from "react-icons/fi";

const KEYFRAMES = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap');

  @keyframes floatBeat {
    0%,100% { transform: translateY(-50%) rotate(90deg) translateX(0); opacity:1; }
    25%     { transform: translateY(-52%) rotate(90deg) translateX(-3px) scale(1.1); opacity:.95; }
    75%     { transform: translateY(-48%) rotate(90deg) translateX(-1px) scale(1.05); opacity:.9; }
  }
  @keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position:  200% center; }
  }

  .animate-floatBeat { animation: floatBeat 2s ease-in-out infinite; }

  .shimmer-text {
    background: linear-gradient(90deg, #1e1e1e 30%, #888 50%, #1e1e1e 70%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shimmer 2s linear infinite;
  }
  .font-syne { font-family: 'Syne', sans-serif; }
`;

const EnquirieBtn = () => {
    const [opened, { open, close }] = useDisclosure(false);

    const handleMouseEnter = () => {
        setTimeout(() => {
            open();
        }, 200); // 200ms delay
    };
    return (
        <>
            <style>{KEYFRAMES}</style>
            <div className="">
                <div className="fixed -right-5 top-1/2 z-50 rotate-90">
                    <Button leftSection={<FiLayers className="text-black" size={15} />}
                        onMouseEnter={handleMouseEnter}
                        className="animate-floatBeat cursor-pointer bg-white! text-[#1a1a1a]! px-5 py-2 rounded-full!
  border-2! border-[#1a1a1a]! shadow-[3px_3px_0_#1a1a1a]! text-[11px] font-extrabold! tracking-[0.07em]! font-syne! rotate-90!"  onClick={open} >
                        <span className="shimmer-text">Drawer</span>
                    </Button>
                </div>
            </div>
            <Drawer position='right' overlayProps={{ backgroundOpacity: 0.5, blur: 4 }} size="lg"
                opened={opened} onClose={close} title="">
                <HomePageForm />
            </Drawer>
        </>
    )
}

export default EnquirieBtn