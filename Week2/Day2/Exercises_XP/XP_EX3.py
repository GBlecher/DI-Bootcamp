from XP import Dog
# 🌟 Exercise 3 : Dogs Domesticated
# Instructions
# Create a new python file and import your Dog class from the previous exercise.
# In the new python file, create a class named PetDog that inherits from Dog.
# Add an attribute called trained to the __init__ method, this attribute is a boolean and the value should be False by default.
# Add the following methods:
# train: prints the output of bark and switches the trained boolean to True

# play: takes a parameter which value is a few names of other Dog instances (use *args). The method should print the following string: “dog_names all play together”.

# do_a_trick: If the dog is trained the method should print one of the following sentences at random:
# “dog_name does a barrel roll”.
# “dog_name stands on his back legs”.
# “dog_name shakes your hand”.
# “dog_name plays dead”.       

from XP import Dog
import random
# import XP

class PetDog(Dog):
    
    def __init__(self,name,age,weight ,trained= False):
        self.trained = trained
        Dog.__init__(self,name,age,weight)
    def train(self):
        self.bark()
        self.trained= True
    def play(self,*args):
        dog_names = [arg.name for arg in args]
        print(f"{', '.join(dog_names)} and {self.name} all play together")
        # for arg in  args :
        #     print(arg.name)
        # print("all play together")
    def do_a_trick(self,*args):
        tricks = ["does a barrel roll",
                  "stands on his back legs",
                  "shakes your hand",
                  "plays dead"]
        if self.trained:
                print(f"{self.name} {random.choice(tricks)}")
        for dog in  args :
            if dog.trained:
                print(f"{dog.name} {random.choice(tricks)}")
 
 
dog1 = PetDog("Fenrir", 5, 45,True) 
dog2 = PetDog("Cerberus", 3, 50)    
dog3 = PetDog("Argos", 4, 43, True)    
dog4 = PetDog("Snap", 5, 45,True) 
dog5 = PetDog("Crackle", 3, 50)    
dog6 = PetDog("Pop", 4, 43, True)    

# dog1.play(dog2,dog3, dog4, dog5,dog6)
dog1.do_a_trick(dog2,dog3, dog4, dog5,dog6)






# dog1.do_a_trick(all_dogs)