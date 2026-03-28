import { Link } from 'react-router';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Link
      to={`/product/${product.id}`}
      className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg hover:shadow-black/[0.06] transition-all duration-300"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[3/4] bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {discount > 0 && (
            <span className="bg-red-500 text-white text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-lg">
              -{discount}%
            </span>
          )}
          {product.featured && (
            <span className="bg-primary text-white text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-lg">
              Featured
            </span>
          )}
        </div>
        {/* Quick cart button */}
        <div className="absolute bottom-3 right-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white shadow-md flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors">
            <ShoppingCart className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-3 sm:p-4">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[11px] sm:text-xs font-medium text-primary uppercase tracking-wide">
            {product.category}
          </span>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-accent text-accent" />
            <span className="text-xs sm:text-sm font-medium text-foreground">{product.rating}</span>
            <span className="text-[11px] sm:text-xs text-muted-foreground">({product.reviews})</span>
          </div>
        </div>

        <h3 className="font-semibold text-sm sm:text-base text-foreground leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-1">
          {product.name}
        </h3>

        <div className="flex items-center gap-2">
          <span className="font-bold text-sm sm:text-base text-foreground">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-xs sm:text-sm text-muted-foreground line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
