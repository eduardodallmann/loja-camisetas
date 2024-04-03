import { Styled } from './styled';

export const Image = ({
  src,
  alt,
  index,
}: {
  src: string;
  alt: string;
  index: number;
}) => {
  return (
    <Styled.ImageGalery.Image hidden={Boolean(index)}>
      <img src={src} alt={alt} className="w-full object-cover object-center" />
    </Styled.ImageGalery.Image>
  );
};
