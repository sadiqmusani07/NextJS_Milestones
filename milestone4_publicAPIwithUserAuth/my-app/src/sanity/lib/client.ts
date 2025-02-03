import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from '../env';

const apiToken = process.env.SANITY_API_TOKEN;

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,  // You can set it to `true` for read-only use
  token: apiToken,
});
