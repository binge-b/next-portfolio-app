import Image from 'next/image'
import ArticleList from './components/ArticleList'

export default function Home() {
  return (
    <div className="md:flex">
      <section className="w-full md:w-2/3 flex flex-col items-center px-3">
        <ArticleList />
      </section>

      <aside className="w-full md:w-1/3 flex flex-col items-center px-3 md:pl-6">
        <div className="bg-white shadow-md rounded p-4 mb-6 mt-4">
          <h3 className="font-bold text-gray-900 mb-2">About Me</h3>
          <p className="text-gray-700">
          2021年より現職の総合歯科医院臨床研修施設で在庫管理アプリを使用したクラウド化プロジェクトを担当し、薬品原材料約1200アイテムのデータベース管理を行い、運用1年目で約340万円のコスト削減を実現しました！
          <br />（震災復興NPO→朝のニュース番組のスタッフ→農業... と少し変わった職務経歴を持っています）
          <br />膨大な事務作業を効率化できないかと、ChatGPTを使ったことがきっかけでプログラミングと出会い、7月よりインターネットアカデミーのAIエンジニア育成コースを受講。現在JavaScript、TypeScript、JSX、tailwindcss、React、Next.jsを独学で勉強しながら、良いアイディアをフルスタックで開発できるようになることを目指して、今日も楽しくプログラミング中～！ ^o^
          </p>
        </div>

        <div className="bg-white shadow-md rounded p-4 mb-6 mt-4 w-full">
          <h3 className="font-bold text-gray-900 mb-2">Blog Category</h3>
          <ul>
            <li className="text-gray-600">
              <a href="#">Design</a>
            </li>
            <li className="text-gray-600">
              <a href="#">WebApp</a>
            </li>
            <li className="text-gray-600">
              <a href="#">Programming</a>
            </li>
            <li className="text-gray-600">
              <a href="#">Thinking</a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  )
}
