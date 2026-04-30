import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wzgig.github.io/official-website/"),
  title: "长沙智碳联算科技有限责任公司 | 低碳电能与调频联合市场出清系统",
  description:
    "长沙智碳联算科技有限责任公司面向工业园区提供低碳电能管理、调频辅助服务、碳流核算与联合市场出清系统。",
  keywords: [
    "智碳联算",
    "低碳电能",
    "工业园区",
    "调频辅助服务",
    "电力市场出清",
    "碳流核算",
  ],
  openGraph: {
    title: "智碳联算 | 低碳电能与调频联合市场出清系统",
    description:
      "面向工业园区的低碳电能管理、调频辅助服务、碳流核算与联合市场出清系统。",
    url: "https://wzgig.github.io/official-website/",
    siteName: "智碳联算",
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: "https://wzgig.github.io/official-website/images/zhicarbon-eco-hero.png",
        width: 1672,
        height: 941,
        alt: "智碳联算生态能源主视觉",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
