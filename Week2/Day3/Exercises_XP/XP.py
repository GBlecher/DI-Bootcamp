
# # 🌟 Exercise 1: Currencies
# # Instructions
# class Currency:
#     def __init__(self, currency, amount):
#         self.currency = currency
#         self.amount = amount

#     #Your code starts HERE
#     def __str__(self):
#         return f"{self.amount} {self.currency}"
    
#     def __int__(self):
#         return self.amount
#     def __repr__(self) :
#         return f"{self.amount} {self.currency}"
#     def __iadd__(self,other):
#         if isinstance(other, Currency):
#             if self.currency == other.currency:
#                 self.amount += other.amount
#                 return self
#             else:
#                 raise TypeError(f" Cannot add between Currency type {self.currency} and {other.currency}")
                
#         elif isinstance(other, int):
#             self.amount += other
#             return self
       
       

    
    
# c1 = Currency('dollar', 5)
# c2 = Currency('dollar', 10)
# c3 = Currency('shekel', 1)
# c4 = Currency('shekel', 10)
# # print hiughest priority
# # print(c1)
# # # print specific dunder methods
# # print(str(c1))
# # print(int(c1))
# # print(repr(c1))

# # c1 += c2
# # print(c1.amount)

# # c1 += 13
# # print(c1.amount)
# # c1 += c4
# # print(c1.amount)
# # _______________________________________________________________________________________________________________________
# # 🌟 Exercise 2: Import
#     #IN FILES func.py and exercise_one.py

# # _____________________________________________________________________________________________________________________________
# # 🌟 Exercise 3: String module
# # Instructions
# # Generate random String of length 5
# # Note: String must be the combination of the UPPER case and lower case letters only. No numbers and a special symbol.
# # Hint: use the string module

# import random
# import string


# def gen_random_str(length = 5):
    
#     letters = string.ascii_letters
    
#     random_string = "".join(random.choice(letters) for _ in range(length))
    
#     return random_string
    
# print(gen_random_str()) 
# # _____________________________________________________________________________________________________________________

# # 🌟 Exercise 4 : Current Date
# # Instructions
# # Create a function that displays the current date.
# # Hint : Use the datetime module.

# import datetime

# def diplay_today():
#     today = datetime.date.today()
#     print(today)    
    
# # print(dir(datetime))
# diplay_today()
#  # _____________________________________________________________________________________________________________________
 
# #  Exercise 5 : Amount of time left until January 1st
# # Instructions
# # Create a function that displays the amount of time left from now until January 1st.
# # (Example: the 1st of January is in 10 days and 10:34:01hours).

# import datetime

# def calc_time_left():
#     today = datetime.datetime.now()
#     Jan1 = datetime.datetime(2025,1,1,0,0,0)
#     time_left = Jan1 - today
#     print(time_left)


# calc_time_left()

# # _____________________________________________________________________________________________________________________
# # Exercise 6 : Birthday and minutes
# # Instructions
# # Create a function that accepts a birthdate as an argument (in the format of your choice), 
# # then displays a message stating how many minutes the user lived in his life.

# import datetime


# def calc_time_lived( birthday =  datetime.datetime(1997,8,26,9,14)):
#     today = datetime.datetime.now()
#     time_lived = today - birthday 
#     print(time_lived)

# calc_time_lived()

# ____________________________________________________________________________________________________________________________
# Exercise 7 : Faker Module
# Instructions
# Install the faker module, and take a look at the documentation and learn how to properly implement faker in your code.
# Create an empty list called users. Tip: It should be a list of dictionaries.
# Create a function that adds new dictionaries to the users list. Each user has the following keys: name, adress, langage_code. 
# Use faker to populate them with fake data.

#  TOO CHECKER: PIP INSTALL DID NOT WORK