import { useQuery } from '@tanstack/react-query';

import axios from 'axios';
import ENV_VARS from '../utils/contants';

export function useSimplePrice() {
  const { data, isPending } = useQuery({
    queryKey: ['simple_price'],
    queryFn: () =>
      axios.get(
        `${ENV_VARS.baseURL}/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true`,
      ),
  });

  return { simplePrice: data?.data?.bitcoin, isPending };
}
