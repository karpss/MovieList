import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import { Star, StarBorder } from '@mui/icons-material';

interface Likes {
  [index: number]: boolean;
}

interface Props {
  index: number;
}

function StarButton(props: Props) {
  const { index } = props;
  const [likes, setLikes] = useState<Likes>({});

  const handleLike = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setLikes((prevLikes) => {
      const newLikes = { ...prevLikes };
      newLikes[index] = !newLikes[index];
      return newLikes;
    });
  };

  return (
    <div data-testid="star-icon">
      <IconButton sx={{ position: 'absolute', right: 3 }} onClick={handleLike}>
        {likes[index] ? (
          <Star data-testid="star-button" />
        ) : (
          <StarBorder data-testid="star-border-icon" />
        )}
      </IconButton>
    </div>
  );
}

export default StarButton;
