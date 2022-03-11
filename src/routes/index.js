// utils
import { userTypes } from '../shared/utils/userTypes';
import { sudoUserType } from '../default';

// routes_view
import RouteView from './view';

// pages
import CustomerLogin from '../pages/Customer/login/login';
import DriverLogin from '../pages/Driver/auth/login/login';
import AdminLogin from '../pages/Admin/login/login';
import CustomerOtp from '../pages/Customer/otp/otp';
import DriverOtp from '../pages/Driver/auth/otp/otp';
import AdminOtp from '../pages/Admin/otp/otp';
import CustomerDashboard from '../pages/Customer/dashboard/dashboard';
import DriverDashboard from '../pages/Driver/dashboard/dashboard';
import AdminDashboard from '../pages/Admin/dashboard/dashboard';
import AdminOrders from '../pages/Admin/orders/orders';
import Error from '../pages/shared/error/error';
import AdminDocuments from '../pages/Admin/documents/documents';
import AdminServices from '../pages/Admin/services/services';
import AdminVendors from '../pages/Admin/vendors/vendors';
import AdminMessages from '../pages/Admin/messages/messages';
import AdminVehicles from '../pages/Admin/vehicles/vehicles';
import AdminCms from '../pages/Admin/cms/cms';
import AdminExtraField from '../pages/Admin/extrafield/extrafield';
import AdminCustomers from '../pages/Admin/users/customers/customers';
import AdminDrivers from '../pages/Admin/users/drivers/drivers';
import AdminManagers from '../pages/Admin/users/managers/managers';
import AdminAdmins from '../pages/Admin/users/admin/admins';

// app layout
import AppLayout from '../pages/shared/applayout/applayout';

// widgets
import DeleteModal from '../shared/components/modals/deletemodal/deletemodal';
import ArchiveModal from '../shared/components/modals/archivemodal/archivemodal';
import FlagModal from '../shared/components/modals/flagmodal/flagmodal';
import PayModal from '../shared/components/modals/paymodal/paymodal';
import TopupModal from '../shared/components/modals/topupmodal/topupmodal';
import WithdrawModal from '../shared/components/modals/withdrawmodal/withdrawmodal';
import CreditCard from '../shared/components/creditcard/creditcard';

// more pages
import AdminOrderDetails from '../pages/Admin/orders/orderdetails/orderdetails';
import AdminAddUser from '../pages/Admin/adduser/adduser';
import AdminCustomerDetails from '../pages/Admin/users/customers/customerdetails/customerdetails';
import AdminDriverSettlements from '../pages/Admin/wallet/driversettlements/driversettlements';
import AdminDocumentsTypes from '../pages/Admin/documents/types/types';
import AdminAdminDetails from '../pages/Admin/users/admin/admindetails/admindetails';
import AdminManagerDetails from '../pages/Admin/users/managers/managerdetails/managerdetails';
import AdminFeedback from '../pages/Admin/manage/feedback/feedback';
import AdminRoles from '../pages/Admin/manage/roles/roles';
import AdminPricing from '../pages/Admin/manage/pricing/pricing';
import AdminReferral from '../pages/Admin/manage/referral/referral';
import AdminToolbox from '../pages/Admin/manage/toolbox/toolbox';
import AdminCancellationsAndReasons from '../pages/Admin/manage/cancellationsandreasons/cancellationsandreasons';
import AdminFamilyPlan from '../pages/Admin/manage/familyplan/familyplan';
import AdminPopup from '../pages/Admin/manage/popup/popup';
import AdminPromocode from '../pages/Admin/manage/promocode/promocode';
import AdminRating from '../pages/Admin/manage/rating/rating';
import AdminRewards from '../pages/Admin/manage/rewards/rewards';
import AdminManagerTransactions from '../pages/Admin/wallet/managertransactions/managertransactions';
import AdminManagerSettlements from '../pages/Admin/wallet/managersettlements/managersettlements';
import AdminCustomerTransactions from '../pages/Admin/wallet/customertransactions/customertransactions';
import AdminDriverTransactions from '../pages/Admin/wallet/drivertransactions/drivertransactions';
import AdminDriverDetails from '../pages/Admin/users/drivers/driverdetails/driverdetails';
import AdminVendorDetails from '../pages/Admin/vendors/vendordetails/vendordetails';
import AdminPermissions from '../pages/Admin/manage/roles/permissions/permissions';
import AdminSubmissions from '../pages/Admin/services/submissions/submissions';
import AdminAddPromocode from '../pages/Admin/manage/promocode/addpromocode/addpromocode';
import AdminPayment from '../pages/Admin/manage/payment/payment';
import AdminPaypal from '../pages/Admin/manage/payment/paypal/paypal';
import AdminAddNewProduct from '../pages/Admin/services/addnewproduct/addnewproduct';
import AdminAddNewCancellation from '../pages/Admin/manage/cancellationsandreasons/addnewcancellation/addnewcancellation';
import AdminAddNewPopup from '../pages/Admin/manage/popup/addnewpopup/addnewpopup';
import AdminCreateTax from '../pages/Admin/manage/pricing/createtax/createtax';
import AdminCreateModel from '../pages/Admin/vehicles/createmodel/createmodel';
import AdminNewFamilyPlan from '../pages/Admin/manage/familyplan/newplan/newfamilyplan';
import AdminAddNewAssist from '../pages/Admin/services/addnewassist/addnewassist';
import AdminCreateReward from '../pages/Admin/manage/rewards/createreward/createreward';
import MaterialCard from '../shared/components/card/materialcard/materialcard';
import AdminReport from '../pages/Admin/manage/report/report';
import AdminGeneral from '../pages/Admin/configuration/general/general';
import AdminCreateVehicle from '../pages/Admin/vehicles/createvehicle/createvehicle';
import AdminCreateMessage from '../pages/Admin/messages/createmessage/createmessage';
import AdminProductivity from '../pages/Admin/manage/report/productivity/productivity';
import AdminIssuesAndReasons from '../pages/Admin/manage/issuesandreasons/issuesandreasons';
import AdminAddNewIssues from '../pages/Admin/manage/issuesandreasons/addnewissues/addnewissues';
import AdminAddRateGroup from '../pages/Admin/manage/pricing/addrategroup/addrategroup';
import AdminAddCMS from '../pages/Admin/cms/addcms/addcms';
import AdminVehiclesDetails from '../pages/Admin/vehicles/vehicledetails/vehicledetails';
import AdminEventsCreate from '../pages/Admin/configuration/events/create/create';
import AdminEdit from '../pages/Admin/configuration/events/edit/edit';
import AdminEnvironment from '../pages/Admin/manage/environment/environment';
import AdminCreateEnvironment from '../pages/Admin/manage/environment/createenvironment/createenvironment';
import AdminCreateZone from '../pages/Admin/manage/pricing/createzone/createzone';
import AdminConfigurationEvents from '../pages/Admin/configuration/events';
import AdminCreateExtraField from '../pages/Admin/extrafield/createextrafield/createextrafield';
import AdminAddTool from '../pages/Admin/manage/toolbox/addtool/addtool';
import AdminCreateVendor from '../pages/Admin/vendors/createvendor/createvendor';
import AdminCreateReferral from '../pages/Admin/manage/referral/createreferral/createreferral';
import AdminAddMeterPrice from '../pages/Admin/manage/pricing/addmeterprice/addmeterprice';
import Signup from '../pages/Customer/signup/signup';

//Customer Pages
import CustomerVehicle from '../pages/Customer/vehicles/customervehicle';
import CustomerPromotions from '../pages/Customer/promotions/customerpromotions';
import CustomerHistory from '../pages/Customer/history/history';
import CustomerPayment from '../pages/Customer/payment/payment';
import CustomerProfile from '../pages/Customer/profile/customerProfile';
import CustomerMessage from '../pages/Customer/messages/messages';
import CustomerSupport from '../pages/Customer/support/support';
import CustomerPromoModal from '../shared/components/modals/promopopupmodal/popupmodal';
import MessageViewModal from '../shared/components/modals/messageviewmodal/messageviewmodal';
import SupportView from '../pages/Customer/support-view/supportview';
import HistoryModal from '../shared/components/modals/historymodal/historymodal';
import CustomerCreateVehicle from '../pages/Customer/vehicles/createvehicle/customercreatevehicle';
import AddFundModal from '../shared/components/modals/addfundmodal/addfundmodal';
import PromoCodeModal from '../shared/components/modals/promocode/promocode';
import CustomerSupportCreateConversation from '../pages/Customer/supportcreateconversation/supportcreateconversation';
import CustomerEditVehicle from '../pages/Customer/vehicles/editvehicle/editvehicle';
import CustomerAddCard from '../pages/Customer/payment/addcard/addcard';
import CustomerUpdateBankCard from '../pages/Customer/payment/updatebankcard/updatebankcard';
import InviteFriendModal from '../shared/components/modals/invitefriendmodal/invitefriendmodal';
import PaymentSetup from '../shared/components/modals/paymentsetup/paymentsetup';
import DriverSignup from '../pages/Driver/auth/signup/signup';
import DriverVehicleDetail from '../pages/Driver/auth/vehicledetail/vehicledetail';
import DriverDocumentation from '../pages/Driver/auth/documentation/driverdocumentation';
import DriverVerification from '../pages/Driver/auth/verification/verification';
import DriverVehicle from '../pages/Driver/drivervehicles/vehicles';
import DriverOrdersPage from '../pages/Driver/driverorders/driverorders';
import DriverPayment from '../pages/Driver/driverpayment/driverpayment';
import DriverProfile from '../pages/Driver/driverprofile/driverprofile';
import DriverMessage from '../pages/Driver/drivermessages/messages';
import DriverSupport from '../pages/Driver/driversupport/support';
import DriverToolBox from '../pages/Driver/drivertoolbox/toolbox';
import DriverEarnings from '../pages/Driver/driverearning/driverearning';
import DriverActivities from '../pages/Driver/driveractivities/driveractivities';
import HistoryOrderModal from '../shared/components/modals/historyordermodal/historyordermodal';
import DriverCreateVehicle from '../pages/Driver/vehicles/createvehicle/drivercreatevehicle';
import DriverDocuments from '../pages/Driver/driverdocuments/driverdocument';
import WithdrawFundModal from '../shared/components/modals/withdrawfundmodal/withdrawfundmodal';
import DriverSupportCreateConversation from '../pages/Driver/supportcreateconversation/supportcreateconversation';
import DriverEditVehicle from '../pages/Driver/vehicles/editvehicle/editvehicle';
import DriverAddCard from '../pages/Driver/payment/addcard/addcard';
import DriverUpdateBankCard from '../pages/Driver/payment/updatebankcard/updatebankcard';
import TransactionModal from '../shared/components/modals/transactionmodal/transactionmodal';
import DriverTransaction from '../pages/Driver/drivertransactions/driverttransactions';
import About from '../pages/Customer/about/about';
import RatingDetails from '../pages/Admin/manage/rating/ratingdetails/ratingsdetails';
import DriverPerformance from '../pages/Admin/manage/report/driverperformance/driverperformance';
import CustomerReport from '../pages/Admin/manage/report/customerreport/customerreport';
import PendingPayment from '../pages/Admin/manage/report/account/pendingpayment';
export const rootApp = '/app';

const roleComponent = ({
  CustomerComponent,
  DriverComponent,
  AdminComponent,
}) => {
  if (sudoUserType === userTypes.Customer) {
    return CustomerComponent;
  } else if (sudoUserType === userTypes.Driver) {
    return DriverComponent;
  } else {
    return AdminComponent;
  }
};

export const pages = [
  // {
  //   path: '/',
  //   exact: true,
  //   component: RouteView,
  //   guarded: false,
  // },
  {
    path: '/routes',
    exact: true,
    component: RouteView,
    guarded: false,
  },
  {
    path: '/login',
    exact: true,
    component: roleComponent({
      CustomerComponent: CustomerLogin,
      DriverComponent: DriverLogin,
      AdminComponent: AdminLogin,
    }),
    guarded: false,
  },
  {
    path: '/otp',
    exact: true,
    component: roleComponent({
      CustomerComponent: CustomerOtp,
      DriverComponent: DriverOtp,
      AdminComponent: AdminOtp,
    }),
    guarded: false,
  },

  {
    path: '/signup',
    exact: true,
    component: roleComponent({
      CustomerComponent: Signup,
      DriverComponent: DriverSignup,
    }),
    guarded: false,
    permission: [userTypes.Driver, userTypes.Customer],
  },
  {
    path: '/vehicle_detail',
    exact: true,
    component: roleComponent({
      DriverComponent: DriverVehicleDetail,
    }),
    guarded: false,
    permission: [userTypes.Driver],
  },
  {
    path: '/driver_vehicle_documentation',
    exact: true,
    component: roleComponent({
      DriverComponent: DriverDocumentation,
    }),
    guarded: false,
    permission: [userTypes.Driver],
  },
  {
    path: '/driver_verification',
    exact: true,
    component: roleComponent({
      DriverComponent: DriverVerification,
    }),
    guarded: false,
    permission: [userTypes.Driver],
  },

  {
    path: '/error',
    exact: true,
    component: Error,
    guarded: false,
  },
];

export const appPages = [
  {
    label: 'Dashboard',
    path: '/',
    exact: true,
    children: roleComponent({
      CustomerComponent: AppLayout({})(CustomerDashboard),
      DriverComponent: AppLayout({})(DriverDashboard),
      AdminComponent: AppLayout({})(AdminDashboard),
    }),
    sidebar: true,
    guarded: true,
    icon: <i className="fi fi-rr-apps"></i>,
  },
  {
    label: 'Users',
    path: rootApp + '/users',
    exact: true,
    children: AppLayout({})(AdminCustomers),
    sidebar: true,
    multiple: true,
    options: [
      { label: 'Customers', path: rootApp + '/users/customers' },
      { label: 'Drivers', path: rootApp + '/users/drivers' },
      { label: 'Managers', path: rootApp + '/users/mangers' },
      { label: 'Admins', path: rootApp + '/users/admins' },
    ],
    guarded: true,
    icon: <i className="fi fi-rr-user"></i>,
    permission: [userTypes.Admin],
  },

  // Users Sub Routes
  {
    label: 'Customers',
    path: rootApp + '/users/' + 'customers',
    exact: true,
    children: AppLayout({})(AdminCustomers),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Admin],
  },
  {
    label: 'Drivers',
    path: rootApp + '/users/' + 'drivers',
    exact: true,
    children: AppLayout({})(AdminDrivers),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Admin],
  },
  {
    label: 'Managers',
    path: rootApp + '/users/' + 'managers',
    exact: true,
    children: AppLayout({})(AdminManagers),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Admin],
  },
  {
    label: 'Admins',
    path: rootApp + '/users/' + 'admins',
    exact: true,
    children: AppLayout({})(AdminAdmins),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Admin],
  },
  // End of Users Sub Routes

  {
    label: '',
    path: rootApp + '/customer/:id',
    exact: true,
    children: AppLayout({})(AdminCustomerDetails),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Admin],
  },

  {
    label: '',
    path: rootApp + '/admin/:id',
    exact: true,
    children: AppLayout({})(AdminAdminDetails),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Admin],
  },

  {
    label: '',
    path: rootApp + '/manager/:id',
    exact: true,
    children: AppLayout({})(AdminManagerDetails),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Admin],
  },

  {
    label: '',
    path: rootApp + '/driver/:id',
    exact: true,
    children: AppLayout({})(AdminDriverDetails),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Admin],
  },

  {
    label: '',
    path: rootApp + '/vendor/:id',
    exact: true,
    children: AppLayout({})(AdminVendorDetails),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Admin],
  },

  {
    label: 'Add User',
    path: rootApp + '/user/new',
    exact: true,
    children: AppLayout({})(AdminAddUser),
    sidebar: false,
    guarded: true,
    icon: <i className="fi fi-rr-user"></i>,
    permission: [userTypes.Admin],
  },
  {
    label: 'Orders',
    path: rootApp + '/orders',
    exact: true,
    children: AppLayout({})(AdminOrders),
    sidebar: true,
    guarded: true,
    icon: <i className="fi fi-rr-box"></i>,
    permission: [userTypes.Admin],
  },
  {
    label: '',
    path: rootApp + '/order/:id',
    exact: true,
    children: AppLayout({})(AdminOrderDetails),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Admin],
  },
  {
    label: 'Documents',
    path: rootApp + '/documents',
    exact: true,
    children: roleComponent({
      DriverComponent: AppLayout({})(DriverDocuments),
      AdminComponent: AppLayout({})(AdminDocuments),
    }),
    sidebar: true,
    guarded: true,
    icon: <i className="fi fi-rr-folder"></i>,
    permission: [userTypes.Admin, userTypes.Driver],
  },
  {
    label: 'Wallet',
    path: rootApp + '/wallet',
    exact: true,
    children: AppLayout({})(AdminDriverSettlements),
    sidebar: true,
    multiple: true,
    options: [
      {
        label: 'Driver settlements',
        path: rootApp + '/wallet/settlements/driver',
      },
      {
        label: 'Manager settlements',
        path: rootApp + '/wallet/settlements/manager',
      },
      {
        label: 'Customer transactions',
        path: rootApp + '/wallet/transactions/customer',
      },
      {
        label: 'Driver transactions',
        path: rootApp + '/wallet/transactions/driver',
      },
      {
        label: 'Manager transactions',
        path: rootApp + '/wallet/transactions/manager',
      },
    ],
    guarded: true,
    icon: <i className="fi fi-rr-dollar"></i>,
    permission: [userTypes.Admin],
  },

  // Wallet routes
  {
    path: rootApp + '/wallet/settlements/' + 'driver',
    exact: true,
    children: AppLayout({})(AdminDriverSettlements),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Admin],
  },

  {
    path: rootApp + '/wallet/settlements/' + 'manager',
    exact: true,
    children: AppLayout({})(AdminManagerSettlements),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Admin],
  },

  {
    path: rootApp + '/wallet/transactions/' + 'manager',
    exact: true,
    children: AppLayout({})(AdminManagerTransactions),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Admin],
  },

  {
    path: rootApp + '/wallet/transactions/' + 'customer',
    exact: true,
    children: AppLayout({})(AdminCustomerTransactions),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Admin],
  },

  {
    path: rootApp + '/wallet/transactions/' + 'driver',
    exact: true,
    children: AppLayout({})(AdminDriverTransactions),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Admin],
  },

  // End of Wallet routes
  {
    label: 'Documents Types',
    path: rootApp + '/documents/' + 'types',
    exact: true,
    children: AppLayout({})(AdminDocumentsTypes),
    sidebar: false,
    guarded: true,
    icon: <i className="fi fi-rr-folder"></i>,
    permission: [userTypes.Admin],
  },

  {
    label: 'Vehicles',
    path: rootApp + '/vehicles',
    exact: true,
    children: roleComponent({
      CustomerComponent: AppLayout({})(CustomerVehicle),
      DriverComponent: AppLayout({})(DriverVehicle),
      AdminComponent: AppLayout({})(AdminVehicles),
    }),
    sidebar: true,
    guarded: true,
    icon: <i className="fi fi-rr-school-bus"></i>,
    permission: [userTypes.Admin, userTypes.Customer, userTypes.Driver],
  },
  {
    label: 'Vehicles',
    path: rootApp + '/vehicles' + '/d/new',
    exact: true,
    children: roleComponent({
      CustomerComponent: AppLayout({})(CustomerCreateVehicle),
      DriverComponent: AppLayout({})(DriverCreateVehicle),
    }),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Customer, userTypes.Driver],
  },
  {
    label: 'Vehicles',
    path: rootApp + '/vehicles' + '/d/edit',
    exact: true,
    children: roleComponent({
      CustomerComponent: AppLayout({})(CustomerEditVehicle),
      DriverComponent: AppLayout({})(DriverEditVehicle),
    }),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Customer, userTypes.Driver],
  },
  {
    label: 'Payment',
    path: rootApp + '/payment' + '/addcard',
    exact: true,
    children: roleComponent({
      CustomerComponent: AppLayout({})(CustomerAddCard),
      DriverComponent: AppLayout({})(DriverAddCard),
    }),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Customer, userTypes.Driver],
  },
  {
    label: 'Payment',
    path: rootApp + '/payment' + '/updatecard',
    exact: true,
    children: roleComponent({
      CustomerComponent: AppLayout({})(CustomerUpdateBankCard),
      DriverComponent: AppLayout({})(DriverUpdateBankCard),
    }),

    sidebar: false,
    guarded: true,
    permission: [userTypes.Customer, userTypes.Driver],
  },

  {
    label: 'Promotions',
    path: rootApp + '/promotions',
    exact: true,
    children: AppLayout({})(CustomerPromotions),
    sidebar: true,
    guarded: true,
    icon: <i className="fi fi-rr-megaphone"></i>,
    permission: [userTypes.Customer],
  },
  {
    label: 'Payments',
    path: rootApp + '/payments',
    exact: true,
    children: roleComponent({
      CustomerComponent: AppLayout({})(CustomerPayment),
      DriverComponent: AppLayout({})(DriverPayment),
    }),
    sidebar: true,
    guarded: true,
    icon: <i className="fi fi-rr-credit-card"></i>,
    permission: [userTypes.Admin, userTypes.Customer, userTypes.Driver],
  },
  {
    label: 'Profile',
    path: rootApp + '/profile',
    exact: true,
    children: roleComponent({
      CustomerComponent: AppLayout({})(CustomerProfile),
      DriverComponent: AppLayout({})(DriverProfile),
    }),

    sidebar: true,
    guarded: true,
    icon: <i className="fi fi-rr-user"></i>,
    permission: [userTypes.Customer, userTypes.Driver],
  },
  {
    label: 'Orders',
    path: rootApp + '/driverorders',
    exact: true,
    children: AppLayout({})(DriverOrdersPage),
    sidebar: true,
    guarded: true,
    icon: <i className="fi fi-rr-box"></i>,
    permission: [userTypes.Driver],
  },
  {
    label: 'ToolBox',
    path: rootApp + '/toolbox',
    exact: true,
    children: AppLayout({})(DriverToolBox),
    sidebar: true,
    guarded: true,
    icon: <i className="fi fi-rr-tool-crop"></i>,
    permission: [userTypes.Driver],
  },
  {
    label: 'History',
    path: rootApp + '/history',
    exact: true,
    children: AppLayout({})(CustomerHistory),
    sidebar: true,
    guarded: true,
    icon: <i className="fi fi-rr-time-past"></i>,
    permission: [userTypes.Customer],
  },
  {
    label: 'New Vehicles Model',
    path: rootApp + '/vehicles' + '/:id',
    exact: true,
    children: AppLayout({})(AdminVehiclesDetails),
    sidebar: false,
    guarded: true,
    icon: <i className="fi fi-rr-school-bus"></i>,
    permission: [userTypes.Admin],
  },
  {
    label: 'Vehicles',
    path: rootApp + '/vehicles' + '/d/new',
    exact: true,
    children: AppLayout({})(AdminCreateVehicle),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Admin],
  },
  {
    label: 'New Vehicles Model',
    path: rootApp + '/vehicles' + '/model/new',
    exact: true,
    children: AppLayout({})(AdminCreateModel),
    sidebar: false,
    guarded: true,
    icon: <i className="fi fi-rr-school-bus"></i>,
    permission: [userTypes.Admin],
  },

  {
    label: 'Vendors',
    path: rootApp + '/vendors',
    exact: true,
    children: AppLayout({})(AdminVendors),
    sidebar: true,
    guarded: true,
    icon: <i className="fi fi-rr-shop"></i>,
    permission: [userTypes.Admin],
  },

  {
    label: 'Vendors',
    path: rootApp + '/vendors' + '/new',
    exact: true,
    children: AppLayout({})(AdminCreateVendor),
    sidebar: false,
    guarded: true,
    icon: <i className="fi fi-rr-shop"></i>,
    permission: [userTypes.Admin],
  },
  {
    label: 'Message',
    path: rootApp + '/message',
    exact: true,
    children: AppLayout({})(AdminMessages),
    sidebar: true,
    guarded: true,
    icon: <i className="fi fi-rr-comment-alt"></i>,
    permission: [userTypes.Admin],
  },
  {
    label: 'Message',
    path: rootApp + '/message/' + 'new',
    exact: true,
    children: AppLayout({})(AdminCreateMessage),
    sidebar: false,
    guarded: true,
    icon: <i className="fi fi-rr-comment-alt"></i>,
    permission: [userTypes.Admin],
  },
  {
    label: 'Services',
    path: rootApp + '/services',
    exact: true,
    children: AppLayout({})(AdminServices),
    sidebar: true,
    guarded: true,
    icon: <i className="fi fi-rr-shopping-cart"></i>,
    permission: [userTypes.Admin],
  },
  {
    label: 'Services',
    path: rootApp + '/services' + '/product/new',
    exact: true,
    children: AppLayout({})(AdminAddNewProduct),
    sidebar: false,
    guarded: true,
    icon: <i className="fi fi-rr-shopping-cart"></i>,
    permission: [userTypes.Admin],
  },
  {
    label: 'Services',
    path: rootApp + '/services' + '/assist/new',
    exact: true,
    children: AppLayout({})(AdminAddNewAssist),
    sidebar: false,
    guarded: true,
    icon: <i className="fi fi-rr-shopping-cart"></i>,
    permission: [userTypes.Admin],
  },
  {
    label: 'Services',
    path: rootApp + '/services' + '/submissions/:id',
    exact: true,
    children: AppLayout({})(AdminSubmissions),
    sidebar: false,
    guarded: true,
    icon: <i className="fi fi-rr-shopping-cart"></i>,
    permission: [userTypes.Admin],
  },
  {
    label: 'Manage',
    path: rootApp + '/manage',
    exact: true,
    children: AppLayout({})(AdminFeedback),
    sidebar: true,
    multiple: true,
    options: [
      { label: 'Roles', path: rootApp + '/manage/roles' },
      { label: 'Reward', path: rootApp + '/manage/reward' },
      { label: 'Referral Program', path: rootApp + '/manage/referral/program' },
      { label: 'Rating', path: rootApp + '/manage/rating' },
      {
        label: 'Cancellation & Reasons',
        path: rootApp + '/manage/cancellation/and/reasons',
      },
      { label: 'Feedback', path: rootApp + '/manage/feedback' },
      {
        label: 'Issues & Reasons',
        path: rootApp + '/manage/issues/and/reasons',
      },
      { label: 'Tool box', path: rootApp + '/manage/toolbox' },
      { label: 'Environment', path: rootApp + '/manage/environment' },
      { label: 'Promo code', path: rootApp + '/manage/promo/code' },
      { label: 'Family plan', path: rootApp + '/manage/family/plan' },
      { label: 'Payment', path: rootApp + '/manage/payment' },
      { label: 'Pricing', path: rootApp + '/manage/pricing' },
      { label: 'Report', path: rootApp + '/manage/report' },
      { label: 'Pop up', path: rootApp + '/manage/pop/up' },
    ],
    guarded: true,
    icon: <i className="fi fi-rr-settings-sliders"></i>,
    permission: [userTypes.Admin],
  },
  // [Manage] sub routes
  {
    path: rootApp + '/manage/' + 'reward',
    exact: true,
    children: AppLayout({})(AdminRewards),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Admin],
  },
  {
    path: rootApp + '/manage/' + 'reward' + '/new',
    exact: true,
    children: AppLayout({})(AdminCreateReward),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Admin],
  },
  {
    path: rootApp + '/manage/' + 'referral/program',
    exact: true,
    children: AppLayout({})(AdminReferral),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Admin],
  },
  {
    path: rootApp + '/manage/' + 'referral/program/create',
    exact: true,
    children: AppLayout({})(AdminCreateReferral),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Admin],
  },
  {
    path: rootApp + '/manage/' + 'feedback',
    exact: true,
    children: AppLayout({})(AdminFeedback),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Admin],
  },
  {
    path: rootApp + '/manage/' + 'rating',
    exact: true,
    children: AppLayout({})(AdminRating),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Admin],
  },
  {
    path: rootApp + '/manage/' + 'rating/' + ':id',
    exact: true,
    children: AppLayout({})(RatingDetails),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Admin],
  },
  {
    path: rootApp + '/manage/' + 'roles',
    exact: true,
    children: AppLayout({})(AdminRoles),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Admin],
  },

  {
    path: rootApp + '/manage/' + 'roles/:id',
    exact: true,
    children: AppLayout({})(AdminPermissions),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Admin],
  },
  {
    path: rootApp + '/manage/' + 'cancellations/and/reasons',
    exact: true,
    children: AppLayout({})(AdminCancellationsAndReasons),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Admin],
  },
  {
    path: rootApp + '/manage/' + 'cancellations/and/reasons/new',
    exact: true,
    children: AppLayout({})(AdminAddNewCancellation),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Admin],
  },
  {
    path: rootApp + '/manage/' + 'issues/and/reasons',
    exact: true,
    children: AppLayout({})(AdminIssuesAndReasons),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Admin],
  },
  {
    path: rootApp + '/manage/' + 'issues/and/reasons' + '/new',
    exact: true,
    children: AppLayout({})(AdminAddNewIssues),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Admin],
  },
  {
    path: rootApp + '/manage/' + 'toolbox',
    exact: true,
    children: AppLayout({})(AdminToolbox),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Admin],
  },
  {
    path: rootApp + '/manage/' + 'toolbox' + '/new',
    exact: true,
    children: AppLayout({})(AdminAddTool),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Admin],
  },
  {
    path: rootApp + '/manage/' + 'family/plan',
    exact: true,
    children: AppLayout({})(AdminFamilyPlan),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Admin],
  },
  {
    path: rootApp + '/manage/' + 'family/plan/new',
    exact: true,
    children: AppLayout({})(AdminNewFamilyPlan),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Admin],
  },
  {
    path: rootApp + '/manage/' + 'payment',
    exact: true,
    children: AppLayout({})(AdminPayment),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Admin],
  },
  {
    path: rootApp + '/manage/' + 'payment' + '/paypal',
    exact: true,
    children: AppLayout({})(AdminPaypal),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Admin],
  },
  {
    path: rootApp + '/manage/' + 'pricing',
    exact: true,
    children: AppLayout({})(AdminPricing),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Admin],
  },
  {
    path: rootApp + '/manage/' + 'zone' + '/new',
    exact: true,
    children: AppLayout({})(AdminCreateZone),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Admin],
  },
  {
    path: rootApp + '/manage/' + 'pricing/' + 'tax/new',
    exact: true,
    children: AppLayout({})(AdminCreateTax),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Admin],
  },
  {
    path: rootApp + '/manage/' + 'pricing/' + 'meter/price/new',
    exact: true,
    children: AppLayout({})(AdminAddMeterPrice),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Admin],
  },
  {
    path: rootApp + '/manage/' + 'pricing/' + 'rate/group/new',
    exact: true,
    children: AppLayout({})(AdminAddRateGroup),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Admin],
  },
  {
    path: rootApp + '/manage/' + 'report',
    exact: true,
    children: AppLayout({})(AdminReport),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Admin],
  },
  {
    path: rootApp + '/manage/' + 'report/' + 'driverperformance',
    exact: true,
    children: AppLayout({})(DriverPerformance),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Admin],
  },
  {
    path: rootApp + '/manage/' + 'report/' + 'customerreport',
    exact: true,
    children: AppLayout({})(CustomerReport),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Admin],
  },
  {
    path: rootApp + '/manage/' + 'report/' + 'pendingpayment',
    exact: true,
    children: AppLayout({})(PendingPayment),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Admin],
  },
  {
    path: rootApp + '/manage/' + 'report/' + 'productivity',
    exact: true,
    children: AppLayout({})(AdminProductivity),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Admin],
  },
  {
    path: rootApp + '/manage/' + 'promo/code',
    exact: true,
    children: AppLayout({})(AdminPromocode),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Admin],
  },
  {
    path: rootApp + '/manage/' + 'environment',
    exact: true,
    children: AppLayout({})(AdminEnvironment),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Admin],
  },
  {
    path: rootApp + '/manage/' + 'environment' + '/new',
    exact: true,
    children: AppLayout({})(AdminCreateEnvironment),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Admin],
  },
  {
    path: rootApp + '/manage/' + 'add/promo/code',
    exact: true,
    children: AppLayout({})(AdminAddPromocode),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Admin],
  },
  {
    path: rootApp + '/manage/' + 'popup',
    exact: true,
    children: AppLayout({})(AdminPopup),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Admin],
  },
  {
    path: rootApp + '/manage/' + 'popup' + '/new',
    exact: true,
    children: AppLayout({})(AdminAddNewPopup),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Admin],
  },
  // End of [Manage] sub routes
  {
    label: 'CMS',
    path: rootApp + '/cms',
    exact: true,
    children: AppLayout({})(AdminCms),
    sidebar: true,
    guarded: true,
    icon: <i className="fi fi-rr-edit"></i>,
    permission: [userTypes.Admin],
    bottom: true,
  },
  {
    label: 'CMS',
    path: rootApp + '/cms' + '/new',
    exact: true,
    children: AppLayout({})(AdminAddCMS),
    sidebar: false,
    guarded: true,
    icon: <i className="fi fi-rr-edit"></i>,
    permission: [userTypes.Admin],
    bottom: true,
  },
  {
    label: 'Extra field',
    path: rootApp + '/extra-field',
    exact: true,
    children: AppLayout({})(AdminExtraField),
    sidebar: true,
    guarded: true,
    icon: <i className="fi fi-rr-file-add"></i>,
    permission: [userTypes.Admin],
    bottom: true,
  },
  {
    label: 'Extra field',
    path: rootApp + '/extra-field' + '/new',
    exact: true,
    children: AppLayout({})(AdminCreateExtraField),
    sidebar: false,
    guarded: true,
    icon: <i className="fi fi-rr-file-add"></i>,
    permission: [userTypes.Admin],
    bottom: true,
  },
  {
    label: 'Configuration',
    path: rootApp + '/configuration',
    exact: true,
    children: AppLayout({})(AdminGeneral),
    sidebar: true,
    multiple: true,
    options: [
      { label: 'General', path: '/configuration/general' },
      { label: 'Module config', path: '/configuration/module/config' },
      { label: 'Events', path: '/configuration/events' },
    ],
    guarded: true,
    icon: <i className="fi fi-rr-settings"></i>,
    permission: [userTypes.Admin],
    bottom: true,
  },
  // [Configuration] Sub routes
  {
    path: rootApp + '/configuration/' + 'general',
    exact: true,
    children: AppLayout({})(AdminGeneral),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Admin],
  },
  {
    path: rootApp + '/configuration/' + 'events',
    exact: true,
    children: AppLayout({})(AdminConfigurationEvents),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Admin],
  },
  {
    path: rootApp + '/configuration/' + 'events/' + 'create',
    exact: true,
    children: AppLayout({})(AdminEventsCreate),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Admin],
  },
  {
    path: rootApp + '/configuration/' + 'events/' + 'edit/:id',
    exact: true,
    children: AppLayout({})(AdminEdit),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Admin],
  },
  // End of Sub routes

  {
    label: 'Message',
    path: rootApp + '/b/message',
    exact: true,
    children: roleComponent({
      CustomerComponent: AppLayout({})(CustomerMessage),
      DriverComponent: AppLayout({})(DriverMessage),
    }),
    sidebar: true,
    guarded: true,
    icon: <i className="fi fi-rr-comment-alt"></i>,
    permission: [userTypes.Customer, userTypes.Driver],
    bottom: true,
  },

  {
    path: rootApp + '/support/createconversation',
    exact: true,
    children: roleComponent({
      CustomerComponent: AppLayout({})(CustomerSupportCreateConversation),
      DriverComponent: AppLayout({})(DriverSupportCreateConversation),
    }),
    sidebar: true,
    guarded: true,
    // icon: <i className="fi fi-rr-comment"></i>,
    permission: [userTypes.Customer, userTypes.Driver],
    // bottom: true,
  },
  {
    label: 'Support',
    path: rootApp + '/support',
    exact: true,
    children: roleComponent({
      CustomerComponent: AppLayout({})(CustomerSupport),
      DriverComponent: AppLayout({})(DriverSupport),
    }),
    sidebar: true,
    guarded: true,
    icon: <i className="fi fi-rr-comment"></i>,
    permission: [userTypes.Customer, userTypes.Driver],
    bottom: true,
  },
  {
    path: rootApp + '/support/view',
    exact: true,
    children: AppLayout({})(SupportView),
    sidebar: true,
    guarded: true,
    // icon: <i className="fi fi-rr-comment"></i>,
    permission: [userTypes.Customer, userTypes.Driver],
    // bottom: true,
  },
  {
    label: 'About',
    path: rootApp + '/about',
    exact: true,
    children: AppLayout({})(About),
    sidebar: true,
    guarded: true,
    icon: <i className="fi fi-rr-exclamation"></i>,
    permission: [userTypes.Customer, userTypes.Driver],
    bottom: true,
  },
  {
    label: 'Log out',
    path: rootApp + '/logout',
    exact: true,
    children: AppLayout({})(AdminMessages),
    sidebar: true,
    guarded: true,
    icon: <i className="fi fi-rr-sign-out"></i>,
    permission: [userTypes.Customer, userTypes.Driver],
    bottom: true,
  },
  {
    path: rootApp + '/driverearnings',
    exact: true,
    children: AppLayout({})(DriverEarnings),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Driver],
  },
  {
    path: rootApp + '/driveractivities',
    exact: true,
    children: AppLayout({})(DriverActivities),
    sidebar: false,
    guarded: true,
    permission: [userTypes.Driver],
  },
  {
    path: rootApp + '/drivertransaction',
    exact: true,
    children: AppLayout({})(DriverTransaction),
    sidebar: true,
    guarded: true,
    permission: [userTypes.Driver],
  },
];

export const widgets = [
  {
    path: '/delete-modal',
    exact: true,
    component: DeleteModal,
    guarded: false,
  },
  {
    path: '/archive-modal',
    exact: true,
    component: ArchiveModal,
    guarded: false,
  },
  {
    path: '/payment-setup',
    exact: true,
    component: PaymentSetup,
    guarded: false,
  },
  {
    path: '/history-modal',
    exact: true,
    component: HistoryModal,
    guarded: false,
  },
  {
    path: '/history-order-modal',
    exact: true,
    component: HistoryOrderModal,
    guarded: false,
  },
  {
    path: '/flag-modal',
    exact: true,
    component: FlagModal,

    guarded: false,
  },
  {
    path: '/pay-modal',
    exact: true,
    component: PayModal,
    guarded: false,
  },
  {
    path: '/promo-modal',
    exact: true,
    component: CustomerPromoModal,
    guarded: false,
  },
  {
    path: '/invite-friend',
    exact: true,
    component: InviteFriendModal,
    guarded: false,
  },
  {
    path: '/transaction-modal',
    exact: true,
    component: TransactionModal,
    guarded: false,
  },
  {
    path: '/topup-modal',
    exact: true,
    component: TopupModal,
    guarded: false,
  },
  {
    path: '/addfund-modal',
    exact: true,
    component: AddFundModal,
    guarded: false,
  },
  {
    path: '/withdrawfund-modal',
    exact: true,
    component: WithdrawFundModal,
    guarded: false,
  },
  {
    path: '/promocode-modal',
    exact: true,
    component: PromoCodeModal,
    guarded: false,
  },
  {
    path: '/withdraw-modal',
    exact: true,
    component: WithdrawModal,
    guarded: false,
  },
  {
    path: '/message-view',
    exact: true,
    component: MessageViewModal,
    guarded: false,
  },
  {
    path: '/credit-card',
    exact: true,
    component: CreditCard,
    guarded: false,
  },
  {
    path: '/material-card',
    exact: true,
    component: MaterialCard,
    guarded: false,
  },
];

export const routes = [...pages, ...appPages, ...widgets];
