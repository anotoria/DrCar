
import React from 'react';
import Header from './components/Header';
import AuthLeftVisual from './components/AuthLeftVisual';
import AuthForm from './components/AuthForm';
import BusinessLeftVisual from './components/BusinessLeftVisual';
import BusinessAuthForm from './components/BusinessAuthForm';
import Dashboard from './components/Dashboard';
import Garage from './components/Garage';
import ServiceSearch from './components/ServiceSearch';
import BusinessProfile from './components/BusinessProfile';
import Scheduling from './components/Scheduling';
import BookingConfirmation from './components/BookingConfirmation';
import Appointments from './components/Appointments';
import RateService from './components/RateService';
import BusinessReviews from './components/BusinessReviews';
import BusinessAppointments from './components/BusinessAppointments';
import BusinessDashboard from './components/BusinessDashboard';
import BusinessServices from './components/BusinessServices';
import BusinessEditProfile from './components/BusinessEditProfile';
import BusinessPromotions from './components/BusinessPromotions';
import UserNotifications from './components/UserNotifications';
import BusinessNotifications from './components/BusinessNotifications';
import InfoPage from './components/InfoPage';
import DirectChat from './components/DirectChat';
import FaqSupport from './components/FaqSupport';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import AdminOwners from './components/AdminOwners';
import AdminBusinesses from './components/AdminBusinesses';
import AdminNotifications from './components/AdminNotifications';
import AdminSpecificNotification from './components/AdminSpecificNotification';
import AdminAdmins from './components/AdminAdmins';
import AdminReports from './components/AdminReports';
import AdminFinancial from './components/AdminFinancial';
import AdminPlans from './components/AdminPlans';
import AdminPaymentSettings from './components/AdminPaymentSettings';
import AdminActivityHistory from './components/AdminActivityHistory';
import AdminRegisterPartner from './components/AdminRegisterPartner';
import AdminPartnerSuccess from './components/AdminPartnerSuccess';
import AdminApprovePartner from './components/AdminApprovePartner';
import AdminPartnerStatus from './components/AdminPartnerStatus';
import AdminGeneralSettings from './components/AdminGeneralSettings';
import AdminPromotions from './components/AdminPromotions';
import UserPromotions from './components/UserPromotions';
import OwnerOnboarding from './components/OwnerOnboarding';
import UserProfile from './components/UserProfile';
import { ViewMode, AppStage } from './types';
import { useApp } from './AppContext';

function App() {
  const { appStage, setAppStage, viewMode, setViewMode, login, logout, notifications } = useApp();

  const isBusiness = viewMode === ViewMode.BUSINESS;

  const handleLogin = (email: string) => {
    login(email, viewMode === ViewMode.BUSINESS ? 'business' : 'owner');
  };

  const handleNavigate = (stage: AppStage) => {
    setAppStage(stage);
  };

  const isInfoPage = [
    AppStage.INFO_HOW_IT_WORKS, 
    AppStage.INFO_WORKSHOPS, 
    AppStage.INFO_SERVICES, 
    AppStage.INFO_PLANS, 
    AppStage.INFO_HELP
  ].includes(appStage);

  // Toast Notification Component
  const Toast = () => (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 pointer-events-none">
      {notifications.map((msg, idx) => (
        <div key={idx} className="bg-slate-800 text-white px-4 py-3 rounded-lg shadow-lg border-l-4 border-primary flex items-center gap-2 animate-fade-in pointer-events-auto">
          <span className="material-symbols-outlined text-green-400">check_circle</span>
          <span className="text-sm font-medium">{msg}</span>
        </div>
      ))}
    </div>
  );

  const renderContent = () => {
    if (isInfoPage) {
      return (
        <div className="relative flex min-h-screen w-full flex-col bg-background-dark text-white font-display overflow-x-hidden">
          <Header viewMode={viewMode} onSwitchView={setViewMode} onNavigate={handleNavigate} />
          <InfoPage stage={appStage} viewMode={viewMode} onNavigate={handleNavigate} />
        </div>
      );
    }

    // Dashboard Stages
    if (appStage === AppStage.DASHBOARD) return <Dashboard onLogout={logout} onNavigate={handleNavigate} />;
    if (appStage === AppStage.GARAGE) return <Garage onLogout={logout} onNavigate={handleNavigate} />;
    if (appStage === AppStage.SEARCH) return <ServiceSearch onLogout={logout} onNavigate={handleNavigate} />;
    if (appStage === AppStage.BUSINESS_PROFILE) return <BusinessProfile onLogout={logout} onNavigate={handleNavigate} />;
    if (appStage === AppStage.SCHEDULING) return <Scheduling onLogout={logout} onNavigate={handleNavigate} />;
    if (appStage === AppStage.BOOKING_CONFIRMATION) return <BookingConfirmation onLogout={logout} onNavigate={handleNavigate} />;
    if (appStage === AppStage.APPOINTMENTS) return <Appointments onLogout={logout} onNavigate={handleNavigate} />;
    if (appStage === AppStage.RATE_SERVICE) return <RateService onLogout={logout} onNavigate={handleNavigate} />;
    if (appStage === AppStage.BUSINESS_REVIEWS) return <BusinessReviews onLogout={logout} onNavigate={handleNavigate} />;
    if (appStage === AppStage.BUSINESS_APPOINTMENTS) return <BusinessAppointments onLogout={logout} onNavigate={handleNavigate} />;
    if (appStage === AppStage.BUSINESS_DASHBOARD) return <BusinessDashboard onLogout={logout} onNavigate={handleNavigate} />;
    if (appStage === AppStage.BUSINESS_SERVICES) return <BusinessServices onLogout={logout} onNavigate={handleNavigate} />;
    if (appStage === AppStage.BUSINESS_EDIT_PROFILE) return <BusinessEditProfile onLogout={logout} onNavigate={handleNavigate} />;
    if (appStage === AppStage.BUSINESS_PROMOTIONS) return <BusinessPromotions onLogout={logout} onNavigate={handleNavigate} />;
    if (appStage === AppStage.USER_NOTIFICATIONS) return <UserNotifications onLogout={logout} onNavigate={handleNavigate} />;
    if (appStage === AppStage.USER_PROMOTIONS) return <UserPromotions onLogout={logout} onNavigate={handleNavigate} />;
    if (appStage === AppStage.BUSINESS_NOTIFICATIONS) return <BusinessNotifications onLogout={logout} onNavigate={handleNavigate} />;
    if (appStage === AppStage.CHAT) return <DirectChat viewMode={viewMode} onLogout={logout} onNavigate={handleNavigate} />;
    if (appStage === AppStage.FAQ_SUPPORT) return <FaqSupport viewMode={viewMode} onLogout={logout} onNavigate={handleNavigate} />;
    if (appStage === AppStage.OWNER_ONBOARDING) return <OwnerOnboarding onLogout={logout} onNavigate={handleNavigate} />;
    if (appStage === AppStage.USER_PROFILE) return <UserProfile onLogout={logout} onNavigate={handleNavigate} />;
    
    // Admin Stages
    if (appStage === AppStage.ADMIN_AUTH) return <AdminLogin onNavigate={handleNavigate} />;
    if (appStage === AppStage.ADMIN_DASHBOARD) return <AdminDashboard onLogout={logout} onNavigate={handleNavigate} />;
    if (appStage === AppStage.ADMIN_OWNERS) return <AdminOwners onLogout={logout} onNavigate={handleNavigate} />;
    if (appStage === AppStage.ADMIN_BUSINESSES) return <AdminBusinesses onLogout={logout} onNavigate={handleNavigate} />;
    if (appStage === AppStage.ADMIN_NOTIFICATIONS) return <AdminNotifications onLogout={logout} onNavigate={handleNavigate} />;
    if (appStage === AppStage.ADMIN_SPECIFIC_NOTIFICATION) return <AdminSpecificNotification onLogout={logout} onNavigate={handleNavigate} />;
    if (appStage === AppStage.ADMIN_SETTINGS_ADMINS) return <AdminAdmins onLogout={logout} onNavigate={handleNavigate} />;
    if (appStage === AppStage.ADMIN_REPORTS) return <AdminReports onLogout={logout} onNavigate={handleNavigate} />;
    if (appStage === AppStage.ADMIN_FINANCIAL) return <AdminFinancial onLogout={logout} onNavigate={handleNavigate} />;
    if (appStage === AppStage.ADMIN_PLANS) return <AdminPlans onLogout={logout} onNavigate={handleNavigate} />;
    if (appStage === AppStage.ADMIN_PAYMENT_SETTINGS) return <AdminPaymentSettings onLogout={logout} onNavigate={handleNavigate} />;
    if (appStage === AppStage.ADMIN_ACTIVITY_HISTORY) return <AdminActivityHistory onLogout={logout} onNavigate={handleNavigate} />;
    if (appStage === AppStage.ADMIN_REGISTER_PARTNER) return <AdminRegisterPartner onLogout={logout} onNavigate={handleNavigate} />;
    if (appStage === AppStage.ADMIN_PARTNER_SUCCESS) return <AdminPartnerSuccess onNavigate={handleNavigate} />;
    if (appStage === AppStage.ADMIN_APPROVE_PARTNER) return <AdminApprovePartner onLogout={logout} onNavigate={handleNavigate} />;
    if (appStage === AppStage.ADMIN_PARTNER_STATUS) return <AdminPartnerStatus onNavigate={handleNavigate} />;
    if (appStage === AppStage.ADMIN_GENERAL_SETTINGS) return <AdminGeneralSettings onLogout={logout} onNavigate={handleNavigate} />;
    if (appStage === AppStage.ADMIN_PROMOTIONS) return <AdminPromotions onLogout={logout} onNavigate={handleNavigate} />;

    // Auth Layout (Landing/Auth)
    return (
      <div className="relative flex min-h-screen w-full flex-col bg-background-dark text-white font-display overflow-x-hidden">
        <Header viewMode={viewMode} onSwitchView={setViewMode} onNavigate={handleNavigate} />
        <main className={`flex-1 flex flex-col pt-[72px] ${isBusiness ? 'lg:flex-row' : ''}`}>
          {isBusiness ? (
            <>
              <BusinessLeftVisual />
              <BusinessAuthForm 
                onLogin={() => handleLogin('oficina@exemplo.com')} 
                onSwitchToUser={() => setViewMode(ViewMode.USER)}
              />
            </>
          ) : (
            <div className="flex flex-1 flex-col lg:flex-row h-full">
              <AuthLeftVisual />
              <AuthForm 
                onLogin={() => handleLogin('user@exemplo.com')} 
                onNavigate={handleNavigate} 
                onSwitchToBusiness={() => setViewMode(ViewMode.BUSINESS)}
              />
            </div>
          )}
        </main>
      </div>
    );
  };

  return (
    <>
      {renderContent()}
      <Toast />
    </>
  );
}

export default App;
