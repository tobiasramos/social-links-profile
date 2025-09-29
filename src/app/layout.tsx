import type { Metadata } from "next";
import "../../styles/globals.css";
import "../../styles/theme.css";

export const metadata: Metadata = {
  title: "Perfil de links sociais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="body">{children}</body>
    </html>
  );
}
