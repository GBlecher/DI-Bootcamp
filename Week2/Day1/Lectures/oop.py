class Person:
    def __init__(self, name, age,height ):
        self.name = name
        self.height = height
        self.age = age
    def presentation(self):
        print(f"Hello, my name is {self.name}, i am {self.age} years old")

        
        
        
father = Person( "Dad" , 60 , 180  )
brother = Person("Bob", 23, 190)

# print(father.name)
# print(father.age)        
# print(father.height)
# # 
# print(brother.name)
# print(brother.age)        
# print(brother.height)

# father.presentation()
# brother.presentation()


Person.presentation(father)