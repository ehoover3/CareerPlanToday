'use client';

import { formatCurrencyToNearestDollar } from '@/app/lib/utils';
import { useState, useEffect } from 'react';

export default function PlanForm({
  careers,
  colleges,
}: {
  careers: any;
  colleges: any;
}) {
  const allStates = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ];

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

  const [filterCollegesByState, setFilterCollegesByState] = useState('');

  const [userStateResidency, setUserStateResidency] = useState<string>('');

  const [selectedCollege, setSelectedCollege] = useState<any>({});
  const [selectedCollegeCost, setSelectedCollegeCost] = useState<number>(0);
  const [totalValueOfCollege, setTotalValueOfCollege] = useState<number>(0);

  const [sortedColleges, setSortedColleges] = useState<any>([]);

  const handleChangeCareerWithCollege = async (event: any) => {
    setCareerWithCollegeSalary(event.target.value);
  };

  const handleChangeCareerWithoutCollege = async (event: any) => {
    setCareerWithoutCollegeSalary(event.target.value);
  };

  const handleLifeYearsEmployed = async (event: any) => {
    setLifeYearsEmployed(event.target.value);
  };

  const handleChangeStateResidency = async (event: any) => {
    setUserStateResidency(event.target.value);
  };

  const handleSelectedCollege = async (event: any) => {
    setSelectedCollege(JSON.parse(event.target.value));
  };

  const handleFilterCollegesByState = async (event: any) => {
    setFilterCollegesByState(event.target.value);
  };

  useEffect(() => {
    setLifeEarningsWithCollege(careerWithCollegeSalary * lifeYearsEmployed);
  }, [careerWithCollegeSalary, lifeYearsEmployed]);

  useEffect(() => {
    setLifeEarningsWithoutCollege(
      careerWithoutCollegeSalary * (lifeYearsEmployed + 4),
      // there is an error here!!!
    );
  }, [careerWithoutCollegeSalary, lifeYearsEmployed]);

  useEffect(() => {
    setNetMoreEarningsWithCollege(
      lifeEarningsWithCollege - lifeEarningsWithoutCollege,
    );
  }, [lifeEarningsWithCollege, lifeEarningsWithoutCollege]);

  useEffect(() => {
    {
      selectedCollege.state === userStateResidency
        ? setSelectedCollegeCost(selectedCollege.total_cost_in_state_off_campus)
        : setSelectedCollegeCost(
            selectedCollege.total_cost_out_of_state_off_campus,
          );
    }
  }, [selectedCollege, userStateResidency]);

  useEffect(() => {
    {
      if (userStateResidency === filterCollegesByState) {
        const updatedColleges = colleges.sort(
          (a: any, b: any) =>
            a.total_cost_in_state_off_campus - b.total_cost_in_state_off_campus,
        );
        setSortedColleges(updatedColleges);
      } else {
        const updatedColleges = colleges.sort(
          (a: any, b: any) =>
            a.total_cost_out_of_state_off_campus -
            b.total_cost_out_of_state_off_campus,
        );
        setSortedColleges(updatedColleges);
      }
    }
  }, [colleges, userStateResidency, filterCollegesByState]);

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
                        {formatCurrencyToNearestDollar(career.salary)}{' '}
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
                        {formatCurrencyToNearestDollar(career.salary)}{' '}
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
                  {netMoreEarningsWithCollege < 0 ? (
                    <div style={{ color: 'red', fontWeight: 'bold' }}>
                      {formatCurrencyToNearestDollar(
                        netMoreEarningsWithCollege,
                      )}
                    </div>
                  ) : (
                    <div>
                      {formatCurrencyToNearestDollar(
                        netMoreEarningsWithCollege,
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="border-b border-gray-900/10 pb-12"
          style={{ maxWidth: '450px' }}
        >
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            College Degree Cost
          </h2>

          <div className="col-span-full flex items-center justify-between">
            <div>Your Residency</div>
            <select
              id="careerWithCollege"
              name="careerWithCollege"
              autoComplete="country-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              onChange={handleChangeStateResidency}
            >
              <option value="" disabled selected>
                Select State of Residency
              </option>
              {allStates.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          <div className="col-span-full flex items-center justify-between">
            <div>Filter Colleges</div>
            <select
              id="careerWithCollege"
              name="careerWithCollege"
              autoComplete="country-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              onChange={handleFilterCollegesByState}
            >
              <option value="" disabled selected>
                Filter Colleges by State
              </option>
              {allStates.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          <div className="col-span-full flex items-center justify-between">
            <div>Select College</div>

            <div className="mt-2">
              <select
                id="careerWithCollege"
                name="careerWithCollege"
                autoComplete="country-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                onChange={handleSelectedCollege}
              >
                <option value="" disabled selected>
                  Select College
                </option>
                {sortedColleges
                  .filter(
                    (college: any) => college.state === filterCollegesByState,
                  )
                  .map((college: any) => (
                    <option key={college.name} value={JSON.stringify(college)}>
                      {filterCollegesByState == userStateResidency
                        ? formatCurrencyToNearestDollar(
                            college.total_cost_in_state_off_campus,
                          )
                        : formatCurrencyToNearestDollar(
                            college.total_cost_out_of_state_off_campus,
                          )}{' '}
                      {college.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          <div className="col-span-full flex items-center justify-between">
            <div className="mt-2">Freshmen Year Cost</div>
            <div className="mt-2">
              {formatCurrencyToNearestDollar(selectedCollegeCost)}
            </div>
          </div>

          <div className="col-span-full flex items-center justify-between">
            <div className="mt-2">Sophomore Year Cost</div>
            <div className="mt-2">
              {formatCurrencyToNearestDollar(selectedCollegeCost)}
            </div>
          </div>

          <div className="col-span-full flex items-center justify-between">
            <div className="mt-2">Junior Year Cost</div>
            <div className="mt-2">
              {formatCurrencyToNearestDollar(selectedCollegeCost)}
            </div>
          </div>

          <div className="col-span-full flex items-center justify-between">
            <div className="mt-2">Senior Year Cost</div>
            <div className="mt-2">
              {formatCurrencyToNearestDollar(selectedCollegeCost)}
            </div>
          </div>

          <div className="col-span-full flex items-center justify-between">
            <div className="mt-2">Total College Cost</div>
            <div className="mt-2">
              {formatCurrencyToNearestDollar(selectedCollegeCost * 4)}
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Funding Plan
          </h2>
        </div>

        <div
          className="border-b border-gray-900/10 pb-12"
          style={{ maxWidth: '450px' }}
        >
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Overview
          </h2>

          <div className="col-span-full flex items-center justify-between">
            <div className="mt-2">Net Earnings with College</div>

            <div className="mt-2">
              {netMoreEarningsWithCollege < 0 ? (
                <div style={{ color: 'red', fontWeight: 'bold' }}>
                  {formatCurrencyToNearestDollar(netMoreEarningsWithCollege)}
                </div>
              ) : (
                <div>
                  {formatCurrencyToNearestDollar(netMoreEarningsWithCollege)}
                </div>
              )}
            </div>
          </div>
          <div className="col-span-full flex items-center justify-between">
            <div className="mt-2">Total College Cost</div>
            <div className="mt-2">
              {
                <div>
                  {formatCurrencyToNearestDollar(selectedCollegeCost * 4)}
                </div>
              }
            </div>
          </div>

          <div className="col-span-full flex items-center justify-between">
            <div className="mt-2">Total Value of College</div>
            <div
              className="mt-2"
              style={{
                color:
                  netMoreEarningsWithCollege - selectedCollegeCost * 4 < 0
                    ? 'red'
                    : 'black',
                fontWeight:
                  netMoreEarningsWithCollege - selectedCollegeCost * 4 < 0
                    ? 'bold'
                    : 'normal',
              }}
            >
              {formatCurrencyToNearestDollar(
                netMoreEarningsWithCollege - selectedCollegeCost * 4,
              )}
            </div>
          </div>
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
