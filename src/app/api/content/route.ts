import { createClient } from 'contentful';

import { ContentEntry, ContentType } from '@/lib/types';


const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  environment: process.env.CONTENTFUL_ENVIRONMENT!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export async function getEntries(contentType: ContentType, page = 1, limit = 10): Promise<{ items: ContentEntry[], total: number }> {
  const skip = (page - 1) * limit;
  const response = await client.getEntries({
    content_type: contentType,
    skip,
    limit,
  });

  return {
    items: response.items as ContentEntry[],
    total: response.total
  };
}