import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClientLayout } from "@/components/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "小模型 - 分享学习，C++训练营",
  description: "小模型是一个专注于分享学习资源和提供C++训练营的平台。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body className={`${inter.className} bg-gray-50`}>
        <ClientLayout>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}
