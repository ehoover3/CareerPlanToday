'use client';

import { formatCurrencyToNearestDollar } from '@/app/lib/utils';
import { useState, useEffect } from 'react';

export default function PlanForm({ careers }: { careers: any }) {
  const [inputWidth, setInputWidth] = useState<string>('196px');
  useEffect(() => {
    const handleResize = () => {
      setInputWidth(window.innerWidth > 640 ? '196px' : '216.5px');
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [careerWithCollegeSalary, setCareerWithCollegeSalary] =
    useState<number>(0);

  const [careerWithoutCollegeSalary, setCareerWithoutCollegeSalary] =
    useState<number>(0);

  const [lifeYearsEmployed, setLifeYearsEmployed] = useState<number>(40);

  const [lifeEarningsWithCollege, setLifeEarningsWithCollege] =
    useState<number>(0);

  const [lifeEarningsWithoutCollege, setLifeEarningsWithoutCollege] =
    useState<number>(0);

  const [netMoreEarningsWithCollege, setNetMoreEarningsWithCollege] =
    useState<number>(0);

  const handleChangeCareerWithCollege = async (event: any) => {
    setCareerWithCollegeSalary(event.target.value);
  };

  const handleChangeCareerWithoutCollege = async (event: any) => {
    setCareerWithoutCollegeSalary(event.target.value);
  };

  const handleLifeYearsEmployed = async (event: any) => {
    setLifeYearsEmployed(event.target.value);
  };

  useEffect(() => {
    setLifeEarningsWithCollege(careerWithCollegeSalary * lifeYearsEmployed);
  }, [careerWithCollegeSalary, lifeYearsEmployed]);

  useEffect(() => {
    setLifeEarningsWithoutCollege(
      careerWithoutCollegeSalary * (lifeYearsEmployed + 4),
    );
  }, [careerWithoutCollegeSalary, lifeYearsEmployed]);

  useEffect(() => {
    setNetMoreEarningsWithCollege(
      lifeEarningsWithCollege - lifeEarningsWithoutCollege,
    );
  }, [lifeEarningsWithCollege, lifeEarningsWithoutCollege]);

  setNetMoreEarningsWithCollege;

  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Life Earnings Estimate
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            How much more money can you earn with a college degree?
          </p>

          <div
            className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8"
            style={{ maxWidth: '450px' }}
          >
            <div className="min-w-[400px]">
              <div className="col-span-full flex items-center justify-between">
                <div>Career With College</div>
                <div className="mt-2">
                  <select
                    id="careerWithCollege"
                    name="careerWithCollege"
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    onChange={handleChangeCareerWithCollege}
                  >
                    <option value="" disabled selected>
                      Select Career
                    </option>
                    {careers.map((career: any) => (
                      <option key={career.name} value={career.salary}>
                        {career.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="col-span-full flex items-center justify-between">
                <div>Career Without College</div>
                <div className="mt-2">
                  <select
                    id="careerWithoutCollege"
                    name="careerWithoutCollege"
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    onChange={handleChangeCareerWithoutCollege}
                  >
                    <option value="" disabled selected>
                      Select Career
                    </option>
                    {careers.map((career: any) => (
                      <option key={career.name} value={career.salary}>
                        {career.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="col-span-full flex items-center justify-between">
                <div>Years Employed</div>
                <div className="mt-2">
                  <input
                    type="number"
                    name="lifeYearsEmployed"
                    id="lifeYearsEmployed"
                    autoComplete="address-level2"
                    className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue="40"
                    style={{
                      width: window.innerWidth > 640 ? '196px' : '216.5px',
                    }}
                    onChange={handleLifeYearsEmployed}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <div>
                <div className="col-span-full flex items-center justify-between">
                  <div className="mt-2">Salary with College</div>
                  <div className="mt-2">
                    {careerWithCollegeSalary
                      ? formatCurrencyToNearestDollar(careerWithCollegeSalary)
                      : ''}{' '}
                  </div>
                </div>
                <div className="col-span-full flex items-center justify-between">
                  <div className="mt-2 ">Years Employed</div>
                  <div className="underline">x {lifeYearsEmployed}</div>
                </div>
                <div className="col-span-full flex items-center justify-between">
                  <div className="mt-2">Life Earnings with College</div>
                  <div>
                    {formatCurrencyToNearestDollar(lifeEarningsWithCollege)}
                  </div>
                </div>{' '}
              </div>

              <div className="mt-8"></div>

              <div className="col-span-full flex items-center justify-between">
                <div>Salary without College</div>
                <div>
                  {careerWithoutCollegeSalary
                    ? formatCurrencyToNearestDollar(careerWithoutCollegeSalary)
                    : ''}
                </div>
              </div>
              <div className="col-span-full flex items-center justify-between">
                <div className="mt-2">Years Employed </div>{' '}
                <div className="mt-2 underline">x {lifeYearsEmployed + 4}</div>{' '}
              </div>

              <div className="col-span-full flex items-center justify-between">
                <div className="mt-2">Life Earnings without College</div>
                <div className="mt-2">
                  {formatCurrencyToNearestDollar(lifeEarningsWithoutCollege)}
                </div>
              </div>

              <div className="mt-8"></div>
              <div className="col-span-full flex items-center justify-between">
                <div className="mt-2">Earnings with College</div>
                <div className="mt-2">
                  {formatCurrencyToNearestDollar(lifeEarningsWithCollege)}
                </div>
              </div>

              <div className="col-span-full flex items-center justify-between">
                <div className="mt-2">Earnings without College</div>

                <div className="mt-2 underline">
                  - {formatCurrencyToNearestDollar(lifeEarningsWithoutCollege)}{' '}
                </div>
              </div>

              <div className="col-span-full flex items-center justify-between">
                <div className="mt-2">Net Earnings with College</div>

                <div className="mt-2">
                  {formatCurrencyToNearestDollar(netMoreEarningsWithCollege)}{' '}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            College Degree Cost
          </h2>
          <div className="mt-2">Freshmen Year Cost</div>
          <div className="mt-2">Sophomore Year Cost</div>
          <div className="mt-2">Junior Year Cost</div>
          <div className="mt-2">Senior Year Cost</div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Funding Plan
          </h2>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Download PDF
        </button>
      </div>
    </form>
  );
}
