import Image from "next/image";
import Link from "next/link";

// 项目数据数组（添加 slug 用于路由）
const projects = [
  {
    id: 1,
    slug: "calculator",
    title: "我的第一个AI项目",
    description: "用Claude帮我写的计时器",
    tags: ["React", "AI"]
  },
  {
    id: 2,
    slug: "todo",
    title: "待办事项清单",
    description: "一个简洁的任务管理应用",
    tags: ["TypeScript", "Tailwind"]
  },
  {
    id: 3,
    slug: "weather",
    title: "天气查询工具",
    description: "实时获取城市天气信息",
    tags: ["API", "JavaScript"]
  }
];

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-8 text-center sm:items-start sm:text-left w-full">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            我的作品集
          </h1>

          {/* 用 map 遍历数组渲染卡片 */}
          <div className="flex flex-col gap-4 w-full">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/project/${project.slug}`}
                className="w-full bg-white dark:bg-zinc-900 rounded-2xl shadow-lg border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer block"
              >
                <div className="p-6">
                  <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                    {project.title}
                  </h2>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
