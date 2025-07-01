interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  type?: string;
}

export default function Image({ src, alt, type, ...props }: ImageProps) {
  return (
    <picture>
      <source srcSet={src} type="image/avif" />
      <source srcSet={src} type="image/webp" />
      <img alt={alt} src={src} {...props} />
    </picture>
  );
}
