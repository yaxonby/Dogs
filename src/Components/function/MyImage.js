import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const MyImage = src => (
<div>
{console.log('src=', src.src)}
<LazyLoadImage src={src.src} />
</div>
);

export default MyImage;
