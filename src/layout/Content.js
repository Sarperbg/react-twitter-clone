import React, { useEffect, useState } from "react";
import Divider from "../components/Divider";
import FeedList from "../components/FeedList";
import TweetBox from "../components/TweetBox";
import db from "../firebase";
import { PopulerIcon } from "../icons/Icon";

const Content = () => {

    const [tweets, setTweets] = useState([]);

  useEffect(() => {
    db.collection("feed")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setTweets(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);
    return (
        <main className='flex-1 flex-col border-r border-l border-gray-extraLight'>
            <header className='sticky top-0 flex justify-between items-center p-4 border-b border-gray-extraLight bg-white'>
                <span className='font-bold text-xl text-gray-900'>Home</span>
                <PopulerIcon className="w-6 h-6" />
            </header>
            <div className='flex space-x-4 px-4 py-3'>
                <img src='https://pbs.twimg.com/profile_images/1483584131187589120/G3w-hQ-d_400x400.jpg'
                    alt='Profile'
                    className='w-11 h-11 rounded-full' 
                    />      
                    <TweetBox />
            </div>
            <Divider />
        </main>
    );
}

export default Content
