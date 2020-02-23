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

const newUsers = [
  ...users,
  {
    id: 3,
    name: "Gor",
    position: "Developer",
    avatar:
      "https://www.veracode.com/sites/default/files/styles/blog_post_resize_960/public/developer-guide-blog-2.png?itok=JQGRVjEX"
  }
];

export default function getUsers({ isRefresh = false } = {}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(isRefresh ? newUsers : users);
    }, 1000);
  });
}
