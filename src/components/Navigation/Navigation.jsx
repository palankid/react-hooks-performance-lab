import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  const getLinkClasses = (path) => {
    const baseClasses = 'px-4 py-2 rounded-md';
    const activeClasses = 'bg-gray-600 text-white';
    const inactiveClasses = 'text-gray-300 hover:bg-gray-700 hover:text-white';

    return `${baseClasses} ${location.pathname === path ? activeClasses : inactiveClasses}`;
  };

  return (
    <nav className="w-full bg-gray-800 p-4">
      <div className="mx-auto flex gap-4">
        <Link
          to="/"
          className={getLinkClasses('/')}
        >
          useCallback test
        </Link>
        <Link
          to="/usememotest"
          className={getLinkClasses('/usememotest')}
        >
          useMemo test
        </Link>
      </div>
    </nav>
  );
};

export default Navigation; 