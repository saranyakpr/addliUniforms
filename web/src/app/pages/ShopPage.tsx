import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { SlidersHorizontal, ChevronDown, X, Search, PackageOpen } from 'lucide-react';
import { products, categories } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'All';

  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategory !== 'All') {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'featured':
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return filtered;
  }, [selectedCategory, sortBy, searchQuery]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Page header */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-1.5 block">
                Browse
              </span>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                Shop Collection
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base mt-1">
                Premium uniforms designed for every team and industry.
              </p>
            </div>
            {/* Search */}
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-background border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
          </div>

          {/* Category pills — horizontal scroll */}
          <div className="flex gap-2 mt-6 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-secondary text-foreground hover:bg-secondary/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* ─── Sidebar ─── */}
          <aside className="lg:w-56 xl:w-60 shrink-0">
            {/* Mobile filter toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center justify-between w-full bg-white border border-border px-4 py-2.5 rounded-xl text-sm font-medium mb-4"
            >
              <span className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`}
              />
            </button>

            <div
              className={`${
                showFilters ? 'block' : 'hidden'
              } lg:block space-y-6`}
            >
              {/* Price Range */}
              <div className="bg-white rounded-2xl border border-border p-4 sm:p-5">
                <h3 className="font-semibold text-sm text-foreground mb-3">
                  Price Range
                </h3>
                <div className="space-y-2.5">
                  {['Under $500', '$500 – $1000', '$1000 – $1500', 'Over $1500'].map(
                    (range) => (
                      <label
                        key={range}
                        className="flex items-center gap-2.5 cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          className="w-4 h-4 rounded border-border text-primary focus:ring-primary/30 accent-primary"
                        />
                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                          {range}
                        </span>
                      </label>
                    )
                  )}
                </div>
              </div>

              {/* Size */}
              <div className="bg-white rounded-2xl border border-border p-4 sm:p-5">
                <h3 className="font-semibold text-sm text-foreground mb-3">
                  Size
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                    <button
                      key={size}
                      className="min-w-[40px] px-3 py-1.5 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* ─── Products ─── */}
          <div className="flex-1 min-w-0">
            {/* Sort bar */}
            <div className="flex items-center justify-between mb-5">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{filteredProducts.length}</span>{' '}
                {filteredProducts.length === 1 ? 'product' : 'products'}
                {selectedCategory !== 'All' && (
                  <span className="inline-flex items-center gap-1 ml-2 bg-primary/10 text-primary text-xs font-medium px-2 py-0.5 rounded-full">
                    {selectedCategory}
                    <button
                      onClick={() => handleCategoryChange('All')}
                      className="hover:bg-primary/20 rounded-full p-0.5 transition-colors"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-4">
                  <PackageOpen className="w-7 h-7 text-muted-foreground" />
                </div>
                <p className="text-foreground font-semibold mb-1">No products found</p>
                <p className="text-sm text-muted-foreground max-w-xs">
                  Try adjusting your filters or search to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    handleCategoryChange('All');
                    setSearchQuery('');
                  }}
                  className="mt-4 text-sm font-semibold text-primary hover:underline underline-offset-4"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
