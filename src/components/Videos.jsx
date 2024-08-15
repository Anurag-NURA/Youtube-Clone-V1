import React from 'react';
import { Stack, Box } from '@mui/material';

import { VideoCard, ChannelCard } from './';

export const Videos = ({ videos, direction }) => {
  if (!videos?.length) return 'Loading...';

  return (
    <Stack direction={direction || "row"} flexWrap="wrap" paddingY={2} justifyContent="center" gap={2} sx={{ px: 'auto' }}>
      {videos.map((item, index) => (
        item.id.playlistId ? null : (
          <Box key={index}>
            {item.id.channelId && <ChannelCard channelDetail={item} />}
            {item.id.videoId && <VideoCard video={item} />}
          </Box>)
      ))}
    </Stack>
  )
};
