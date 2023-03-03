import axios from "axios";
import { IArticle } from "Interfaces/IArticle";
import { IListArticles } from "Interfaces/IListArticles";
import { Dispatch, SetStateAction } from "react";

export const api = axios.create({
  baseURL: "https://api.beta.mejorconsalud.com/wp-json/mc/v2/",
});
export const apiDetails = async (
  id: string | undefined,
  setPost: Dispatch<SetStateAction<IArticle>>
) => {
  await api.get(`/posts/${id}`).then((resp) => {
    setPost(resp.data);
  });
};
export const apiRelevance = async (
  search: string,
  setList: Dispatch<SetStateAction<IListArticles>>
) => {
  await api
    .get("posts", {
      params: { search: search, page: 1, orderBy: "relevance" },
    })
    .then((resp) => {
      setList(resp.data);
    })
    .catch((e) => {
      alert(e);
    });
};
export const RequestApi = async (
  search: string,
  setList: Dispatch<SetStateAction<IListArticles>>,
  page: number
) => {
  await api
    .get("posts", {
      params: {
        search: search,
        page: page,
      },
    })
    .then((response) => {
      setList(response.data);
    })
    .catch((e) => {
      alert("erro" + e);
    });
};
