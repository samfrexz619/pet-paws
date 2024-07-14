import React from 'react';
import EmojiIcons from '../ui/EmojiIcon';


interface Props {
  addLikedItems: (action: string) => void;
}

const ReactionBtns: React.FC<Props> = (props) => {
  const { addLikedItems } = props;

  const reactionCls = `md:w-16 w-12 h-12 text-white md:h-16 flex items-center justify-center`

  return (
    <>
      <button onClick={() => addLikedItems('like')} className={`${reactionCls} bg-breed rounded-s-10`}>
        <EmojiIcons name='like' />
      </button>
      <button onClick={() => addLikedItems('favorite')} className={`${reactionCls} bg-accent`}>
        <EmojiIcons name='favorite' />
      </button>
      <button onClick={() => addLikedItems('sad')} className={`${reactionCls} bg-gallery rounded-e-10`}>
        <EmojiIcons name='sad' />
      </button>
    </>
  );
}

export default ReactionBtns;
