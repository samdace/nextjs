import Head from 'next/head'
import Image from 'next/image'
import {createClient} from "contentful"
import Card from "../components/Card"

export async function getStaticProps(){
  const client = createClient({
    space : process.env.CONTENTFUL_SPACE_ID , 
    accessToken : process.env.CONTENTFUL_ACCESS_KEY, 
  })
  const res = await client.getEntries({ content_type : "posts"})

  return {
    props : { 
      posts : res.items
    }
  }
}
export default function Home({posts}) {
  console.log(posts)
  return (
    <div >
      <Head>
        <title>dz-dev.tk</title>
        <meta name="description" content="dz-dev.tk website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div >
    <Card />
    </div>
    </div>

  )
}
