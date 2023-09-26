// assets
import {
  UserOutlined,
  CarryOutOutlined,
  ScheduleOutlined,
  CarOutlined,
  DollarCircleOutlined,
  ProfileOutlined,
  FileTextOutlined,
  ContactsOutlined,
  TeamOutlined,
  MoneyCollectOutlined,
  SolutionOutlined,
  ClusterOutlined,
  ShopOutlined,
  ControlOutlined,
  UserSwitchOutlined
} from '@ant-design/icons';

// icons
const icons = {
  UserOutlined,
  CarryOutOutlined,
  ScheduleOutlined,
  CarOutlined,
  DollarCircleOutlined,
  ProfileOutlined,
  FileTextOutlined,
  ContactsOutlined,
  TeamOutlined,
  MoneyCollectOutlined,
  SolutionOutlined,
  ClusterOutlined,
  ShopOutlined,
  ControlOutlined,
  UserSwitchOutlined
};



const tabales = {
  id: 'tables',
  title: 'Transport Management',
  type: 'group',
  children: [
    {
      id: 'passenger-page',
      title: 'Local Passengers',
      type: 'item',
      url: '/passenger',
      icon: icons.UserOutlined,
    },
    {
      id: 'load-page',
      title: 'Bus Scheduling',
      type: 'item',
      url: '/bus',
      icon: icons.CarryOutOutlined,
    },
    {
      id: 'route-page',
      title: 'Route Management',
      type: 'item',
      url: '/route',
      icon: icons.ScheduleOutlined,
    },
    
    // New pages
    {
      id: 'carrier-page',
      title: 'Inspector Details',
      type: 'item',
      url: '/inspector',
      icon: icons.CarOutlined,
    },
    {
      id: 'carrier-rate-page',
      title: 'Bus Details',
      type: 'item',
      url: '/busdetails',
      icon: icons.ProfileOutlined,
    },
    // {
    //   id: 'consigne-page',
    //   title: 'Consigne',
    //   type: 'item',
    //   url: '/consigne',
    //   icon: icons.FileTextOutlined,
    // },
    // {
    //   id: 'contact-page',
    //   title: 'Contact',
    //   type: 'item',
    //   url: '/contact',
    //   icon: icons.ContactsOutlined,
    // },
  
    {
      id: 'driver-page',
      title: 'Driver Details',
      type: 'item',
      url: '/driver',
      icon: icons.UserSwitchOutlined, 
    },
    {
      id: 'expenses-page',
      title: 'Fare Revenue Analysis',
      type: 'item',
      url: '/fareRevenue',
      icon: icons.MoneyCollectOutlined,
    },
    // {
    //   id: 'pay-page',
    //   title: 'Pay',
    //   type: 'item',
    //   url: '/pay',
    //   icon: icons.DollarCircleOutlined,
    // },
    // {
    //   id: 'supplier-page',
    //   title: 'Supplier',
    //   type: 'item',
    //   url: '/supplier',
    //   icon: icons.SolutionOutlined,
    // },
    // {
    //   id: 'trailer-page',
    //   title: 'Trailer',
    //   type: 'item',
    //   url: '/trailer',
    //   icon: icons.ClusterOutlined,
    // },
    // {
    //   id: 'truck-page',
    //   title: 'Truck',
    //   type: 'item',
    //   url: '/truck',
    //   icon: icons.ShopOutlined, 
    // },
    
  ],
};


export default tabales;
