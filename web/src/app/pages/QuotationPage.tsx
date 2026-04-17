import React from 'react'
import { useCart } from '../context/CartContext';

const QuotationPage = () => {

    const { items, removeFromCart, updateQuantity, total } = useCart();
    console.log('items', items);

    return (
        <div>
            <div className="p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Quotation Request</h1>

                {/* Product Summary */}
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-gray-700">Product Summary</h2>
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">In Stock</span>
                    </div>
                    {/* Cart Items */}
                    {items.length > 0 ? (
                        <div className="space-y-4 mb-4">
                            {items.map((item) => (
                                <div key={item.id} className="flex gap-4 p-3 bg-white rounded-lg border border-gray-200">
                                    <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                                        {item.image ? (
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-lg" />
                                        ) : (
                                            <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        )}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-base font-bold text-gray-900 truncate">{item.name}</h3>
                                                <p className="text-sm text-gray-500 truncate">{item.description || 'Premium quality product'}</p>
                                                <div className="flex items-center gap-2 mt-1">
                                                    {item.category && (
                                                        <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded">
                                                            {item.category}
                                                        </span>
                                                    )}
                                                    {/* {item.sku && (
                                                        <span className="text-xs text-gray-400">SKU: {item.sku}</span>
                                                    )} */}
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="ml-2 p-1 text-gray-400 hover:text-red-500 transition-colors"
                                                title="Remove item"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="flex items-center justify-between mt-2">
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                                    className="w-7 h-7 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-100"
                                                >
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                                    </svg>
                                                </button>
                                                <span className="w-8 text-center font-medium text-gray-700">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="w-7 h-7 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-100"
                                                >
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="text-right">
                                                <span className="text-lg font-bold text-indigo-600">
                                                    ${(item.price * item.quantity).toFixed(2)}
                                                </span>
                                                {item.quantity > 1 && (
                                                    <p className="text-xs text-gray-400">${item.price.toFixed(2)} each</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-8 mb-4">
                            <svg className="w-16 h-16 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <p className="text-gray-500">Your cart is empty</p>
                            <p className="text-sm text-gray-400 mt-1">Add items to your cart to request a quotation</p>
                        </div>
                    )}
                </div>

                <form className="space-y-4 mx-5   "
                    action="https://formsubmit.co/addliuniforms@gmail.com"
                    method="POST"
                    encType="multipart/form-data"
                >

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                            <input type="text" name="fullNmae" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="John Doe" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                            <input type="email" name="email" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="john@example.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                            <input type="tel" name="phone" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="1234567890" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Company Name (optional)</label>
                            <input type="text" name="companyName" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Company Inc." />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Required Delivery Date *</label>
                            <input
                                type="date"
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>


                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Address Line 1 *</label>
                        <input type="text" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Street address" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Address Line 2</label>
                        <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Apartment, suite, etc." />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                            <input type="text" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="City" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">State *</label>
                            <select required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option value="">Select State</option>
                                <option value="andhra-pradesh">Andhra Pradesh</option>
                                <option value="arunachal-pradesh">Arunachal Pradesh</option>
                                <option value="assam">Assam</option>
                                <option value="bihar">Bihar</option>
                                <option value="chhattisgarh">Chhattisgarh</option>
                                <option value="goa">Goa</option>
                                <option value="gujarat">Gujarat</option>
                                <option value="haryana">Haryana</option>
                                <option value="himachal-pradesh">Himachal Pradesh</option>
                                <option value="jharkhand">Jharkhand</option>
                                <option value="karnataka">Karnataka</option>
                                <option value="kerala">Kerala</option>
                                <option value="madhya-pradesh">Madhya Pradesh</option>
                                <option value="maharashtra">Maharashtra</option>
                                <option value="manipur">Manipur</option>
                                <option value="meghalaya">Meghalaya</option>
                                <option value="mizoram">Mizoram</option>
                                <option value="nagaland">Nagaland</option>
                                <option value="odisha">Odisha</option>
                                <option value="punjab">Punjab</option>
                                <option value="rajasthan">Rajasthan</option>
                                <option value="sikkim">Sikkim</option>
                                <option value="tamil-nadu">Tamil Nadu</option>
                                <option value="telangana">Telangana</option>
                                <option value="tripura">Tripura</option>
                                <option value="uttar-pradesh">Uttar Pradesh</option>
                                <option value="uttarakhand">Uttarakhand</option>
                                <option value="west-bengal">West Bengal</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Country *</label>
                            <select required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option value="">Select Country</option>
                                <option value="india">India</option>
                                <option value="usa">United States</option>
                                <option value="uk">United Kingdom</option>
                                <option value="canada">Canada</option>
                                <option value="australia">Australia</option>
                                <option value="germany">Germany</option>
                                <option value="france">France</option>
                                <option value="japan">Japan</option>
                                <option value="singapore">Singapore</option>
                                <option value="uae">United Arab Emirates</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Pincode *</label>
                        <input type="number" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="123456" />
                    </div>

                    <div className="grid grid-cols-1 gap-2">
                        <div className="">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Special Instructions</label>
                            <textarea rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Any specific requirements or customizations..." />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Upload Design <span className="text-gray-400 font-normal">(optional)</span>
                            </label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:bg-gray-50 transition-colors">
                                <div className="space-y-1 text-center">
                                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <div className="flex text-sm text-gray-600 justify-center">
                                        <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none">
                                            <span>Upload a file</span>
                                            <input id="file-upload" name="file-upload" type="file" className="sr-only" accept=".jpg,.jpeg,.png,.pdf,.ai,.psd,.svg" />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs text-gray-500">PNG, JPG, PDF, AI, PSD, SVG up to 10MB</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200 flex justify-center">
                        <button
                            type="submit"
                            className="w-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            Submit Quotation Request
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default QuotationPage