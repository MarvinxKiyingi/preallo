import { usePathname } from 'next/navigation';

export const useDashboardLabel = (slug: string = 'Dashboard') => {
  const pathname = usePathname(); // Assuming usePathname() is accessible here
  const dashboardString = 'Dashboard';

  if (!pathname.includes('month')) return dashboardString;

  const shortMonthLabel = slug
    ? slug.charAt(0).toUpperCase() + slug.slice(1, 3)
    : '';

  return `${dashboardString} | ${shortMonthLabel}`;
};
