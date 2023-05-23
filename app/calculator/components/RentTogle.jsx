'use client';

import { useState, useEffect } from 'react';
import { Switch } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function RentTogle({value, onTogleChange}) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(value);
  }, [value]);

  const handleTogleChange = () => {
    setEnabled(!enabled);
    onTogleChange(!value);
  }


  return (
    <div className='flex flex-col justify-center my-2'>
      <label htmlFor="rentTogle" className="self-center ml-1 mr-2 font-bold text-lg ">Renting</label>
      <Switch
        checked={enabled}
        onChange={handleTogleChange}
        className="self-center group relative inline-flex h-7 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
      >
        <span className="sr-only">Use setting</span>
        <span aria-hidden="true" className="pointer-events-none absolute h-full w-full rounded-md" />
        <span
          aria-hidden="true"
          className={classNames(
            enabled ? 'bg-indigo-600' : 'bg-gray-300',
            'pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out'
          )}
        />
        <span
          aria-hidden="true"
          className={classNames(
            enabled ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out'
          )}
        />
      </Switch>
    </div>
  )
}
