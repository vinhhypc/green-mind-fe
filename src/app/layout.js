import { Roboto } from 'next/font/google';
import { ThemeProvider } from '@/providers/theme-provider';
import ReactQueryProviders from '@/providers/react-query-provider';
import './globals.css';

export const metadata = {
  title: 'Green Mind',
  description: 'Green Mind app',
};

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <ReactQueryProviders>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </ReactQueryProviders>
      </body>
    </html>
  );
}
