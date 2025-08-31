import axios from "axios";
import type { Note } from "../types/note";

const myKey = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;
const API_URL = "https://notehub-public.goit.study/api/notes";

export interface NoteHttpResponse {
  notes: Note[];
  totalPages: number;
  page: number;
  perPage: number;
}

export interface FetchNotesParams {
  page: number;
  search: string;
  tag?: string;
}

export const fetchNotes = async (params: FetchNotesParams) => {
  const response = await axios.get<NoteHttpResponse>(API_URL, {
    headers: {
      Authorization: `Bearer ${myKey}`,
    },
    params: { search: params.search, page: params.page, perPage: 10, tag: params.tag  },
  });
  // console.log(response.data);
  return response.data;
};

export const createNote = async (
  note: Omit<Note, "id" | "createdAt" | "updatedAt">
) => {
  const response = await axios.post<Note>(API_URL, note, {
    headers: {
      Authorization: `Bearer ${myKey}`,
    },
  });
  return response.data;
};

export const deleteNote = async (id: string) => {
  const response = await axios.delete<Note>(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${myKey}`,
    },
  });
  return response.data;
};


export const fetchNoteById = async (id: string) =>{
const response = await axios.get<Note>(`${API_URL}/${id}`, 
  {headers: {
    Authorization: `Bearer ${myKey}`,
  },
});
return response.data;
}


// axios.defaults.baseURL = "https://notehub-public.goit.study/api/"
// axios.defaults.headers["Authorization"] =
// 	`Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`