# Instructions :
# The goal is to create a class that represents a simple circle.
# A Circle can be defined by either specifying the radius or the diameter.
# The user can query the circle for either its radius or diameter.

# Other abilities of a Circle instance:

# Compute the circle’s area
# Print the attributes of the circle - use a dunder method
# Be able to add two circles together, and return a new circle with the new radius - use a dunder method
# Be able to compare two circles to see which is bigger, and return a Boolean - use a dunder method
# Be able to compare two circles and see if there are equal, and return a Boolean- use a dunder method
# Be able to put them in a list and sort them
# Bonus (not mandatory) : Install the Turtle module, and draw the sorted circles


class Circle:
    circles_list =[]
    def __init__(self,name,choice, amount): 
        self.name = name
        self.choice = choice
        
        if self.choice == 'diameter':
            self.diameter = amount
            self.radius = self.diameter/2
        elif choice == 'radius':
            self.radius = amount
            self.diameter = self.radius * 2
        self.add_to_list()
        
    def __str__(self): 
        return f"**{self.name.upper()}**\nRadius:\t\t{self.radius}cm \nDiameter:\t{self.diameter}cm \n "
    def __iadd__(self,other):
            self.radius += other.radius
            self.diameter += other.diameter
            return self
    def __gt__(self,other):
        return self.radius> other.radius
    
    def __eq__(self, other) -> bool:
        return self.radius == other.radius
    def  add_to_list(self):
        Circle.circles_list.append(self)
        Circle.circles_list = sorted(Circle.circles_list)
            
  
     
circle1 = Circle("circle1","radius", 13)
circle2 = Circle("circle2","radius", 12)
circle3 = Circle("circle3","diameter", 38)
circle4 = Circle("circle4","diameter", 24)

# circle1 += circle2
# print(circle1)
# print(circle3)
# circle3 += circle2
# print(circle3)

# print(circle1 > circle2)
# print(circle1 > circle3)
print(circle1 == circle3)
print(circle2 == circle4)

# print(Circle.circles_list)
for circle in Circle.circles_list:
    print(circle)   
        