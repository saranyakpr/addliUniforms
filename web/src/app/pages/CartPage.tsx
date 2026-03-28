import { useNavigate } from 'react-router';
import { Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function CartPage() {
  const navigate = useNavigate();
  const { items, removeFromCart, updateQuantity, total } = useCart();

  const shippingCost = total > 500 ? 0 : 25;
  const tax = total * 0.08;
  const finalTotal = total + shippingCost + tax;

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-4">
            <ShoppingBag className="w-9 h-9 text-muted-foreground" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground text-sm mb-6 max-w-xs mx-auto">
            Discover our premium collection and add items to your cart.
          </p>
          <button
            onClick={() => navigate('/shop')}
            className="bg-primary text-white px-7 py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 text-sm font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Continue Shopping</span>
        </button>

        <h1 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-8">
          Shopping Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Items */}
          <div className="lg:col-span-2 space-y-3">
            {items.map((item) => (
              <div
                key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                className="bg-white border border-border rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row gap-4"
              >
                <div className="w-full sm:w-28 h-36 sm:h-28 rounded-xl overflow-hidden bg-secondary shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 flex flex-col min-w-0">
                  <div className="flex justify-between gap-2 mb-1">
                    <div className="min-w-0">
                      <h3 className="font-semibold text-foreground truncate">{item.name}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Size: {item.selectedSize} &middot; Color: {item.selectedColor}
                      </p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="w-8 h-8 shrink-0 rounded-lg flex items-center justify-center text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 border border-border rounded-lg hover:bg-secondary transition-colors text-sm"
                      >
                        -
                      </button>
                      <span className="font-semibold w-7 text-center text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 border border-border rounded-lg hover:bg-secondary transition-colors text-sm"
                      >
                        +
                      </button>
                    </div>
                    <p className="font-bold text-foreground">${item.price * item.quantity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-border rounded-2xl p-5 sm:p-6 sticky top-20">
              <h2 className="text-lg font-bold text-foreground mb-5">Order Summary</h2>

              <div className="space-y-3 text-sm mb-5">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium text-foreground">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium text-foreground">
                    {shippingCost === 0 ? (
                      <span className="text-primary font-semibold">FREE</span>
                    ) : (
                      `$${shippingCost.toFixed(2)}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax (8%)</span>
                  <span className="font-medium text-foreground">${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-border pt-3">
                  <div className="flex justify-between">
                    <span className="font-bold text-foreground">Total</span>
                    <span className="font-bold text-foreground text-lg">${finalTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {total < 500 && (
                <div className="bg-primary/5 border border-primary/15 rounded-xl p-3 mb-5 text-xs">
                  <p className="text-primary font-medium">
                    Add ${(500 - total).toFixed(2)} more for free shipping!
                  </p>
                </div>
              )}

              <button className="w-full bg-primary text-white py-3.5 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors mb-2.5">
                Proceed to Checkout
              </button>

              <button
                onClick={() => navigate('/shop')}
                className="w-full border border-border py-3.5 rounded-xl font-semibold text-sm hover:bg-secondary transition-colors"
              >
                Continue Shopping
              </button>

              <div className="mt-5 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground font-medium mb-2">We Accept</p>
                <div className="flex gap-2">
                  {['Visa', 'Mastercard', 'Amex'].map((card) => (
                    <div
                      key={card}
                      className="border border-border rounded-lg px-3 py-1.5 text-xs text-muted-foreground"
                    >
                      {card}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
