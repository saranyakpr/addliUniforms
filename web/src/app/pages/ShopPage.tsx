import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { Search, ChevronDown, X, PackageOpen } from 'lucide-react';
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <h1 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight mb-1">
            Our Uniform Collections
          </h1>
          <p className="text-muted-foreground text-sm">
            Browse our full range of professional uniforms.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* ─── Sidebar ─── */}
          <aside className="lg:w-52 xl:w-56 shrink-0">
            {/* Mobile toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center justify-between w-full bg-white border border-border px-4 py-2.5 rounded-lg text-sm font-medium mb-4"
            >
              <span>Filters</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>

            <div className={`${showFilters ? 'block' : 'hidden'} lg:block space-y-4`}>
              {/* Search */}
              <div className="bg-white rounded-lg border border-border p-3">
                <div className="flex items-center gap-2">
                  <Search className="w-4 h-4 text-muted-foreground shrink-0" />
                  <input
                    type="text"
                    placeholder="Search by name or code"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent text-sm w-full focus:outline-none placeholder:text-muted-foreground"
                  />
                </div>
              </div>

              {/* Category */}
              <div className="bg-white rounded-lg border border-border p-3">
                <h3 className="font-semibold text-sm text-foreground mb-2">Category</h3>
                <div className="space-y-1">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      className={`block w-full text-left px-2.5 py-1.5 rounded text-sm transition-colors ${
                        selectedCategory === category
                          ? 'bg-accent/10 text-accent font-medium'
                          : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size */}
              <div className="bg-white rounded-lg border border-border p-3">
                <h3 className="font-semibold text-sm text-foreground mb-2">Size</h3>
                <div className="flex flex-wrap gap-1.5">
                  {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                    <button
                      key={size}
                      className="min-w-[36px] px-2.5 py-1 border border-border rounded text-xs text-muted-foreground hover:border-accent hover:text-accent transition-colors"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color */}
              <div className="bg-white rounded-lg border border-border p-3">
                <h3 className="font-semibold text-sm text-foreground mb-2">Color</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: 'Navy', color: 'bg-blue-900' },
                    { name: 'White', color: 'bg-white border-2' },
                    { name: 'Black', color: 'bg-black' },
                    { name: 'Grey', color: 'bg-gray-400' },
                    { name: 'Red', color: 'bg-red-600' },
                  ].map((c) => (
                    <button
                      key={c.name}
                      title={c.name}
                      className={`w-6 h-6 rounded-full ${c.color} hover:ring-2 hover:ring-accent hover:ring-offset-1 transition-all`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* ─── Products ─── */}
          <div className="flex-1 min-w-0">
            {/* Sort */}
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{filteredProducts.length}</span>{' '}
                products
                {selectedCategory !== 'All' && (
                  <span className="inline-flex items-center gap-1 ml-2 bg-accent/10 text-accent text-xs font-medium px-2 py-0.5 rounded">
                    {selectedCategory}
                    <button
                      onClick={() => handleCategoryChange('All')}
                      className="hover:bg-accent/20 rounded-full p-0.5"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-1.5 bg-white border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-3">
                  <PackageOpen className="w-6 h-6 text-muted-foreground" />
                </div>
                <p className="text-foreground font-semibold mb-1">No products found</p>
                <p className="text-sm text-muted-foreground max-w-xs">
                  Try adjusting your filters or search.
                </p>
                <button
                  onClick={() => {
                    handleCategoryChange('All');
                    setSearchQuery('');
                  }}
                  className="mt-3 text-sm font-semibold text-accent hover:underline"
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
