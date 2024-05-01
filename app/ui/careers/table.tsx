import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
import {
  formatCurrencyToNearestCent,
  formatCurrencyToNearestDollar,
} from '@/app/lib/utils';
import { fetchFilteredCareers } from '@/app/lib/data';

export default async function CareersTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const careers = await fetchFilteredCareers(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {careers?.map((career) => (
              <div
                key={career.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p className="text-xl font-medium">{career.name}</p>
                    </div>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p
                    // className="text-xl font-medium"
                    >
                      {formatCurrencyToNearestDollar(career.salary)} Salary
                    </p>
                    <p>{formatCurrencyToNearestDollar(career.hourly)} Hourly</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateInvoice id={career.id} />
                    <DeleteInvoice id={career.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Career
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Hourly
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Salary
                </th>

                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {careers?.map((career) => (
                <tr
                  key={career.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap px-3 py-3">{career.name}</td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatCurrencyToNearestDollar(career.hourly)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatCurrencyToNearestDollar(career.salary)}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateInvoice id={career.id} />
                      <DeleteInvoice id={career.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
