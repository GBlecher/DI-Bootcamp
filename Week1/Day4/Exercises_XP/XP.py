import random


# # Exercise 1 : What are you learning ?
# # Instructions
# # Write a function called display_message() that prints one sentence telling everyone what you are learning in this course.
# # Call the function, and make sure the message displays correctly.


# def display_message():
#     print("I am learning Python")

# display_message()
# # _____________________________________________________________________________________________________________________________________


# #  Exercise 2: What’s your favorite book ?
# # Instructions
# # Write a function called favorite_book() that accepts one parameter called title.
# # The function should print a message, such as "One of my favorite books is <title>".
# # For example: “One of my favorite books is Alice in Wonderland”
# # Call the function, make sure to include a book title as an argument when calling the function.

# title = input(" Enter book title:\t")

# def favorite_book(title):
#     print(f'One of my favorite books is {title}')

# favorite_book(title)
# # _____________________________________________________________________________________________________________________________________


# # Exercise 3 : Some Geography
# # Instructions
# # Write a function called describe_city() that accepts the name of a city and its country as parameters.
# # The function should print a simple sentence, such as "<city> is in <country>".
# # For example “Reykjavik is in Iceland”
# # Give the country parameter a default value.
# # Call your function.

# city_name = input(" Enter city name:\t")
# country_name = input(" Enter countryname:\t")

# def describe_city(city_name, country_name):
#     print(f"{city_name} is in {country_name}")

# describe_city(city_name, country_name)


# # _____________________________________________________________________________________________________________________________________


# # Exercise 4 : Random
# # Instructions
# # Create a function that accepts a number between 1 and 100 and generates another number randomly between 1 and 100. Use the random module.
# # Compare the two numbers, if it’s the same number, display a success message, otherwise show a fail message and display both numbers.


# user_num = int(input("Enter number between 1 and 100:\t"))

# while user_num < 1 or user_num > 100:
#     user_num = int(input("Number out of range. Please enter number between 1 and 100:\t "))

# def gen_random(user_num):
#     random_num =    random.randint(1, 100)
#     if user_num == random_num:
#         print("Both numbers are the same")
#     else:
#         print(f"Fail!!!\nYour chosen number: {user_num} and the generated number: {random_num}, were different.")

# gen_random(user_num)


# #____________________________________________________________________________________________________________________________________________________

# #  Exercise 5 : Let’s create some personalized shirts !
# # Instructions
# # Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
# # The function should print a sentence summarizing the size of the shirt and the message printed on it, such as "The size of the shirt is <size> and the text is <text>"
# # Call the function make_shirt().

# # Modify the make_shirt() function so that shirts are large by default with a message that reads “I love Python” by default.
# # Call the function, in order to make a large shirt with the default message
# # Make medium shirt with the default message
# # Make a shirt of any size with a different message.

# # Bonus: Call the function make_shirt() using keyword arguments.

# size = input("what size shirt are you?\t")
# text= input("Type the text you wish to have printed:?\t")

# def make_shirt(size ="large", text= "I love Python"):
#     print(f"The size of the shirt is: {size} and the text to be printed is: '{text}' ")


# make_shirt()
# make_shirt(size,text)
# ____________________________________________________________________________________________________________________________________________________


# Exercise 6 : Magicians …
# Instructions
# Using this list of magician’s names

# magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

# Create a function called show_magicians(), which prints the name of each magician in the list.
# Write a function called make_great() that modifies the original list of magicians by adding the phrase "the Great" to each magician’s name.
# Call the function make_great().
# Call the function show_magicians() to see that the list has actually been modified.

# magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']


# def show_magicians(magician_names):
#     for name in magician_names:
#         print(name)


# def make_great(magician_names):
#     for index, name in enumerate(magician_names):
#         name = "The Great " + name
#         print(name)


# make_great(magician_names)
# show_magicians(magician_names)
# #____________________________________________________________________________________________________________________________________________________


# Exercise 7 : Temperature Advice


# random_deg = 0

# season = ''

# def get_random_temp(random_deg, season):
#     if season == "winter":
#         random_deg = (random.randint(-10, 16))
#     elif season == "autumn":
#         random_deg = random.randint(13, 21)
#     elif season == "summer":
#         random_deg = random.randint(21, 40)
#     elif season == "spring":
#         random_deg = random.randint(17, 25)
#     return random_deg




# def main(random_deg):

#     month = int(input(" input number of the month\t"))

#     while True:
#         if month < 1 or month > 12:
#             month = int(input(" input number of the month between 1 & 12!\t"))
#         else:
#             break

#     if month >= 3 and month <= 5:
#         season = "spring"
#     if month >= 6 and month <= 8:
#         season = "summer"
#     if month >= 9 and month <= 11:
#         season = "autumn"
#     if  month <=2 or month == 12:
#         season = "winter"

    

#     temp = get_random_temp(random_deg, season)
#     print(f" It is {season}. The temperature right now is {temp} degrees Celsius.")
#     if temp < 0:
#         print("Brrr, that’s freezing! Wear some extra layers today")
#     elif temp >= 0 and temp <= 16:
#         print(" Quite chilly! Don’t forget your coat!")
#     elif temp > 16 and temp <= 23:
#         print("Might be a little cool today, might be worth packing a thin sweater")
#     elif temp > 24 and temp <= 31:
#         print("What are you reading this for?? gGo to the beach!!  And dont forget sunblock.")
#     elif temp > 30:
#         print("Don't even bother leaving the AC ")


# main(random_deg)
#  #____________________________________________________________________________________________________________________________________________________



# Exercise 8 : Star Wars Quiz
# Instructions
# This project allows users to take a quiz to test their Star Wars knowledge.
# The number of correct/incorrect answers are tracked and the user receives different messages depending on how well they did on the quiz.

# Here is an array of dictionaries, containing those questions and answers

# data = [
#     {
#         "question": "What is Baby Yoda's real name?",
#         "answer": "Grogu"
#     },
#     {
#         "question": "Where did Obi-Wan take Luke after his birth?",
#         "answer": "Tatooine"
#     },
#     {
#         "question": "What year did the first Star Wars movie come out?",
#         "answer": "1977"
#     },
#     {
#         "question": "Who built C-3PO?",
#         "answer": "Anakin Skywalker"
#     },
#     {
#         "question": "Anakin Skywalker grew up to be who?",
#         "answer": "Darth Vader"
#     },
#     {
#         "question": "What species is Chewbacca?",
#         "answer": "Wookiee"
#     }
# ]

   

# answers = []
# incorrect = []


# def check_answers(answers, incorrect):
#     correct_count = 0
#     for i, user_answer in enumerate(answers):
#         if user_answer.lower() == data[i]["answer"].lower():
#             correct_count += 1
#             incorrect.append(f"Question  {i + 1} is Correct")
#         else:
#             incorrect.append(f"Incorrect, the correct answer for question {i + 1} is: {data[i]['answer']}")
#     return correct_count, incorrect

# for question in data:
#     print(f"Question: {question['question']}")
#     answers.append(input("Answer:\t"))

# correct_count, result = check_answers(answers, incorrect)

# print(f"You got {correct_count} out of {len(data)} correct.")
# print("Results:")
# for res in result:
#     print(res)
    
