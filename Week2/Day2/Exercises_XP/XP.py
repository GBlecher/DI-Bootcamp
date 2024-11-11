# # 🌟 Exercise 1 : Pets
# # Instructions
# # Using this code:


# # Create another cat breed named Siamese which inherits from the Cat class.
# # Create a list called all_cats, which holds three cat instances : one Bengal, one Chartreux and one Siamese.
# # Those three cats are Sara’s pets. Create a variable called sara_pets which value is an instance of the Pet class, and pass the variable all_cats to the new instance.
# # Take all the cats for a walk, use the walk method.
# class Pets():
#     def __init__(self, animals):
#         self.animals = animals

#     def walk(self):
#         for animal in self.animals:
#             print(animal.walk())

# class Cat():
#     is_lazy = True

#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def walk(self):
#         return f'{self.name} is just walking around'

# class Bengal(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'

# class Chartreux(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'

# class Siamese(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'
    
  
  
# cat_bengal = Bengal("Tony",3)    
# cat_chartreux =  Chartreux("Tom", 7)  
# cat_siamese =   Siamese("Sagwa",2)
# all_cats = [cat_bengal,cat_chartreux,cat_siamese]
# sara_pets = Pets(all_cats)
# sara_pets.walk()

# # ______________________________________________________________________________________________________________________________________________________
# # 🌟 Exercise 2 : Dogs
# # Instructions
# # Create a class called Dog with the following attributes name, age, weight.
# # Implement the following methods in the Dog class:
# # bark: returns a string which states: “<dog_name> is barking”.
# # run_speed: returns the dogs running speed (weight/age*10).
# # fight : takes a parameter which value is another Dog instance, called other_dog. This method returns a string stating which dog won the fight. The winner should be the dog with the higher run_speed x weight.

# # Create 3 dogs and run them through your class.

class Dog:
    def __init__(self,name,age,weight):
       self.name = name
       self.age = age
       self.weight = weight
       
    def bark(self):
        print(f"{self.name} is barking")
        
    def run_speed(self):
        speed = (self.weight/self.age *10)
        return speed
        
    def fight(self,other_dog):
        self.other_dog = other_dog
        self_stats = self.run_speed()* self.weight
        other_stats = other_dog.run_speed() * other_dog.weight
        
        if self_stats > other_stats:
            print(f"{self.name} Beats {other_dog.name}")
        else:
             print(f"{other_dog.name} Beats {self.name}")

        
dog1 = Dog("Fenrir", 5, 45) 
dog2 = Dog("Cerberus", 3, 50)    
dog3 = Dog("Argos", 4, 43)         
# 
# dog1.fight(dog2)   
# dog1.fight(dog3) 
# dog3.fight(dog2)  
# # ________________________________________________________________________________________________________________________

# Exercise 4 : Family
# Instructions
# Create a class called Family and implement the following attributes:

# members: list of dictionaries
# last_name : (string)

# Implement the following methods:

# born: adds a child to the members list (use **kwargs), don’t forget to print a message congratulating the family.
# is_18: takes the name of a family member as a parameter and returns True if they are over 18 and False if not.
# family_presentation: a method that prints the family’s last name and all the members’ details.

# Create an instance of the Family class, with the last name of your choice, and the below members. Then call all the methods you created in Point 2.

#     [
#         {'name':'Michael','age':35,'gender':'Male','is_child':False},
#         {'name':'Sarah','age':32,'gender':'Female','is_child':False}
#     ]
       
class Family:
    def __init__(self,last_name,members):

        self.last_name = last_name
        self.members = members
    def born(self, ** kwargs):
        self.members.append(kwargs)
        print(f" congrats on the new addition to the {self.last_name} family!")
    def is_18(self,name):
        for member in self.members:
            if member["name"] == name:
                return member["age"]>18
            else:
                return False
    def family_presentation(self):
        print(f"the {self.last_name} family:")
        for member in self.members:
            print(f" Name:{member["name"]}, Age:{member["age"]}, Gender:{member["name"]}, Is Chld: {member["name"]} ")
                              
members =[
        {'name':'Michael','age':35,'gender':'Male','is_child':False},
        {'name':'Sarah','age':32,'gender':'Female','is_child':False}
    ]                  

family1 = Family("Johnson",members)


family1.born(name = "Charles", age = 3, gender = "Male", is_child = True)
print(family1.is_18("Michael"))
print(family1.is_18("Sarah"))   
family1.family_presentation()

# ________________________________________________________________________________________________________________





# Exercise 5 : TheIncredibles Family
# Create a class called TheIncredibles. This class should inherit from the Family class:
# This is no random family they are an incredible family, therefore the members attributes, will be a list of dictionaries containing the additional keys : power and incredible_name. (See Point 4)


# Add a method called use_power, this method should print the power of a member only if they are over 18 years old. If not raise an exception (look up exceptions) which stated they are not over 18 years old.


# Add a method called incredible_presentation which :

# Print a sentence like “*Here is our powerful family **”
# Prints the family’s last name and all the members’ details (ie. use the super() function, to call the family_presentation method)

class TheIncredibles(Family):
    def __init__(self, last_name, members):
        super().__init__(last_name, members)
    
    def use_power(self,name):
        for member in self.members: 
            if member["name"] ==  name:
                if member["age"]>18:
                    print(f"{member["incredible_name"]} has the power to{member["power"]}.")
                    return
                else:
                    raise Exception(f"{name} is not over 18")
        raise Exception(f"No member with the name {name} found.")
    
    def incredible_presentation(self):
        print("*Here is our powerful family *")
        super().family_presentation()

members =[
    {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
    {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
]
                    


incredible_family = TheIncredibles("Incredibles",members)

incredible_family.incredible_presentation()

incredible_family.born(name='Baby Jack', age=1, gender='Male', is_child=True, power='Unknown Power', incredible_name='JackVanish')
incredible_family.incredible_presentation()

