import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, selectIsAuthenticated, selectIsAdmin, selectUserInfo } from '../store/slices/userSlice';
import { clearCart, selectCartItemCount } from '../store/slices/cartSlice';
import { 
  MagnifyingGlassIcon, 
  ShoppingBagIcon, 
  UserIcon,
  Bars3Icon,
  XMarkIcon 
} from '@heroicons/react/24/outline';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  
  const cartItemCount = useSelector(selectCartItemCount);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isAdmin = useSelector(selectIsAdmin);
  const userInfo = useSelector(selectUserInfo);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearCart());
    navigate('/');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchKeyword.trim()) {
      navigate(`/?keyword=${searchKeyword.trim()}`);
      setSearchKeyword('');
      setIsSearchOpen(false);
    }
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setSearchKeyword('');
    }
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
              <span className="text-white font-serif font-bold text-xl">J</span>
            </div>
            <span className="text-2xl font-serif font-bold text-gray-900">Jewelry</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">Home</Link>
            <Link to="/?category=Rings" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">Rings</Link>
            <Link to="/?category=Necklaces" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">Necklaces</Link>
            <Link to="/?category=Bracelets" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">Bracelets</Link>
            <Link to="/?category=Earrings" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">Earrings</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button onClick={toggleSearch} className="p-2 text-gray-600 hover:text-primary-600 transition-colors duration-200">
              <MagnifyingGlassIcon className="w-5 h-5" />
            </button>

            <Link to="/cart" className="relative p-2 text-gray-600 hover:text-primary-600 transition-colors duration-200">
              <ShoppingBagIcon className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{cartItemCount}</span>
              )}
            </Link>

            {isAuthenticated ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 p-2 text-gray-600 hover:text-primary-600 transition-colors duration-200">
                  <UserIcon className="w-5 h-5" />
                  <span className="font-medium">{userInfo?.name}</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-1">
                    <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
                    {isAdmin && <Link to="/admin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Admin Dashboard</Link>}
                    <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">Login</Link>
                <Link to="/register" className="btn-primary">Register</Link>
              </div>
            )}
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-gray-600 hover:text-primary-600 transition-colors duration-200">
            {isMenuOpen ? (<XMarkIcon className="w-6 h-6" />) : (<Bars3Icon className="w-6 h-6" />)}
          </button>
        </div>

        {isSearchOpen && (
          <div className="pb-4">
            <form onSubmit={handleSearch} className="relative">
              <input type="text" value={searchKeyword} onChange={(e) => setSearchKeyword(e.target.value)} placeholder="Search for jewelry..." className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
              <button type="submit" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary-600">
                <MagnifyingGlassIcon className="w-5 h-5" />
              </button>
            </form>
          </div>
        )}

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">Home</Link>
              <Link to="/?category=Rings" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">Rings</Link>
              <Link to="/?category=Necklaces" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">Necklaces</Link>
              <Link to="/?category=Bracelets" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">Bracelets</Link>
              <Link to="/?category=Earrings" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">Earrings</Link>
              <div className="pt-4 border-t border-gray-200">
                {isAuthenticated ? (
                  <div className="space-y-2">
                    <Link to="/profile" className="block text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">Profile</Link>
                    {isAdmin && <Link to="/admin" className="block text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">Admin Dashboard</Link>}
                    <button onClick={handleLogout} className="block w-full text-left text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">Logout</button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Link to="/login" className="block text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">Login</Link>
                    <Link to="/register" className="btn-primary inline-block">Register</Link>
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
