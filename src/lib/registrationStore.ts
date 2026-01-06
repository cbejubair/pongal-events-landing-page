import * as XLSX from 'xlsx';
import { pongalEvents } from './eventData';

export interface Registration {
  timestamp: string;
  studentName: string;
  registerNumber: string;
  department: string;
  year: string;
  email: string;
  mobile: string;
  events: number[];
  teamName?: string;
}

const STORAGE_KEY = 'pongal_registrations';

export const getRegistrations = (): Registration[] => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const addRegistration = (registration: Omit<Registration, 'timestamp'>): boolean => {
  const registrations = getRegistrations();
  
  // Check for duplicate register number for same events
  const existingReg = registrations.find(
    (r) => r.registerNumber.toLowerCase() === registration.registerNumber.toLowerCase()
  );
  
  if (existingReg) {
    const duplicateEvents = registration.events.filter(e => existingReg.events.includes(e));
    if (duplicateEvents.length > 0) {
      return false; // Duplicate found
    }
    // Add new events to existing registration
    existingReg.events = [...new Set([...existingReg.events, ...registration.events])];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(registrations));
    return true;
  }
  
  const newRegistration: Registration = {
    ...registration,
    timestamp: new Date().toISOString(),
  };
  
  registrations.push(newRegistration);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(registrations));
  return true;
};

export const exportToExcel = (): void => {
  const registrations = getRegistrations();
  
  // Flatten data - one row per event per student
  const flatData: any[] = [];
  
  registrations.forEach((reg) => {
    reg.events.forEach((eventId) => {
      const event = pongalEvents.find((e) => e.id === eventId);
      if (event) {
        flatData.push({
          'Timestamp': new Date(reg.timestamp).toLocaleString('en-IN'),
          'Student Name': reg.studentName,
          'Register Number': reg.registerNumber,
          'Department': reg.department,
          'Year': reg.year,
          'Email': reg.email,
          'Mobile Number': reg.mobile,
          'Event Name': event.name,
          'Day': `Day ${event.day}`,
          'Category': event.category,
          'Team Name': reg.teamName || 'N/A',
        });
      }
    });
  });
  
  if (flatData.length === 0) {
    alert('No registrations to export!');
    return;
  }
  
  const worksheet = XLSX.utils.json_to_sheet(flatData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Registrations');
  
  // Auto-size columns
  const maxWidth = flatData.reduce((acc, row) => {
    Object.keys(row).forEach((key) => {
      const len = String(row[key]).length;
      acc[key] = Math.max(acc[key] || 10, len);
    });
    return acc;
  }, {} as Record<string, number>);
  
  worksheet['!cols'] = Object.keys(maxWidth).map((key) => ({
    wch: Math.min(maxWidth[key] + 2, 50),
  }));
  
  XLSX.writeFile(workbook, 'Pongal_Event_Registrations.xlsx');
};

export const clearRegistrations = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};
