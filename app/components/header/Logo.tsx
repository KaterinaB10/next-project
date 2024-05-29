import Image from "next/image";

type LogoType = {
  src: string;
  alt: string;
};

export function Logo({ src, alt }: LogoType) {
  return (
    <div>
      <Image src={src} alt={alt} width={50} height={50} />
    </div>
  );
}
