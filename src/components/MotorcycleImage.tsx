import { useState } from "react";

interface MotorcycleImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export function MotorcycleImage({ src, alt, className, ...props }: MotorcycleImageProps) {
  const [imageError, setImageError] = useState(false);

  // Fallback image jika gambar gagal load
  const fallbackImage = "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=400&h=400&fit=crop";

  return (
    <img
      src={imageError ? fallbackImage : src}
      alt={alt}
      className={className}
      onError={() => setImageError(true)}
      {...props}
    />
  );
}
