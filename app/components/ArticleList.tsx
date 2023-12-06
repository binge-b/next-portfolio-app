import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ArticleList = () => {
  return (
    <div>
        <article className="shadow my-4 flex flex-col">
          <Link href="#" className="hover:opacity-75 duration-300">
          <Image
          src="/work03.png" 
          alt=""
          width={1280}
          height={600}
          className="h-2/5 w-full object-cover"
          />
          </Link>
          <div className="bg-gray-100 flex flex-col justify-start p-6">
            <Link href="#" className="text-blue-800 pb-4 font-bold">
              WebApp
            </Link>
            <h3>
              <Link href="#" className="text-slate-900 text-3xl font-bold hover:text-gray-700">
              架空の開催中の特別展情報を集めたアートニュースWebアプリケーションを制作しました！
              </Link>
            </h3>
            <p className="text-sm pb-3 text-slate-900">published on 2023/12/01</p>
            <Link href="#" className="pb-6 text-slate-900">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus eaque nam voluptates exercitationem veritatis quia odio, sed accusantium magni quae esse fuga, perspiciatis sapiente non vel culpa eius porro! Porro.</Link>
            <Link href="#" className="uppercase font-semibold text-amber-700 hover:text-amber-800 duration-300">続きを読む</Link>
          </div>
        </article>
        <article className="shadow my-4 flex flex-col">
          <Link href="#" className="hover:opacity-75 duration-300">
          <Image
          src="/work02.png" 
          alt=""
          width={1280}
          height={600}
          className="h-2/5 w-full object-cover"
          />
          </Link>
          <div className="bg-gray-100 flex flex-col justify-start p-6">
            <Link href="#" className="text-blue-800 pb-4 font-bold">
              WebApp
            </Link>
            <h3>
              <Link href="#" className="text-slate-900 text-3xl font-bold hover:text-gray-700">
              架空のモダン民藝陶器のオンラインショップサイトを作ってみました！
              </Link>
            </h3>
            <p className="text-sm pb-3 text-slate-900">published on 2023/11/14</p>
            <Link href="#" className="pb-6 text-slate-900">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus eaque nam voluptates exercitationem veritatis quia odio, sed accusantium magni quae esse fuga, perspiciatis sapiente non vel culpa eius porro! Porro.</Link>
            <Link href="#" className="uppercase font-semibold text-amber-700 hover:text-amber-800 duration-300">続きを読む</Link>
          </div>
        </article>
        <article className="shadow my-4 flex flex-col">
          <Link href="#" className="hover:opacity-75 duration-300">
          <Image
          src="/work01.png" 
          alt=""
          width={1280}
          height={600}
          className="h-2/5 w-full object-cover"
          />
          </Link>
          <div className="bg-gray-100 flex flex-col justify-start p-6">
            <Link href="#" className="text-blue-800 pb-4 font-bold">
              WebApp
            </Link>
            <h3>
              <Link href="#" className="text-slate-900 text-3xl font-bold hover:text-gray-700">
              架空の建築設計事務所のLPを作成しました。
              </Link>
            </h3>
            <p className="text-sm pb-3 text-slate-900">published on 2023/11/8</p>
            <Link href="#" className="pb-6 text-slate-900">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus eaque nam voluptates exercitationem veritatis quia odio, sed accusantium magni quae esse fuga, perspiciatis sapiente non vel culpa eius porro! Porro.</Link>
            <Link href="#" className="uppercase font-semibold text-amber-700 hover:text-amber-800 duration-300">続きを読む</Link>
          </div>
        </article>
    </div>
  )
}

export default ArticleList