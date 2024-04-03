'use client';

import { w } from 'windstitch';

import { Icon } from '~/components/commons/icon';

const EmptyStateContainer = w.div(`
  w-full
  container
  px-4
  mx-auto
  grid
  justify-items-center
`);

const EmptyStateTitle = w.h2(`
  text-slate-800
  dark:text-slate-100
  font-bold
`);

const EmptyStateParagraph = w.p(`
  mb-6
  text-center
  text-lg
  text-gray-500
`);

export function EmptyState({
  title,
  paragraph,
}: {
  title: string;
  paragraph: string;
}) {
  return (
    <EmptyStateContainer>
      <Icon
        size="icon-xxxx-large"
        icon="inbox"
        className="mb-4 text-gray-300 dark:text-gray-500"
      />
      <EmptyStateTitle>{title}</EmptyStateTitle>
      <EmptyStateParagraph>{paragraph}</EmptyStateParagraph>
    </EmptyStateContainer>
  );
}
