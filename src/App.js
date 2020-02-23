import React from "react";
import Cards from "./components/Cards";

const users = [
  {
    id: 1,
    name: "Vrezh",
    position: "Developer",
    avatar:
      "https://www.veracode.com/sites/default/files/styles/blog_post_resize_960/public/developer-guide-blog-2.png?itok=JQGRVjEX"
  },
  {
    id: 2,
    name: "Valod",
    position: "Developer",
    avatar:
      "https://www.veracode.com/sites/default/files/styles/blog_post_resize_960/public/developer-guide-blog-2.png?itok=JQGRVjEX"
  }
];

function App() {
  return <Cards items={users} />;
}

export default App;
