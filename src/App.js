import React from "react";
import Card from "./Card";

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
  return users.map(({ avatar, name, position, id }) => (
    <Card avatar={avatar} key={id} name={name} position={position} />
  ));
}

export default App;
