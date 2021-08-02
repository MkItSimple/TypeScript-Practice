document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;

interface Person {
  first: string;
  last: string;
}

const myPerson: Person = {
  first: "jack",
  last: "herrington"
};

console.log(myPerson);
