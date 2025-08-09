import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL } from '../../utils/constants';

const feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);

  const getFeed = async () =>{
    if(feed) return;
    try {
      const feed = await axios.get(BASE_URL + "/user/feed" , {
        withCredentials : true,
      });
      dispatch(addFeed(feed.data))
    } catch (error) {
      console.log(error);
    }

  };

  useEffect(() => {
    getFeed();
  });

  if(!feed) return;

  return (
    <div>
      feed && (
        <div>
          
        </div>
      )
    </div>
  )
}

export default feed
