export function getPageData(linkHeader: string) {
  const pageData = linkHeader?.split(',').find((link) => link.includes('last'));
  const match = pageData?.match(/[?&]page=(\d+)/);

  return match ? Number(match[1]) : undefined;
}

export const isNumber = (v: unknown) =>
  (typeof v === 'number' && v - v === 0) ||
  (typeof v === 'string' && Number.isFinite(+v) && v.trim() !== '');
