import * as React from "react";

type MyCompProps = {
  name: "Le Batisseur" | "software engineer at amazon";
  isMarried: boolean;
  kid: 2 | 4;
  livedIn?: ["va", "ny"];
};

const MyComp = (props: MyCompProps) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  );
};
export default MyComp;
