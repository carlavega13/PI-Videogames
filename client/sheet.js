let estrellitas = [];
let a = 3.56;
const b = () => {
  for (let i = 1; i <= Math.floor(a); i++) {
    console.log(i);
    estrellitas.push(i);
  }
  return estrellitas;
};
console.log(b());
