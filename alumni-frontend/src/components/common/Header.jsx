import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/slices/authSlice';

const Header = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary">
            Alumni Portal
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link to="/events" className="text-gray-600 hover:text-primary">
              Events
            </Link>
            <Link to="/directory" className="text-gray-600 hover:text-primary">
              Directory
            </Link>
            
            {isAuthenticated ? (
              <>
                <Link to="/profile" className="text-gray-600 hover:text-primary">
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-secondary text-white px-4 py-2 rounded hover:bg-opacity-90"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/auth"
                className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 