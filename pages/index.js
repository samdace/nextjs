import Head from 'next/head'
import Image from 'next/image'
import Card from "../components/Card"
export default function Home() {
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
