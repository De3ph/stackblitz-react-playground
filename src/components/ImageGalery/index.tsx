import Frame from '../ImageGalery/Frame';
import scrollreveal from 'scrollreveal';
import { useOnScreen } from '../../hooks';
import { useRef } from 'react';

export default function Gallery() {
  const galleryRef = useRef<HTMLElement | any>();
  const isGalleryOnScreen = useOnScreen(galleryRef, '10px');

  const animOpt = {
    delay: 75,
    duration: 500,
    opacity: 0.2,
    easing: 'ease-in',
    useDelay: onload,
    reset: true, // ekrana her girdiğinde animasyonu tekrar yaptırıyor
  };

  if (isGalleryOnScreen) {
    scrollreveal().reveal('.Frame', animOpt);
  }

  return (
    <>
      <div ref={galleryRef} className="p-3 grid grid-cols-3 gap-3">
        <Frame />
        <Frame />
        <Frame />
        <Frame />
        <Frame />
        <Frame />
        <Frame />
        <Frame />
        <Frame />
        <Frame />
        <Frame />
        <Frame />
        <Frame />
        <Frame />
        <Frame />
        <Frame />
        <Frame />
        <Frame />
        <Frame />
        <Frame />
        <Frame />
        <Frame />
        <Frame />
        <Frame />
        <Frame />
        <Frame />
        <Frame />
        <Frame />
        <Frame />
        <Frame />
        <Frame />
        <Frame />
      </div>
    </>
  );
}
