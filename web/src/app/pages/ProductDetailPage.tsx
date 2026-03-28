import { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Star, Truck, Shield, ArrowLeft, Check } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';
import { ProductCard } from '../components/ProductCard';

// Generate gallery views from the main product image
function getGalleryImages(mainImage: string) {
  return [
    { label: 'Main', src: mainImage },
    { label: 'Front View', src: mainImage + '&crop=top&h=800' },
    { label: 'Back View', src: mainImage + '&crop=bottom&h=800' },
    { label: 'Side View', src: mainImage + '&crop=left&h=800' },
  ];
}

export function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === id);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Product not found</h2>
          <button
            onClick={() => navigate('/shop')}
            className="bg-accent text-white px-6 py-3 rounded-xl font-semibold text-sm"
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  const gallery = getGalleryImages(product.image);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Please select a size');
      return;
    }
    if (!selectedColor) {
      toast.error('Please select a color');
      return;
    }

    for (let i = 0; i < quantity; i++) {
      addToCart(product, selectedSize, selectedColor);
    }

    toast.success('Added to cart!');
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <button
            onClick={() => navigate('/')}
            className="hover:text-foreground transition-colors"
          >
            Home
          </button>
          <span>/</span>
          <button
            onClick={() => navigate('/shop')}
            className="hover:text-foreground transition-colors"
          >
            Products
          </button>
          <span>/</span>
          <span className="text-foreground font-medium truncate">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* ─── Image Gallery ─── */}
          <div>
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden bg-secondary aspect-[3/4] mb-3">
              <img
                src={gallery[activeImage].src}
                alt={`${product.name} - ${gallery[activeImage].label}`}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              {discount > 0 && (
                <span className="absolute top-3 left-3 bg-red-500 text-white px-2.5 py-1 rounded-lg text-xs font-semibold">
                  Save {discount}%
                </span>
              )}
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`relative rounded-xl overflow-hidden aspect-square bg-secondary border-2 transition-all ${
                    activeImage === i
                      ? 'border-accent ring-1 ring-accent/30'
                      : 'border-transparent hover:border-border'
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.label}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-0 inset-x-0 bg-black/50 text-white text-[9px] sm:text-[10px] text-center py-0.5 font-medium">
                    {img.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* ─── Product Info ─── */}
          <div className="flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-2">
              {product.category}
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-3">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-amber-400 text-amber-400'
                        : 'text-border'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <div className="flex items-baseline gap-3 mb-5">
              <span className="text-2xl sm:text-3xl font-bold text-foreground">${product.price}</span>
              {product.originalPrice && (
                <span className="text-lg text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-7">
              {product.description}
            </p>

            {/* Color */}
            <div className="mb-5">
              <label className="block text-sm font-semibold text-foreground mb-2.5">
                Color: <span className="font-normal text-muted-foreground">{selectedColor || 'Select'}</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`relative px-4 py-2 border-2 rounded-xl text-sm font-medium transition-colors ${
                      selectedColor === color
                        ? 'border-accent bg-accent text-white'
                        : 'border-border hover:border-accent/40'
                    }`}
                  >
                    {color}
                    {selectedColor === color && (
                      <Check className="w-3.5 h-3.5 absolute top-1 right-1" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Size + Quantity row */}
            <div className="flex flex-col sm:flex-row gap-5 mb-7">
              <div className="flex-1">
                <label className="block text-sm font-semibold text-foreground mb-2.5">Size</label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[44px] px-4 py-2 border-2 rounded-xl text-sm font-medium transition-colors ${
                        selectedSize === size
                          ? 'border-accent bg-accent text-white'
                          : 'border-border hover:border-accent/40'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2.5">Quantity</label>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border border-border rounded-xl hover:bg-secondary transition-colors text-foreground"
                  >
                    -
                  </button>
                  <span className="font-semibold w-10 text-center text-foreground">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border border-border rounded-xl hover:bg-secondary transition-colors text-foreground"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-accent text-white py-3.5 rounded-xl font-semibold text-sm hover:bg-accent/90 transition-colors mb-4"
            >
              Add to Quotation — ${product.price * quantity}
            </button>

            {/* Trust */}
            <div className="border-t border-border pt-5 space-y-3 mt-2">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Truck className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Free Shipping</p>
                  <p className="text-xs text-muted-foreground">On orders over $500</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Shield className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Quality Guarantee</p>
                  <p className="text-xs text-muted-foreground">Premium materials & craftsmanship</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Suggested Products ─── */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 sm:mt-20 pt-10 border-t border-border">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight mb-2">
              Related Products
            </h2>
            <p className="text-muted-foreground text-sm mb-6">
              More options from the {product.category} collection you might like.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
