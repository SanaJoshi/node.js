class Dog{
  constructor(name) {
    this.name = name;
  }
  bark(){
    // return 'hogehoge $(this.name)';
    return `wah wah I'm ${this.name}`;

  }
}

module.exports = Dog;
