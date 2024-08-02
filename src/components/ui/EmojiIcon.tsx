


interface Prop {
  name: string;
}
const EmojiIcons = ({ name }: Prop) => {
  return (
    <span>
      {
        name === 'like'
          ? <svg width='30' height='30' viewBox='0 0 30 30'>
            <use xlinkHref="/sprite.svg#happy" />
          </svg>
          : name === 'favorite'
            ? <svg width='30' height='26' viewBox='0 0 30 26'>
              <use xlinkHref="/sprite.svg#like" />
            </svg>
            : name === 'sad'
              ? <svg width='30' height='30' viewBox='0 0 30 30'>
                <use xlinkHref="/sprite.svg#sad" />
              </svg>
              : name === 'asc'
                ? <svg width="19" height="20" viewBox="0 0 19 20">
                  <use xlinkHref="/sprite.svg#asc" />
                </svg>
                : <svg width="19" height="20" viewBox="0 0 19 20">
                  <use xlinkHref="/sprite.svg#desc" />
                </svg>
      }
    </span>
  );
}

export default EmojiIcons;