class Dog{
  constructor(name) {
    this.name = name;
  }
  bark(){
    // return 'hogehoge $(this.name)';
    return 'wah wah'+this.name ;

  }
}

module.exports = Dog;
