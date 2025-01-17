import React from 'react';
import { Video } from '../types';

import { JsonLd, JsonLdProps } from './jsonld';
import { setVideo } from '../utils/schema/setVideo';

export interface VideoJsonLdProps extends JsonLdProps, Video {}

function VideoJsonLd({
  type = 'Video',
  keyOverride,
  ...rest
}: VideoJsonLdProps) {
  const data = setVideo(rest, true);
  return (
    <JsonLd type={type} keyOverride={keyOverride} {...data} scriptKey="Video" />
  );
}

export default VideoJsonLd;
