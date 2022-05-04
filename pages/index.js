import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Login from '../components/Login'
import { getProviders, getSession, useSession } from "next-auth/react";

const index = ({trendingResults,followResults, providers}) => {
  const {data:session} = useSession();

  if(!session) return <Login providers={providers}/>

  return (
    <div className=''>
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-[#000] min-h-screen flex max-w-[1500px] mx-auto'>
        <Sidebar/>
        <Feed/>
        {session.user.name}
        {/* Widgets */}

        {/* Modal */}
      </main>
    </div>
  )
}

export default index;

export async function getServerSideProps(context) {
  const trendingResults = await fetch("https://jsonkeeper.com/b/NKEV").then(
    (res) => res.json()
  );
  const followResults = await fetch("https://jsonkeeper.com/b/WWMJ").then(
    (res) => res.json()
  );
  const providers = await getProviders();
  // const session = await getSession(context);

  return {
    props: {
      trendingResults,
      followResults,
      providers,
      // session,
    },
  };
}