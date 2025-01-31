export function getPageData(linkHeader: string) {
  const pageData = linkHeader?.split(',').find((link) => link.includes('last'));
  const match = pageData?.match(/[?&]page=(\d+)/);

  return match ? Number(match[1]) : undefined;
}
