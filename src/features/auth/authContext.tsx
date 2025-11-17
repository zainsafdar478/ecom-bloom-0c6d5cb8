import { createContext, useContext, useState, ReactNode } from 'react';
import { toast } from 'sonner';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    // Mock login - replace with actual API call
    await new Promise(resolve => setTimeout(resolve, 500));
    const mockUser = { id: '1', email, name: email.split('@')[0] };
    setUser(mockUser);
    toast.success('Logged in successfully');
  };

  const signup = async (email: string, password: string, name: string) => {
    // Mock signup - replace with actual API call
    await new Promise(resolve => setTimeout(resolve, 500));
    const mockUser = { id: '1', email, name };
    setUser(mockUser);
    toast.success('Account created successfully');
  };

  const logout = () => {
    setUser(null);
    toast.success('Logged out successfully');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
