# #Exercise 1 : Favorite Numbers

# my_fav_numbers = {3,5,7,9}
# print(my_fav_numbers)

# my_fav_numbers.add(1)
# my_fav_numbers.add(11)
# print(my_fav_numbers)

# my_fav_numbers.pop()
# my_fav_numbers.pop()
# print(my_fav_numbers)

# friend_fav_numbers = {2,4,6,8,10}
# our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
# print(our_fav_numbers)
# ---------------------------------------------------------------    


# #Exercise 2: Tuple

# #No you can not a tuble is an immutable data type
# ---------------------------------------------------------------       


# Exercise 3: List

# basket = ["Banana", "Apples", "Oranges", "Blueberries"];

# basket.remove("Banana")
# basket.remove("Blueberries")
# basket.append("Kiwi")
# basket.insert(0, "Apples")
# print(basket)

# count = basket.count("Apples")
# print(count)

# basket.clear()
# print(basket)
# ---------------------------------------------------------------  


# Exercise 4: Floats

# an Integer is a whole number while a float is a number that has a decimal point

# my_float_list= [1.5]
# i = 0
 
# while my_float_list[i] < 5:
#     new_float = my_float_list[i] + 0.5
#     my_float_list.append(new_float)
#     i += 1
# print(my_float_list)
# ---------------------------------------------------------------  


#Exercise 5: For Loop

# for i in range(1,21):
#     print(i)

# for i in range(1,21):
#     if i%2:
#      print(i) 
# ---------------------------------------------------------------  


# Exercise 6 : While Loop

# name = ""
# name_list = list()
# while name != "Gilan":
#    name = input("Please enter first name:\t")
#    if name == "Gilan":#if you wanty it to include name then you can remove the if statement
#     break
#    name_list.append(name)

# print(name_list)
# ---------------------------------------------------------------  



# Exercise 7: Favorite fruits

# fruit_str = input("Input favourite fruit and seperate each name with a [space]:\t")

# fruit_list = fruit_str.split()
# print(fruit_list)

# fruit_str = input("Input a random fruit name:\t")
# i=0

# for index in fruit_list:
#     if fruit_str == index:
#         print("You chose one of your favorite fruits! Enjoy!")
#         break
#     elif fruit_str != index:
#         print("You chose a new fruit. I hope you enjoy")
#         break
#     else:
#         i+=1
#         continue
# ---------------------------------------------------------------  


#    Exercise 8: Who ordered a pizza ? 
  
# topping_str = input("Enter topping:\t")
# index = 0
# topping_list = []

# while topping_str != "quit":
#     print(f"+1 {topping_str} added!")
#     topping_list.append(topping_str)
#     topping_str = input("Enter topping:\t")

# topping_count = len(topping_list)
# total = (topping_count * 2.5) + 10
# for each_item in topping_list:
#     print(f">> {each_item.title()} \n ")

# print(f" Total is : {total} ")
# ---------------------------------------------------------------  


# Exercise 9: Cinemax

# baby =0
# child = 10
# adult = 15
# family_age_list=[]

# member_age= int(input("How old is Your Family member?\t"))
# while member_age != -1:
#     if member_age < 3:
#         family_age_list.append(baby)
#     elif    member_age >3 and member_age<12:
#         family_age_list.append(child)
#     elif member_age> 12:    
#         family_age_list.append(adult)

#     member_age = int(input("How old is Your Family member?\t"))    

# total_price = sum(family_age_list)
# print( total_price) 


# names_list = [ "Alice","Bob","Charlie","David","Eva","Frank","Grace","Hannah","Isaac","Jack"]

# for each_child in names_list:
#     child_Age = int(input(f"what is the age of {each_child}"))
#     if child_Age < 16 or child_Age> 21:
#         names_list.remove(each_child)

# print(names_list)       
# ---------------------------------------------------------------  


# Exercise 10 : Sandwich Orders
# Instructions
# Using the list below :

# The deli has run out of pastrami, use a while loop to remove all occurrences of “Pastrami sandwich” from sandwich_orders.
# We need to prepare the orders of the clients:
# Create an empty list called finished_sandwiches.
# One by one, remove each sandwich from the sandwich_orders while adding them to the finished_sandwiches list.
# After all the sandwiches have been made, print a message listing each sandwich that was made, such as:

sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

for each_sandwich  in sandwich_orders:
    if each_sandwich == "Pastrami sandwich":
        sandwich_orders.remove("Pastrami sandwich")
    else:
        continue


print(sandwich_orders)

finished_sandwiches =[]

while sandwich_orders:
    sandwich = sandwich_orders.pop(0)
    finished_sandwiches.append(sandwich)
    # sandwich_orders.remove(each_sandwich)

for each_sandwich  in finished_sandwiches:
    print(f"I made your {each_sandwich}\n")