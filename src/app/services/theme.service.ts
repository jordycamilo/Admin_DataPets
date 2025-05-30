import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  setTheme(theme: 'light' | 'dark') {
    // Aplica la clase al <html> para que :root.light-theme / :root.dark-theme funcionen
    const root = document.documentElement;
    root.classList.remove('light-theme', 'dark-theme');
    root.classList.add(`${theme}-theme`);
    localStorage.setItem('appTheme', theme);
  }

  getTheme(): 'light' | 'dark' {
    return (localStorage.getItem('appTheme') as 'light' | 'dark') || 'light';
  }
}
