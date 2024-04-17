import { createContext, useState } from "react";
export const LikeButtonContext = createContext(null);

export default function LikeButtonContextProvider(props) {
  const [likes, setLikes] = useState(Math.floor(Math.random() * 250));
  const [dislikes, setDislikes] = useState(Math.floor(Math.random() * 20));
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const toggleLike = () => {
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
      if (disliked) {
        setDislikes(dislikes - 1);
        setDisliked(false);
      }
    } else {
      setLikes(likes - 1);
      setLiked(false);
    }
  };

  const toggleDislike = () => {
    if (!disliked) {
      setDislikes(dislikes + 1);
      setDisliked(true);
      if (liked) {
        setLikes(likes - 1);
        setLiked(false);
      }
    } else {
      setDislikes(dislikes - 1);
      setDisliked(false);
    }
  };

  return (
    <LikeButtonContext.Provider
      value={{
        likes,
        setLikes,
        dislikes,
        setDislikes,
        liked,
        setLiked,
        disliked,
        setDisliked,
        toggleDislike,
        toggleLike,
      }}
    >
      {props.children}
    </LikeButtonContext.Provider>
  );
}
