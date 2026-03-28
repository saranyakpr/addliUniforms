import { RouterProvider } from 'react-router';
import { Toaster } from 'sonner';
import { CartProvider } from './context/CartContext';
import { router } from './routes';
import { useDisclosure } from '@mantine/hooks';
import { Drawer } from '@mantine/core';
import { MessageCircle, X } from 'lucide-react';
import HomePageForm from '../common/drawerContents/HomePageForm';

export default function App() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <CartProvider>
      <RouterProvider router={router} />
      <Toaster position="top-right" />

      {/* Floating CTA — consultation drawer trigger */}
      {!opened && (
        <button
          onClick={open}
          className="fixed bottom-5 right-5 z-40 flex items-center gap-2 bg-accent text-white pl-4 pr-5 py-3 rounded-full shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm font-semibold hidden sm:inline">Get a Quote</span>
        </button>
      )}

      {/* Consultation drawer */}
      <Drawer
        position="right"
        size="sm"
        overlayProps={{ backgroundOpacity: 0.3, blur: 4 }}
        opened={opened}
        onClose={close}
        title=""
        withCloseButton={false}
        styles={{
          content: { borderRadius: '1rem 0 0 1rem' },
          body: { padding: 0 },
          header: { display: 'none' },
        }}
      >
        <div className="p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-foreground">Request a Quote</h3>
            <button
              onClick={close}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <HomePageForm />
        </div>
      </Drawer>
    </CartProvider>
  );
}
