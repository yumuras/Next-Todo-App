import NavItem from './NavItem/NavItem';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import NotInterestedIcon from '@mui/icons-material/NotInterested';

interface NavItemType {
  id: number;
  label: string;
  link: string;
  icon: React.ReactNode;
}

const NavList = () => {
  const navList: NavItemType[] = [
    {
      id: 1,
      label: 'All Tasks',
      link: '/',
      icon: <FormatListBulletedIcon/>
    },
    {
      id: 2,
      label: 'Completed Tasks',
      link: '/completed',
      icon: <TaskAltIcon/>
    },
    {
      id: 3,
      label: 'Expired Tasks',
      link: '/expired',
      icon: <NotInterestedIcon/>
    },
  ];
  return (
    <div className="mt-24">
      {navList.map((item) => (
        <NavItem
          key={item.id}
          label={item.label}
          link={item.link}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default NavList;