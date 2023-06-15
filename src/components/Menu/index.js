import React from "react";

function Menu({children}){
  return <nav>{children}</nav>
}

function Item({children}){
  return <a href="#">{children}</a>
}

// 这一行代码是将Item组件挂载到Menu组件上，这样在App.js中就可以直接使用Menu.Item了
Menu.Item = Item

export default Menu
