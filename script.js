//1.Class Movie
//a)
class movie { 

    constructor(title, studio, rating) { 

      this.title = title; 
      this.studio =  studio; 
       this.rating = rating; 
    } 
}
var movieDetails = new movie("Leo","Seven Screen Studios", "MPAA");
console.log(movieDetails);

//output
//rating: "MPAA" 
//studio: "Seven Screen Studios"
//title: "Leo"

//b)
class movies { 

    constructor(title, studio, rating = "PG") { 

      this.title = title; 
      this.studio =  studio; 
      this.rating = rating; 

    } 
}
var movie1 = new movies("Leo","Seven Screen Studios");
console.log(movie1);

//output
//rating: "PG" 
//studio: "Seven Screen Studios"
//title: "Leo"

//c)
class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(input) {
        var out = input.filter(movie => movie.rating === "PG");
        return out;
    }
}

var movie1 = new Movie("Leo", "Seven Screen Studios", "MPAA");
var movie2 = new Movie("Varisu", "Sri Venkateswara Creations", "V");
var movie3 = new Movie("Kantara", "KRG Studios", "PG");
var movie4 = new Movie("Vikram", "Raj kamal films", "PG-13");
var movie5 = new Movie("veeram", "Vijaya production", "PG");

var movieArray = [movie1, movie2, movie3, movie4, movie5];
var pgMovies = Movie.getPG(movieArray);
console.log(pgMovies); 

// Output: 
 // Movie { title: 'Kantara', studio: 'KRG Studios', rating: 'PG' },
 // Movie { title: 'veeram', studio: 'Vijaya production', rating: 'PG' } ]

 //d)
 
class Movie {
    constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
    }
    }
    
    var casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

    console.log(casinoRoyale);

    //OUTPUT:
    //rating: "PG-13"
    //studio: "Eon Productions"
    //title: "Casino Royale"c


    //2)
    class Circle {
     constructor(radius = 1.0, color = "red") {
     this._radius = radius;
     this._color = color;
     }
     get radius() {
      return this._radius;
     }
            
     set radius(radius) {
      this._radius = radius;
     }
            
     get color() {
    return this._color;
    }
            
    set color(color) {
      this._color = color;
    }
    
    toString() {
      return `Circle [radius = ${this._radius} , color = ${this._color}]`;
       }
            
        getArea() {
     return Math.PI * Math.pow(this._radius, 2);
        }
        
    getCircumference() {
      return 2 * Math.PI * this._radius;
      }
            }
            
    var circle1 = new Circle(2, "green");
    var circle2 = new Circle(5, "Yellow");
            
    console.log(circle1.toString());
    console.log("Area:", circle1.getArea());
    console.log("Circumference:", circle1.getCircumference());
            
    console.log(circle2.toString());
    console.log("Area:", circle2.getArea());
    console.log("Circumference:", circle2.getCircumference());
            
      //circle 1
    //Circle [radius = 2 , color = green]
     // Area: 12.566370614359172
   //Circumference: 12.566370614359172
            
     //circle 1
    //Circle [radius = 5 , color = Yellow]       
    //Area: 78.53981633974483
     //Circumference: 31.41592653589793
            

     //3)
     class Person {
     constructor(firstName, lastName, age, department, email, mobile, city){
      this.firstName = firstName;
     this.lastName = lastName;
     this.age = age;
    this.department=department;
     this.email=email;
     this.mobile=mobile;
     this.city = city;
    }
      getPersonDetails(){
     return `Name: ${this.firstName} ${this.lastName}
            age: ${this.age}
           department: ${this.department}
           email: ${this.email}
           mobile: ${this.mobile}
           city: ${this.city}`;
        }
         }
         var person1 = new Person("Nila", "Kumar",24, "English", "nilak@gmail.com", 9361582282, "Salem");
         
         console.log(person1.getPersonDetails());
         
         
         //output
         //Name: Nila Kumar
         //age: 24
         //department: English
         //email: nilak@gmail.com
         //mobile: 9361582282
         //city: Salem
       
//4)

class UberPrice {
    constructor(distance, duration, baseFare, costPerMile, costPerMinute) {
     this.distance = distance;
     this.duration = duration;
     this.baseFare = baseFare;
     this.costPerMile = costPerMile;
    this.costPerMinute = costPerMinute;
    }
  
  totalPrice() {
     return this.baseFare + (this.distance * this.costPerMile) + (this.duration * this.costPerMinute);
    }
  }
  
  var myUber = new UberPrice(5, 10, 60, 14, 2);
  console.log(myUber.totalPrice());
  
  //output
  //150
