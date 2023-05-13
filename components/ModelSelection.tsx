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
    <div className='mt-2'>
      <Select
        className='text-black'
        options={models?.modelOptions}
        defaultValue={model}
        placeholder={model}
        isSearchable
        isLoading={isLoading}
        menuPosition='fixed'
        classNames={{
          control: (state) =>
            'bg-[#434654] border-[#434654] text-black border-[#434654]',
        }}
        onChange={(option) => setModel(option.value)}
      />
    </div>
  );
};

export default ModelSelection;
