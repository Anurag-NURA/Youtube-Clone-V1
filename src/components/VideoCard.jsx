import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';

export const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  return (
    <div>
      <Card sx={{ width: { xs: '100%', md: '320px', sm: '358px' }, boxShadow: 'none', borderRadius: 0 }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <CardMedia
            alt={snippet?.title}
            sx={{
              width: { xs: '100%', sm: '358px', md: '320px' },
              height: 150
            }}
            image={snippet?.thumbnails?.high?.url}
          />
        </Link>

        <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }} >
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography variant="subtitle1" fontWeight="bod" color='#FFF'>
              {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </Typography>
          </Link>
          <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
            <Typography variant="subtitle2" fontWeight="bod" color='gray'>
              {snippet?.channelTitle || demoChannelTitle}
              <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
            </Typography>
          </Link>
        </CardContent>
      </Card>
    </div >
  )
};
