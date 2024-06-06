import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { fetchProduct } from "@/app/utilities/fetchProduct";
import Image from "next/image";

export async function EmblaCarousel() {
  const products: Product[] = await fetchProduct();
  const favoritedProducts = products.filter((product) => product.favorited);

  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {favoritedProducts.map((product: Product) => (
            <div key={product.id}>
              <Image
                src={product.image}
                alt={product.body}
                width={50}
                height={50}
              />
            </div>
          ))}
          <div className="embla__slide">Slide 1</div>
          <div className="embla__slide">Slide 2</div>
          <div className="embla__slide">Slide 3</div>
        </div>
      </div>
      <button className="embla__prev" onClick={scrollPrev}>
        Prev
      </button>
      <button className="embla__next" onClick={scrollNext}>
        Next
      </button>
    </div>
  );
}
