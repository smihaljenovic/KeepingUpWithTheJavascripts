## Homework Assignment #12: Object Oriented Programming.
### Object oriented programming (OOP)
Object Oriented Programming (OOP) refers to using self-contained pieces of code to develop applications. We call these self-contained pieces of code **objects**, better known as Classes in most OOP programming languages and Functions in JavaScript. We use objects as building blocks for our applications. Building applications with objects allows us to adopt some valuable techniques, namely, **Inheritance** (objects can inherit features from other objects), **Polymorphism** (objects can share the same interface—how they are accessed and used—while their underlying implementation of the interface may differ), and **Encapsulation** (each object is responsible for specific tasks).

### Use of OOP
Let's say we want to create an application for a car wash. We can have different services depending on the type of car (Regular, SUV, Sport). A user can select what type of service he wants depending on the available services for its type.
```
class Car{
  model,
  color,
  year,
  plate,
  getServices()
}

class RegularCar extends Car {
  availableServices [
    "Wash",
    "Wax",
    "Vacuum"
  ]
}

class SUVCar extends Car {
  "WashXL",
  "WaxXL",
  "VacuumXL"
}

class SportCar extends Car {
  "Wash",
  "Wax",
  "Vacuum",
  "Leather Polish"
}

class washJob {
  car,
  selectedServices [],
  addCar(make, model, color, year, plate. type)
  addService(serviceType)
}
```
