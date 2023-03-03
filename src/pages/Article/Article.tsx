import { ArticleDetails } from "components/ArticleDetails/ArticleDetails";
import { Header } from "components/Header/Header";
import React, { useEffect, useState } from "react";
import { IArticle } from "Interfaces/IArticle";
import { apiDetails } from "services/api";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { LoadingSpinner } from "components/LoadingSpinner/LoadingSpinner";

export default function Article() {
  const INITIAL_STATE: IArticle = {
    content: "",
    title: "",
    headline: "",
    featured_media: {
      medium_large: "",
    },
    published: "",
    bibliography: "",
    categories: [{ name: "" }],
    author: { name: "", picture: "", description: "" },
    metas: {
      title: "",
      description: "",
      robots: "",
      "og:title": "",
      "og:description": "",
      "og:type": "",
      "og:site_name": "",
      "og:image": "",
      "google-site-verification": "",
    },
    tags: [{ name: "" }],
  };
  const { id } = useParams();
  const [post, setPost] = useState(INITIAL_STATE);
  useEffect(() => {
    apiDetails(id, setPost);
  }, [id, setPost]);

  return (
    <>
      <Header />
      {post !== INITIAL_STATE ? (
        <ArticleDetails article={post} />
      ) : (
        <div className="flex justify-around items-center h-[50vh]">
          <LoadingSpinner />
        </div>
      )}

      <Helmet>
        <title>{post.metas.title}</title>
        <meta
          property="og:description"
          content={post.metas["og:description"]}
        />
        <meta property="og:image" content={post.metas["og:image"]} />
        <meta property="og:site_name" content={post.metas["og:site_name"]} />
        <meta property="og:type" content={post.metas["og:type"]} />
        <meta property="robots" content={post.metas.robots} />
        <meta property="og:title" content={post.metas["og:title"]} />
      </Helmet>
    </>
  );
}
