// actions/getPosts.ts

"use server";
import { getApiUrl } from "@/utils/getApiUrl";
import { handleError } from "@/utils/handleError";
import { Post } from "@/types/Post";

export const getPosts = async (
  offset: number,
  limit: number
): Promise<Post[]> => {
  const url = getApiUrl(offset, limit);

  let response: Response;

  try {
    response = await fetch(url);
  } catch (error: unknown) {
    console.error(error);
    throw new Error(`Network request failed: ${error}`);
  }

  if (!response.ok) {
    throw await handleError(response);
  }

  return response.json() as Promise<Post[]>;
};
