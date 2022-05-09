import React from "react";
import Brand from "./Brand";
import BaseSpace from "../../component/BaseSpace";
import Mine from "./Mine";
import Gmt from "./Gmt";
export default function Main() {
  return (
    <section id="main">
      <BaseSpace height="14rem" />
      <Brand />
      <BaseSpace height="12rem" />
      <Mine />
      <BaseSpace height="12rem" />
      <Gmt />
    </section>
  );
}
