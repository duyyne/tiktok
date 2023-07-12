import { useState } from 'react';
import { forwardRef } from 'react';

import images from '~/assets/images';

const Image = forwardRef(({ src, alt, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(images.noAvatar);
    };

    return <img ref={ref} src={fallback || src} alt={alt} {...props} onError={handleError} />;
});

export default Image;
