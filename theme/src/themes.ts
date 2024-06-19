export interface Theme {
  themeType: string;
  backgroundColor: string;
  textColor: string;
}

export const lightTheme: Theme = {
  themeType: 'lightTheme',
  backgroundColor: '#ffffff',
  textColor: '#000000',
};

export const darkTheme: Theme = {
  themeType: 'darkTheme',
  backgroundColor: '#000000',
  textColor: '#ffffff',
};
