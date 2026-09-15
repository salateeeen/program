import { title } from "process";
import Navigation from "./components/Navigation";


export const metadata = {
  title : "mazreatak"
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="min-h-full flex flex-col">
        <div>
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
