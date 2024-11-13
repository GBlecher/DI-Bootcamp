# # 🌟 Exercise 1 – Random Sentence Generator
# # Instructions
# # Description: In this exercise we will create a random sentence generator. We will do this by asking the user how long the sentence should be and then printing the generated sentence.

# # Hint : The generated sentences do not have to make sense.

# # Download this word list

# # Save it in your development directory.

# # Create a function called get_words_from_file. This function should read the file’s content and return the words as a collection. What is the correct data type to store the words?

# # Create another function called get_random_sentence which takes a single parameter called length. The length parameter will be used to determine how many words the sentence should have. The function should:
# # use the words list to get your random words.
# # the amount of words should be the value of the length parameter.

# # Take the random words and create a sentence (using a python method), the sentence should be lower case.

# # Create a function called main which will:

# # Print a message explaining what the program does.

# # Ask the user how long they want the sentence to be. Acceptable values are: an integer between 2 and 20. Validate your data and test your validation!
# # If the user inputs incorrect data, print an error message and end the program.
# # If the user inputs correct data, run your code.
# import random


# def get_words_from_file(f):
#     for i in f:
#         content.append((f.readline()).strip("\n"))
#     return content


# def get_random_sentence(length):
#     random_sentence_list = []
#     for word in range(length):
#         random_word = random.choice(content)
#         random_sentence_list.append(random_word)
#     random_sentence_str = " ".join(random_sentence_list)
#     print(random_sentence_str.lower())


# def main():
#     print("This program reads an external file, copies each word into a list item.\n"
#           "Then the program selects fetches an <length> amount of random words that is pre detemined and prints them as a sentence ")

#     while True:
#         try:
#             length = int(
#                 input("please input number of words the sentence should be:\t1"))
#             if length >= 2 or length <= 20:
#                 return get_random_sentence(length)
#         except:
#             ValueError("Input must be between 2 and 20")


# with open("XP_text.txt", "r+", encoding="utf_8") as f:
#     content = []
#     content = get_words_from_file(f)


# main()
# # _____________________________________________________________________________________________________________________
# 🌟 Exercise 2: Working with JSON
# Instructions
import json
sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

data = json.loads(sampleJson)

salary = data["company"]["employee"]["payable"]["salary"]

print(salary)

data["company"]["employee"]["birth_date"] = "1958,8,29"

with open("Updated_sampleJson.json", "w") as json_file:
    json.dump(data,json_file, indent = 4)






