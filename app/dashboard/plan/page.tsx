import { Metadata } from 'next';
import PlanForm from '@/app/ui/plan/plan-form';
import { fetchFilteredCareers, fetchFilteredColleges } from '@/app/lib/data';

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
  const careers = await fetchFilteredCareers(query, currentPage);
  const colleges = await fetchFilteredColleges(query, currentPage);
  return <PlanForm careers={careers} colleges={colleges} />;
}
