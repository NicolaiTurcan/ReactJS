import React, { useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "./store/newsPage/actions";
import { selectorArticles, selectorArticlesError, selectorArticlesLoading } from "./store/newsPage/selectors";
import './App.css'

function NewPage() {
    const dispatch = useDispatch();
    const error = useSelector(selectorArticlesError);
    const loading = useSelector(selectorArticlesLoading);
    const articles = useSelector(selectorArticles);

    const reload = () => {
        dispatch(getArticles());
    }

    useEffect(() => {
        reload();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="container">
            <div className='article_section'>
                {loading && <CircularProgress />}
                {error ? (
                    <>
                        <h3>Error: {error}</h3>
                        <button onClick={reload}>Refresh</button>
                    </>
                ) :
                    (articles.map((article) => (
                        <article className='article_element' key={article.id}>
                            <div className='article_img'><img src={article.imageUrl} alt={article.id}></img></div>
                            <h3>{article.title}</h3>
                            <p>{article.summary}</p>
                            <p>{article.newsSite}</p>
                        </article>
                    )))}
            </div>
        </div>
    );
}

export default NewPage;