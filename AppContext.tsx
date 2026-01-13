
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { AppStage, ViewMode } from './types';

// --- Interfaces ---
export interface Vehicle {
  id: string;
  model: string;
  brand: string;
  year: string;
  plate: string;
  status: 'active' | 'review' | 'ok';
  mileage: number;
}

export interface Appointment {
  id: string;
  workshopName: string;
  serviceName: string;
  date: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  price: number;
  vehicleId: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  type: 'owner' | 'business' | 'admin';
  avatar?: string;
}

interface AppContextType {
  // Navigation State
  appStage: AppStage;
  setAppStage: (stage: AppStage) => void;
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  
  // Auth State
  currentUser: User | null;
  login: (email: string, type: 'owner' | 'business' | 'admin') => void;
  logout: () => void;

  // Data State
  vehicles: Vehicle[];
  addVehicle: (vehicle: Omit<Vehicle, 'id'>) => void;
  appointments: Appointment[];
  addAppointment: (apt: Omit<Appointment, 'id' | 'status'>) => void;
  
  // Notifications
  notifications: string[];
  addNotification: (msg: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// --- Mock Data ---
const INITIAL_VEHICLES: Vehicle[] = [
  { id: '1', brand: 'Honda', model: 'Civic', year: '2018', plate: 'ABC-1234', status: 'ok', mileage: 45000 },
  { id: '2', brand: 'Toyota', model: 'Corolla', year: '2020', plate: 'XYZ-9876', status: 'review', mileage: 62000 },
];

const INITIAL_APPOINTMENTS: Appointment[] = [
  { id: '1', workshopName: 'Oficina Mecânica São José', serviceName: 'Troca de Óleo', date: '15 Out, 14:00', status: 'pending', price: 450, vehicleId: '1' },
  { id: '2', workshopName: 'Auto Center Premium', serviceName: 'Alinhamento 3D', date: '22 Out, 09:30', status: 'confirmed', price: 120, vehicleId: '1' },
  { id: '3', workshopName: 'Oficina do Tiago', serviceName: 'Lavagem Completa', date: '01 Out, 10:00', status: 'completed', price: 80, vehicleId: '2' },
];

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [appStage, setAppStage] = useState<AppStage>(AppStage.AUTH);
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.USER);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [vehicles, setVehicles] = useState<Vehicle[]>(INITIAL_VEHICLES);
  const [appointments, setAppointments] = useState<Appointment[]>(INITIAL_APPOINTMENTS);
  const [notifications, setNotifications] = useState<string[]>([]);

  const login = (email: string, type: 'owner' | 'business' | 'admin') => {
    setCurrentUser({
      id: 'user-1',
      name: type === 'admin' ? 'Admin Master' : type === 'business' ? 'AutoFix Pro' : 'Roberto Silva',
      email,
      type,
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtpY0gBjrh0S_A0SWLmrWFfJwXh2jS1F11OU-TFKUZ1reuE-G1XjaQs1BcJD_q7GOLuPnl3oIYDU0LGMogJcEUqESkOOGIp-k80SrVljfAdkue1ICxzs-kWZG-p53TjXug355JTyblfMerA75XPKp9mWlCMqvjXzgd9VCowkMsNgLEaj4P5bXN1oRS8QFwaylgytbQb9KrSi-9AmWoYwvf8I4FYWTsnrktP4k1ASQN0Vt39-DggOwxkrVhwjO-BdIR1CvwX6K9hac'
    });
    
    if (type === 'admin') setAppStage(AppStage.ADMIN_DASHBOARD);
    else if (type === 'business') {
      setViewMode(ViewMode.BUSINESS);
      setAppStage(AppStage.BUSINESS_DASHBOARD);
    } else {
      setViewMode(ViewMode.USER);
      setAppStage(AppStage.DASHBOARD);
    }
    
    addNotification(`Bem-vindo de volta, ${type === 'admin' ? 'Admin' : 'Roberto'}!`);
  };

  const logout = () => {
    setCurrentUser(null);
    setAppStage(AppStage.AUTH);
    setViewMode(ViewMode.USER);
  };

  const addVehicle = (vehicle: Omit<Vehicle, 'id'>) => {
    const newVehicle = { ...vehicle, id: Math.random().toString(36).substr(2, 9) };
    setVehicles([...vehicles, newVehicle]);
    addNotification('Veículo adicionado com sucesso!');
  };

  const addAppointment = (apt: Omit<Appointment, 'id' | 'status'>) => {
    const newApt: Appointment = { ...apt, id: Math.random().toString(36).substr(2, 9), status: 'pending' };
    setAppointments([newApt, ...appointments]);
    addNotification('Solicitação de agendamento enviada!');
  };

  const addNotification = (msg: string) => {
    setNotifications(prev => [msg, ...prev]);
    // Auto remove after 3 seconds in a real app, keeping it simple here
    setTimeout(() => {
        setNotifications(prev => prev.filter(n => n !== msg));
    }, 3000);
  };

  return (
    <AppContext.Provider value={{
      appStage, setAppStage,
      viewMode, setViewMode,
      currentUser, login, logout,
      vehicles, addVehicle,
      appointments, addAppointment,
      notifications, addNotification
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
