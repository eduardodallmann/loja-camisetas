'use client';

import { useState } from 'react';
import Link from 'next/link';

import { RadioGroup } from '@headlessui/react';

import { sizesDTO, type Product } from '~/entities/product';

import { Icon } from '../commons/icon';
import { Image } from './image';
import { Styled } from './styled';

export const ProductViewer = ({ product }: { product: Product }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  return (
    <Styled.Container>
      <nav>
        <Styled.Navigate.Back>
          <Icon icon="navigate_before" className="-mt-[1px]" />
          <Link href="/" className="font-medium">
            Voltar
          </Link>
        </Styled.Navigate.Back>
      </nav>

      <Styled.ImageGalery.Wrapper>
        {product.image.map(({ src, alt }, index) => (
          <Image key={src.big} src={src.big} alt={alt} index={index} />
        ))}
      </Styled.ImageGalery.Wrapper>

      <Styled.ProductInfo.Wrapper>
        <Styled.ProductInfo.Title.Wrapper>
          <Styled.ProductInfo.Title.Title>
            {product.name}
          </Styled.ProductInfo.Title.Title>
        </Styled.ProductInfo.Title.Wrapper>

        <Styled.ProductInfo.Options.Wrapper>
          <Styled.ProductInfo.Options.Price>
            R${' '}
            {product.price.toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
            })}
          </Styled.ProductInfo.Options.Price>

          <div className="mt-10">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Cor</h3>

              <RadioGroup
                value={selectedColor}
                onChange={setSelectedColor}
                className="mt-4"
              >
                <div className="flex items-center space-x-3">
                  {product.colors.map((color) => (
                    <RadioGroup.Option
                      key={color}
                      value={color}
                      className={({ checked }) =>
                        Styled.ProductInfo.Options.Color({
                          checked,
                          color,
                        })
                      }
                    >
                      <span className="h-8 w-8 rounded-full" />
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            </div>

            <div className="mt-10">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900">Tamanhos</h3>
              </div>

              <RadioGroup
                value={selectedSize}
                onChange={setSelectedSize}
                className="mt-4"
              >
                <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                  {sizesDTO.map((size) => (
                    <RadioGroup.Option
                      key={size.value}
                      value={size.value}
                      disabled={!product.sizes.includes(size.value)}
                      className={({ active }) =>
                        Styled.ProductInfo.Options.Size({
                          active,
                          disabled: !product.sizes.includes(size.value),
                        })
                      }
                    >
                      {({ active, checked }) => (
                        <>
                          <RadioGroup.Label as="span">
                            {size.label}
                          </RadioGroup.Label>
                          {product.sizes.includes(size.value) ? (
                            <Styled.ProductInfo.Options.SizeActive
                              active={active}
                              checked={checked}
                              aria-hidden="true"
                            />
                          ) : (
                            <Styled.ProductInfo.Options.SizeDisabled />
                          )}
                        </>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            </div>

            <Styled.AddToCart type="button">
              Adicionar ao carrinho
            </Styled.AddToCart>
          </div>
        </Styled.ProductInfo.Options.Wrapper>

        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
          <div>
            <h3 className="sr-only">Description</h3>

            <div className="space-y-6">
              <p className="text-base text-gray-900">{product.description}</p>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-sm font-medium text-gray-900">
              Características
            </h3>

            <div className="mt-4">
              <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                {product.highlights.map((highlight) => (
                  <li key={highlight} className="text-gray-400">
                    <span className="text-gray-600">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-sm font-medium text-gray-900">Detalhes</h2>

            <div className="mt-4 space-y-6">
              <p className="text-sm text-gray-600">{product.details}</p>
            </div>
          </div>
        </div>
      </Styled.ProductInfo.Wrapper>
    </Styled.Container>
  );
};
