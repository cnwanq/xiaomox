import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const FeaturesSection = dynamic(() => import("@/components/FeaturesSection"), {
  loading: () => <p>加载中...</p>,
});

const ArticlesSection = dynamic(() => import("@/components/ArticlesSection"), {
  loading: () => <p>加载中...</p>,
});

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="relative mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-80 rounded-lg"></div>
        <div className="relative z-10 text-center py-24 px-6">
          <h1 className="text-5xl font-bold mb-4 text-white">欢迎来到小模型</h1>
          <p className="text-xl text-gray-100 mb-8">
            分享学习，提供C++训练营，在线评测系统助力您的编程之旅
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            <Link href="/register">立即开始</Link>
          </Button>
        </div>
      </div>

      <Suspense fallback={<div>加载特性...</div>}>
        <FeaturesSection />
      </Suspense>

      <Suspense fallback={<div>加载文章...</div>}>
        <ArticlesSection />
      </Suspense>
    </div>
  );
}
