import Link from "next/link";

// 假数据：项目详情
const projectDetails: Record<string, { title: string; description: string; content: string }> = {
  calculator: {
    title: "我的第一个AI项目",
    description: "用Claude帮我写的计时器",
    content: "这是一个使用 React 和 AI 技术构建的计时器应用。它具有开始、暂停、重置功能，界面简洁美观。"
  },
  todo: {
    title: "待办事项清单",
    description: "一个简洁的任务管理应用",
    content: "功能完整的待办事项应用，支持添加、删除、标记完成任务。使用 TypeScript 和 Tailwind CSS 开发。"
  },
  weather: {
    title: "天气查询工具",
    description: "实时获取城市天气信息",
    content: "通过调用第三方天气 API，实时获取并显示城市的天气信息，包括温度、湿度、风速等数据。"
  }
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectDetails[params.slug];

  // 如果项目不存在，显示 404
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-zinc-600 mb-8">项目未找到</p>
          <Link href="/" className="text-blue-600 hover:underline">
            返回首页
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-block mb-8 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
        >
          ← 返回首页
        </Link>

        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg border border-zinc-200 dark:border-zinc-800 p-8">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
            {project.description}
          </p>
          <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
              项目详情
            </h2>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {project.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
