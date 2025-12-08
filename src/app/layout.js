import "./globals.css";


export const metadata = {
  title: "Sharad Vyas · Portfolio",
  description: "Frontend, AI, music and anime powered portfolio",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-50">
        {children}
      </body>
    </html>
  );
}
