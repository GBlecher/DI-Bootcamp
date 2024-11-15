class AnagramChecker:
    def __init__(self, file_name):
        with open(file_name, "r", encoding="utf-8") as file:
            self.content = file.read().strip("\n").split()

    def print_list(self):
        for word in range(5):
            print(self.content[word])
        print(type(self.content))

    def is_valid_word(self, user_word):
        if isinstance( user_word,str) and user_word.isalpha() and len(user_word.split())==1:     
            return True
        else:
            return False

    def get_anagrams(self, user_word):
        if self.is_valid_word(user_word) == True:
            match_list = [comp_word for comp_word in self.content 
            if (len(comp_word) == len(user_word)) and 
            (sorted(comp_word.lower()) == sorted(user_word)) and 
            (comp_word.lower() != user_word)]
            return match_list
        else:
            raise Exception(f"{user_word} is not a valid word\n" 
                            "1. Input must contain only letters - No digits or special characters\n"
                            "2. input  must only be one word")

user_word = input("Please type a word:\t").lower()

file_name = "Word_List.txt"

list = AnagramChecker(file_name)
anagrams =  ', '.join(list.get_anagrams(user_word))   

print(f"YOUR WORD : '{user_word.upper()}'\n"
"This is a valid English word.\n"
f"Anagrams for your word: {anagrams}")
 
     
 
 
 

