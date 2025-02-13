import Link from "next/link";

const Sidebar = () => {
  const menuItems = [
    { label: 'Dashboard', icon: '...', link: '/dashboard' },
    { label: 'Schedule', icon: '...', link: '/dashboard/schedule' },
    { label: 'Tasks', icon: '...', link: '/dashboard/tasks' },
    { label: 'Messages', icon: '...', link: '/dashboard/messages' },
    { label: 'Analytics', icon: '...', link: '/dashboard/analytics' },
    { label: 'Settings', icon: '...', link: '/dashboard/settings' },
    { label: 'Support', icon: '...', link: '/dashboard/support' },
];

  return (
    <aside className="w-64 bg-gray-100 p-4 border-r border-gray-200">
      <div className="font-[100] text-gray-500 mb-4">MENU</div>
      <ul>
        {menuItems.map((item) => (
          <li key={item.label} className="mb-2">
            <Link href={item.link} className="block p-2 rounded hover:bg-gray-200 text-gray-700">
              {/* {item.icon && <Icon name={item.icon} className="mr-2" />} */} {/* Add your icon component here */}
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;