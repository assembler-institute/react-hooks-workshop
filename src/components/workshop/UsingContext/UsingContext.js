import React from "react";

import { PostsContext } from "./context/PostsContext";
import { LocaleContext } from "./context/LocaleContext";

import Main from "./Main/Main";
import PageHeader from "../PageHeader/PageHeader";
import Button from "../Button/Button";
import ContentsHeader from "../ContentsHeader/ContentsHeader";

function UsingContext({ toggleLocale, locale, posts }) {
  return (
    <div className="container mt-5">
      <PageHeader title="using context 💯" />
      <header className="row row-cols-2 mb-3">
        <div className="col">
          <ContentsHeader locale={locale} />
        </div>
        <div className="col ml-auto d-flex">
          <Button toggleLocale={toggleLocale} />
        </div>
      </header>
      <LocaleContext.Provider value={locale}>
        <PostsContext.Provider value={posts}>
          <Main />
        </PostsContext.Provider>
      </LocaleContext.Provider>
    </div>
  );
}

export default UsingContext;
