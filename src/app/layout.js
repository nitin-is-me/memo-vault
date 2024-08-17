// import { Inter } from "next/font/google";
import "./App.css"
// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Memo Vault",
  description: "A minimalist note taking web-app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
