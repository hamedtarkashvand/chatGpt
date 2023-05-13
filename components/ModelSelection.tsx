'use client';
import type { NextPage } from 'next';
import Select from 'react-select';
import useSWR from 'swr';
const fetcher = () => fetch('/api/getEngines').then((res) => res.json());

const ModelSelection: NextPage = () => {
  const { data: models, isLoading } = useSWR('models', fetcher);
  const { data: model, mutate: setModel } = useSWR('model', {
    fallbackData: 'text-davinci-003',
  });

  return (
    <div className='hidden md:block'>
      <Select
        className='mt-2 text-black'
        options={models?.modelOptions}
        defaultValue={model}
        placeholder={model}
        isSearchable
        isLoading={isLoading}
        menuPosition='fixed'
        classNames={{
          control: (state) => 'bg-[#436554] border-[#434654] text-black',
        }}
        onChange={(option) => setModel(option.value)}
      />
    </div>
  );
};

export default ModelSelection;
