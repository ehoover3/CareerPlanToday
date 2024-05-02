import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
import { formatCurrencyToNearestDollar } from '@/app/lib/utils';
import { fetchFilteredCareers, fetchFilteredColleges } from '@/app/lib/data';

export default async function CareersTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const colleges = await fetchFilteredColleges(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {colleges?.map((college) => (
              <div
                key={college.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p className="text-xl font-medium">{college.name}</p>
                    </div>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p>
                      {formatCurrencyToNearestDollar(
                        college.total_cost_in_state_off_campus,
                      )}{' '}
                      In-State Cost, Live Off Campus
                    </p>
                    <p>
                      {formatCurrencyToNearestDollar(
                        college.total_cost_out_of_state_off_campus,
                      )}{' '}
                      Out-of-State Cost, Live Off Campus
                    </p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateInvoice id={college.id} />
                    <DeleteInvoice id={college.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  College
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  State
                </th>

                <th scope="col" className="px-3 py-5 font-medium">
                  <div className="flex flex-col items-center">
                    <span>In-State Cost</span>
                    <span>Live Off Campus</span>
                  </div>
                </th>

                <th scope="col" className="items-center px-3 py-5 font-medium">
                  <div className="flex flex-col items-center">
                    <span>Out-of-State Cost</span>
                    <span>Live Off Campus</span>
                  </div>
                </th>

                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {colleges?.map((college) => (
                <tr
                  key={college.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap px-3 py-3">
                    {college.name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {college.state}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3 text-center">
                    {formatCurrencyToNearestDollar(
                      college.total_cost_in_state_off_campus,
                    )}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3 text-center">
                    {formatCurrencyToNearestDollar(
                      college.total_cost_out_of_state_off_campus,
                    )}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateInvoice id={college.id} />
                      <DeleteInvoice id={college.id} />
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
