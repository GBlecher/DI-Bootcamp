# Instructions : Old MacDonald’s Farm
# Take a look at the following code and output:
# File: market.py

# macdonald = Farm("McDonald")
# macdonald.add_animal('cow',5)
# macdonald.add_animal('sheep')
# macdonald.add_animal('sheep')
# macdonald.add_animal('goat', 12)
# print(macdonald.get_info())
# Output

# McDonald's farm

# cow : 5
# sheep : 2
# goat : 12

#     E-I-E-I-0!


# Create the code that is needed to receive the result provided above. Below are a few questions to assist you with your code:

# Create a class called Farm. How should it be implemented?
# Does the Farm class need an __init__ method? If so, what parameters should it take?
# How many methods does the Farm class need?
# Do you notice anything interesting about the way we are calling the add_animal method? What parameters should this function have? How many…?
# Test your code and make sure you get the same results as the example above.
# Bonus: nicely line the text in columns as seen in the example above. Use string formatting.

class Farm:
    def __init__(self,farm_name):
       self.farm_name = farm_name
       self.animals = {}
    def add_animal(self,new_animal, num_of_animal = 1):
        if new_animal not in self.animals:
            self.animals[new_animal] =num_of_animal
        else:  
            self.animals[new_animal] +=  num_of_animal
    def get_info(self):
        print(f"{self.farm_name}'s farm")
        # TO CHECKER: USING get_info TO PRINT INSTEAD OF RETURN SOMETHING PRINTED THE OUTPUT IN THE FORMAT SHOWN IN THE QUESTION
        # HOWEVER IF YOU WISH SPECIFICALLY TO SEE  A RETURNED VALUE PRINTED I WILL FLAG THE OPTIONS
        
        # OPTION1:
        for key,value in self.animals.items():  
            print(f"{key} : {value} ")  
        # OPTION2:
        # return self.animals
    def get_animal_types(self):
        self.animals = sorted(self.animals) 
        return self.animals
    def get_short_info(self):   
        list = self.get_animal_types()
        print(f"{self.farm_name}'s farm has {list[0]}s, {list[1]}s and {list[2]}s.")

        


macdonald = Farm("McDonald")
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep',3)
macdonald.add_animal('sheep',5)
macdonald.add_animal('goat', 11)
# OPTION1:
macdonald.get_info()
# OPTION2:
# print(macdonald.get_info()) 

print("E-I-E-I-0!")

# print(macdonald.get_animal_types())
macdonald.get_short_info()

