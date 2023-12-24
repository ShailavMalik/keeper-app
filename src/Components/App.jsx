import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";

function App() {
  return (
    <>
      <Header />
      {notes.map(function (obj) {
        return <Note key={obj.key} title={obj.title} content={obj.content} />;
      })}
      <Footer />
    </>
  );
}

export default App;
