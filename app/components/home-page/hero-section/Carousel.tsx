import Image from "next/image";

export function Carousel() {
  return (
    <div className="carouselContainer">
      <div>
        <Image
          src="/images/chocolate-coffee.png"
          alt=""
          width={250}
          height={250}
        />
        <Image
          src="/images/chocolate-coffee.png"
          alt=""
          width={250}
          height={250}
        />
        <Image
          src="/images/chocolate-coffee.png"
          alt=""
          width={250}
          height={250}
        />
      </div>
    </div>
  );
}
