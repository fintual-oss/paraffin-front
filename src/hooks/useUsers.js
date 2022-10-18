import useSWR from 'swr';

export default function useUsers() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(`http://${process.env.NEXT_PUBLIC_FRONT_URL}/api/current_user`, fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}
