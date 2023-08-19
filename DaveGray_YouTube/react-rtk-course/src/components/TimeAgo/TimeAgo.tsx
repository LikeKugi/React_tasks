import { FC, JSX } from 'react';
import { parseISO, formatDistanceToNow } from 'date-fns';

interface ITimeAgoProps {
  timestamp?: string
}

const TimeAgo: FC<ITimeAgoProps> = ({timestamp}): JSX.Element => {
  let timeAgo = '';
  if (timestamp) {
    const date  = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }
  return (
    <span title={timestamp}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  );
};
export default TimeAgo;
