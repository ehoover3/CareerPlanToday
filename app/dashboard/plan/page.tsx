import { Metadata } from 'next';
import PlanForm from '@/app/ui/plan/plan-form';
import { fetchCollegesPages } from '@/app/lib/data';

import { fetchFilteredCareers } from '@/app/lib/data';

export const metadata: Metadata = {
  title: 'Plan',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchCollegesPages(query);
  const careers = await fetchFilteredCareers(query, currentPage);

  return <PlanForm careers={careers} />;
}
