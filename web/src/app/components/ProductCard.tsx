import { Link } from 'react-router';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="group bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg hover:shadow-black/[0.06] transition-all duration-300">
      {/* Image */}
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden aspect-[3/4] bg-secondary">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {discount > 0 && (
            <span className="absolute top-2.5 left-2.5 bg-red-500 text-white text-[11px] font-semibold px-2 py-0.5 rounded">
              -{discount}%
            </span>
          )}
        </div>
      </Link>

      {/* Info */}
      <div className="p-3 sm:p-4">
        <p className="text-[11px] sm:text-xs font-medium text-accent uppercase tracking-wide mb-1">
          {product.category}
        </p>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-sm sm:text-base text-foreground leading-snug mb-1 group-hover:text-accent transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2 hidden sm:block">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-sm text-foreground">${product.price}</span>
            {product.originalPrice && (
              <span className="text-xs text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div>

        <Link
          to={`/product/${product.id}`}
          className="mt-3 w-full inline-flex items-center justify-center bg-accent text-white text-xs sm:text-sm font-semibold py-2 rounded-lg hover:bg-accent/90 transition-colors"
        >
          View Product Details
        </Link>
      </div>
    </div>
  );
}
