import Image from 'next/image';
import type { ComponentProps } from 'react';
import { sitePath } from '@/lib/site-url';

export default function SiteImage(props: ComponentProps<typeof Image>) {
  const src = typeof props.src === 'string' && props.src.startsWith('/')
    ? sitePath(props.src)
    : props.src;
  return <Image {...props} src={src} />;
}
