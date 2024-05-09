import show from "./daud"
export class Daud{
  constructor(a) {
this.name=a
  }
  display = () => {
    show(this.name)

  }

}
 const hws =new Daud(70)
 const hws1 =new Daud(60)
 hws.display()
 hws1.display()